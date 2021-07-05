import { Jeu } from "../models/jeu";

class JeuController {

    findAll = async (req, res, next) => {
        res.status(200)
            .send(await Jeu.find())
            .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
            .send(await Jeu.findById(req.params.id))
            .end();
        next();
    }

    create = async (req, res, next) => {
        res.status(201)
            .send(await Jeu.create(req.body))
            .end();
        next();
    }

    update = async (req, res, next) => {
        res.status(200)
            .send(await Jeu.findByIdAndUpdate(req.params.id, req.body))
            .end();
        next();
    }

    delete = async (req, res, next) => {
        res.status(200)
            .send(await Jeu.findByIdAndRemove(req.params.id))
            .end()
        next();
    }
}

export const jeuController = Object.freeze(new JeuController());


