module.exports = {
  start(req, res) {
    res.status(200).json({ msg: `API de Noticias inicializada` });
  },

  ListaNoticias(req, res) {
    const Noticias = require("./../services/Noticias");
    //console.log(Noticias);
    return res.status(200).json(Noticias);
  },
};
