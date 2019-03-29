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
        type : ObjectID,
        //      required: true,
        },
    marque: {
        type : String,
        //      required: true,
        },
    myModel: {
        type: String,
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
