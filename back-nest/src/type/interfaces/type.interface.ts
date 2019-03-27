import { Document } from 'mongoose';

export interface TypeInterface extends Document {
    readonly nom: string;
}