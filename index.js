const express = require("express");
const rotas = require("./rotas");
const cors = require("cors");

const app = express();
const port = 4200;
//require("./config/db");

require("./services/Noticias");

// Habilitar o Cors
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(rotas);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
