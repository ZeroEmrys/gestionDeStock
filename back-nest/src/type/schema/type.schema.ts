import * as mongoose from 'mongoose';

export const TypeSchema = new mongoose.Schema({
    nom: {
        type : String,
        required : true,
        }
});
