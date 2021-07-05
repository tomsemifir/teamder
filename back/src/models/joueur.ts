import mongoose from "mongoose";

const joueurSchema = new mongoose.Schema({
    nom : { type : String },
    prenom : { type : String },
    age : { type : Number }
});

export const Joueur = mongoose.model("Joueur", joueurSchema);