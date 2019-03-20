import { MaterielDTO } from './dto/materiel.dto';
import { MATERIEL_MODEL_PROVIDER } from './../constants';
import { Injectable, Inject} from '@nestjs/common';
import { Model } from 'mongoose';
import { MaterielInterface } from './interfaces/materiel.interface';

@Injectable()
export class MaterielService {
    constructor(@Inject(MATERIEL_MODEL_PROVIDER) private readonly materielModel: Model<MaterielInterface>){
        
    }
// ajout d un materiel
    async ajoutMateriel(materielDTO: MaterielDTO): Promise<MaterielInterface>{
        const materiels = await new this.materielModel(materielDTO);
        return materiels.save();
    }

// affichage des listes des materiels
    async aficherMateriel(): Promise<MaterielInterface[]>{
        const materiels = await this.materielModel.find();
        return materiels;
    }

// affichage d'un materiel
    async afficherUnMateriel(idMateriel): Promise<MaterielInterface>{
        const materiel = await this.materielModel.findById(idMateriel);
        return materiel;
    }

// update d'un materiel
    async updateMonMateriel(monMateriel, monUpdatedMateriel: MaterielDTO): Promise<MaterielInterface>{
        const myMatUpdated = await this.materielModel
            .findOneAndUpdate(monMateriel, monUpdatedMateriel, {new: true});
        return myMatUpdated;
    }

// delete d'un materiel
    async supprimerMonMateriel(materielId):Promise<MaterielInterface>{
        const myMatList = await this.materielModel
            .findByIdAndDelete({_id: materielId}).exec();
        return myMatList;
    }
}
