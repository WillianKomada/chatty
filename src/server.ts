import express from 'express';

import './database';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is runing on port 3333"));

/*
GET = Buscar de informações
POST = Envios de informações
PUT = Alteração de informações
DELETE = Deletar informações
PATCH = Alterar uma informação específica
*/

