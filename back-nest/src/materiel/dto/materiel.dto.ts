import { ObjectID } from "bson";

export class MaterielDTO{
    readonly nom: string;
    readonly categorie: ObjectID;
    readonly type: ObjectID;
    readonly marque: string;
    readonly fournisseur: string;
    readonly etat: string;
    readonly dateObtention: Date;
    readonly prix: number;
    readonly observateur: string;
    readonly description: string;
}