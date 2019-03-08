import { Document } from 'mongoose';

export interface MaterielInterface extends Document {
    readonly nom: string;
    readonly categorie: string;
    readonly type: string;
    readonly marque: string;
    readonly fournisseur: string;
    readonly etat: string;
    readonly dateObtention: Date;
    readonly prix: number;
    readonly observateur: string;
    readonly description: string;
}