module.exports = {
  start(req, res) {
    res.status(200).json({ msg: `API de Noticias inicializada` });
  },

  ListaNoticias(req, res) {
    const Noticias = require("./../services/Noticias");
    //console.log(Noticias);
    return res.status(200).json(Noticias);
  },

  async Buscar(req, res) {
    console.log(req.body);
    const url = req.body.url;
    const encode = req.body.encode;
    const htmlDiv = req.body.htmlDiv;
    const htmlLink = req.body.htmlLink;
    const htmlData = req.body.htmlData;
    const htmlTitulo = req.body.htmlTitulo;
    const htmlImagem = req.body.htmlImagem;

    const noticias =
      await require("./../services/BuscarNoticias").BuscarNoticias(
        url,
        encode,
        htmlDiv,
        htmlLink,
        htmlData,
        htmlTitulo,
        htmlImagem
      );

    // console.log(noticias);
    return res.status(200).json(noticias);
  },
};
