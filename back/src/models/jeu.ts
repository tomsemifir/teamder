import mongoose from "mongoose";

const jeuSchema = new mongoose.Schema({
    nom : { type : String },
    niveaux : [{ type : String }],
    styles : [{ type : String }],
    postes : [{ type : String }]
});

export const Jeu = mongoose.model("Jeu", jeuSchema);