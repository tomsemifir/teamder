import { Profil } from "../models/profil";

class ProfilController {

    findAll = async (req, res, next) => {
        res.status(200)
            .send(await Profil.find().populate("joueur").populate("jeu"))
            .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
            .send(await Profil.findById(req.params.id).populate("joueur").populate("jeu"))
            .end();
        next();
    }

    create = async (req, res, next) => {
        res.status(201)
            .send(await Profil.create(req.body))
            .end();
        next();
    }

    update = async (req, res, next) => {
        res.status(200)
            .send(await Profil.findByIdAndUpdate(req.params.id, req.body))
            .end();
        next();
    }

    delete = async (req, res, next) => {
        res.status(200)
            .send(await Profil.findByIdAndRemove(req.params.id))
            .end()
        next();
    }
}

export const profilController = Object.freeze(new ProfilController());


