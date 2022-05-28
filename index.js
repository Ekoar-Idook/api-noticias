const express = require("express");
const rotas = require("./rotas");
const cors = require("cors");

const app = express();
const port = 4200;
//require("./config/db");

const url = "https://sindpd.org.br/sindpd/site/categoria.jsp?id=0";
const encode = "latin1";
const htmlDiv = ".boxHomeInner";

require("./services/BuscarNoticias");

//const noticias = buscar.BuscarNoticias(url, encode, htmlDiv);

//console.log(noticias);

// Habilitar o Cors
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(rotas);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
