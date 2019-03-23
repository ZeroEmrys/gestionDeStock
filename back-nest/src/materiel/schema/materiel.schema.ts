import * as mongoose from 'mongoose';
import { ObjectID } from 'bson';

export const MaterielSchema = new mongoose.Schema({
    nom: {
        type : String,
        required : true,
        },
    categorie: {
        type : ObjectID,
        //      required: true,
        },
    type: {
        type : String,
        //      required: true,
        },
    marque: {
        type : String,
        //      required: true,
        },
    fournisseur : {
        type : String,
        //        required : true,
        },
    etat : {
        type : String,
        //      required : true,
        },
    dateObtention :{
        type: Date,
        default: Date.now,
        },
    prix : {
        type : Number,
        default : 100000,
        },
    observateur : {
        type : String,
        default: '',
        },
    description : {
        type : String,
        default : '',
        },
});
