import { Document } from 'mongoose';
import { ObjectID } from 'bson';

export interface MaterielInterface extends Document {
    readonly nom: string;
    readonly categorie: ObjectID;
    readonly type: ObjectID;
    readonly marque: string;
    readonly myModel: string;
    readonly fournisseur: string;
    readonly etat: string;
    readonly dateObtention: Date;
    readonly observateur: string;
    readonly description: string;
    readonly prix: number;

}