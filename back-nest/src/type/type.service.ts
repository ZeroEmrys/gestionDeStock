import { Injectable, Inject } from '@nestjs/common';
import { TypeInterface } from './interfaces/type.interface';
import { TYPE_MODEL_PROVIDER } from 'src/constants';
import { TypeDTO } from './dto/type.dto';
import { Model } from 'mongoose';

@Injectable()
export class TypeService {
constructor(@Inject(TYPE_MODEL_PROVIDER) private readonly typeModel: Model<TypeInterface>){
        
}
// ajout d un materiel
async ajoutType(categorielDTO: TypeDTO): Promise<TypeInterface>{
    const c = await new this.typeModel(categorielDTO);
    return c.save();
}

// affichage des listes des materiels
async afficherType(): Promise<TypeInterface[]>{
    const c = await this.typeModel.find();
    return c;
}

async afficherTypebyId(id): Promise<TypeInterface>{
    const c = await this.typeModel.findById(id);
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
async supprimerMonType(cId):Promise<TypeInterface>{
    const myList = await this.typeModel
        .findByIdAndDelete({_id: cId}).exec();
    return myList;
    }
}