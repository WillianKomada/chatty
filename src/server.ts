import express from 'express';

const app = express();

/*
GET = Buscar de informações
POST = Envios de informações
PUT = Alteração de informações
DELETE = Deletar informações
PATCH = Alterar uma informação específica
*/

app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW05"
  });
}); 

app.post("/", (request, response) => {
  return response.json({ message: "Usuário salvo com sucesso!" });
});

app.listen(3333, () => console.log("Server is runing on port 3333"));

