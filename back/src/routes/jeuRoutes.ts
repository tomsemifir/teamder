import { jeuController } from "../controllers/jeuController";

export const setJeuRouting = (app) => {

    const endpoint = 'jeux'

    app.get(`/${endpoint}`, jeuController.findAll);
    app.get(`/${endpoint}/:id`, jeuController.findById);
    app.post(`/${endpoint}`, jeuController.create);
    app.patch(`/${endpoint}/:id`, jeuController.update);
    app.delete(`/${endpoint}/:id`, jeuController.delete);
}