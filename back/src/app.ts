import express from 'express';
import { setMongoConnection } from './config/mongo.config';
import cors from 'cors';
import { setProfilRouting } from './routes/profilRoutes';
import { setJeuRouting } from './routes/jeuRoutes';
import { setJoueurRouting } from './routes/joueurRoutes';

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

//Lancement du serveur Node
app.listen(port, () => {
    console.log(`Serveur listening on port : ${port}`);
})

//Connexion à la base de donnée
setMongoConnection();

//Définition des routes
setProfilRouting(app);
setJeuRouting(app);
setJoueurRouting(app);