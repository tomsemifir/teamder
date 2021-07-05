import { joueurController } from "../controllers/joueurController";

export const setJoueurRouting = (app) => {

    const endpoint = 'joueurs'

    app.get(`/${endpoint}`, joueurController.findAll);
    app.get(`/${endpoint}/:id`, joueurController.findById);
    app.post(`/${endpoint}`, joueurController.create);
    app.patch(`/${endpoint}/:id`, joueurController.update);
    app.delete(`/${endpoint}/:id`, joueurController.delete);
}