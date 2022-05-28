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
    const url = "https://sindpd.org.br/sindpd/site/categoria.jsp?id=0";
    const encode = "latin1";
    const htmlDiv = ".boxHomeInner";
    const htmlLink = "a, attr, href";
    const htmlData = ".vejaMais, text";
    const htmlTitulo = "img, attr, title";
    const htmlImagem = "img, attr, src";

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
