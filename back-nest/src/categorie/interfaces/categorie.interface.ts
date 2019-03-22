import { Document } from 'mongoose';

export interface CategorieInterface extends Document {
    readonly nom: string;
}