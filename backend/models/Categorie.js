//import mongoose from 'mongoose';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CategorieSchema = new Schema({
    nom: String
});

module.exports = mongoose.model('Categorie',CategorieSchema);
