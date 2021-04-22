import { http } from './http';
import "./websocket/client";

http.listen(3333, () => console.log("Server is runing on port 3333"));

/*
GET = Buscar de informações
POST = Envios de informações
PUT = Alteração de informações
DELETE = Deletar informações
PATCH = Alterar uma informação específica
*/

