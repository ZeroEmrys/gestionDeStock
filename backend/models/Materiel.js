//import mongoose from 'mongoose';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MaterielSchema = new Schema({
    nom:{
        type: String
    },
    categorie:{
        type: Schema.Types.ObjectId,
        ref: 'Categorie'

    },
    model:{
        type: String
    },
    marque:{
        type: String,
    }, 
    fournisseur:{
        type: String,
    },
    etat:{
        type: String,
    },
    prixValeur:{
        type: Number,
    },
    dateObtention:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Materiel',MaterielSchema);

//export default mongoose.model('Issue',Issue);