import { Injectable, Inject} from '@nestjs/common';
import { Model } from 'mongoose';
import { CATEGORIE_MODEL_PROVIDER } from 'src/constants';
import { CategorieInterface } from './interfaces/categorie.interface';
import { CategorielDTO } from './dto/categorie.dto';

@Injectable()
export class CategorieService {
    constructor(@Inject(CATEGORIE_MODEL_PROVIDER) private readonly categorieModel: Model<CategorieInterface>){
        
    }
// ajout d un materiel
    async ajoutCategorie(categorielDTO: CategorielDTO): Promise<CategorieInterface>{
        const c = await new this.categorieModel(categorielDTO);
        return c.save();
    }

// affichage des listes des materiels
    async afficherCategorie(): Promise<CategorieInterface[]>{
        const c = await this.categorieModel.find();
        return c;
    }

    async afficherCategoriebyId(id): Promise<CategorieInterface>{
        const c = await this.categorieModel.findById(id);
        return c;
    }

// // affichage d'un materiel
//     async afficherUnMateriel(idMateriel): Promise<MaterielInterface>{
//         const materiel = await this.materielModel.findById(idMateriel);
//         return materiel;
//     }

// // update d'un materiel
//     async updateMonMateriel(monMateriel, monUpdatedMateriel: MaterielDTO): Promise<MaterielInterface>{
//         const myMatUpdated = await this.materielModel
//             .findOneAndUpdate(monMateriel, monUpdatedMateriel, {new: true});
//         return myMatUpdated;
//     }

// delete d'un categorie
    async supprimerMonCategorie(cId):Promise<CategorieInterface>{
        const myList = await this.categorieModel
            .findByIdAndDelete({_id: cId}).exec();
        return myList;
    }
}
