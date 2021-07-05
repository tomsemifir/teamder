import mongoose from "mongoose";

const profilSchema = new mongoose.Schema({
    joueur : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Joueur"
    },
    jeu : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Jeu"
    },
    pseudo : { type : String },
    niveau : { type : String },
    postes : [{ type : String }],
    style : { type : String }
});

export const Profil = mongoose.model("Profil", profilSchema);