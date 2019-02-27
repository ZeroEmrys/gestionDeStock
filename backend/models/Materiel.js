//import mongoose from 'mongoose';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MaterielSchema = new Schema({
    nom:{
        type: String
    },
    categorie:{
        type: String
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
        type: String,
    }
});

var Materiel = mongoose.model('Materiel',MaterielSchema);

module.exports = Materiel;

//export default mongoose.model('Issue',Issue);