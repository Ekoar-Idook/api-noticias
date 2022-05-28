const express = require("express");
const rotas = express.Router();

const Inicializacao = require("./controllers");

// rota inicial / endpoint
rotas.get("/", Inicializacao.start);
rotas.get("/noticias", Inicializacao.ListaNoticias);
rotas.get("/scrap", Inicializacao.Buscar);

module.exports = rotas;
