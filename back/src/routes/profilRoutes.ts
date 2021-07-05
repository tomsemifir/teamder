import { profilController } from "../controllers/profilController";

export const setProfilRouting = (app) => {

    const endpoint = 'profils'

    app.get(`/${endpoint}`, profilController.findAll);
    app.get(`/${endpoint}/:id`, profilController.findById);
    app.post(`/${endpoint}`, profilController.create);
    app.patch(`/${endpoint}/:id`, profilController.update);
    app.delete(`/${endpoint}/:id`, profilController.delete);
}