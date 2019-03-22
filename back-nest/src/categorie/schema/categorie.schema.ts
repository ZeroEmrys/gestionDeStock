import * as mongoose from 'mongoose';

export const CategorieSchema = new mongoose.Schema({
    nom: {
        type : String,
        required : true,
        }
});
