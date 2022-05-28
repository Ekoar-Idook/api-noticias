require("dotenv").config();
const mongoose = require("mongoose");
/* const express = require("express"); */
// Conectar Banco de Dados
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rz20w.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectamos ao Mongo DB");
  })
  .catch((err) => console.log(err));

// entregar uma porta

module.exports = mongoose;
