import { Joueur } from "../models/joueur";

class JoueurController {

    findAll = async (req, res, next) => {
        res.status(200)
            .send(await Joueur.find())
            .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
            .send(await Joueur.findById(req.params.id))
            .end();
        next();
    }

    create = async (req, res, next) => {
        res.status(201)
            .send(await Joueur.create(req.body))
            .end();
        next();
    }

    update = async (req, res, next) => {
        res.status(200)
            .send(await Joueur.findByIdAndUpdate(req.params.id, req.body))
            .end();
        next();
    }

    delete = async (req, res, next) => {
        res.status(200)
            .send(await Joueur.findByIdAndRemove(req.params.id))
            .end()
        next();
    }
}

export const joueurController = Object.freeze(new JoueurController());


