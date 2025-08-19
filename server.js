import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Rota GET / solicitada");
  res.json({
    message: "API para Atividade", 
    author: "Ana Paula Souza Carvalho", 
  });
});

app.listen(port, () => {
  console.log(`Serviço rodando na porta: ${port}`);
});
