const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
  async BuscarNoticias(
    url,
    encode,
    htmlDiv,
    htmlLink,
    htmlData,
    htmlTitulo,
    htmlImagem
  ) {
    const linkSplit = htmlLink.split(", ");
    const dataSplit = htmlData.split(", ");
    const tituloSplit = htmlTitulo.split(", ");
    const imagemSplit = htmlImagem.split(", ");

    //console.log(linkSplit[0], linkSplit[1], linkSplit[2]);
    // console.log(dataSplit[0], dataSplit[1], dataSplit[2]);
    //console.log(tituloSplit[0], tituloSplit[1], tituloSplit[2]);
    //console.log(imagemSplit[0], imagemSplit[1], imagemSplit[2]);

    const response = await axios({
      method: "GET",
      url: url,
      responseType: "arraybuffer",
    });

    const noticia = [];
    const html = response.data.toString(encode);
    const $ = cheerio.load(html);
    const divNoticias = $(htmlDiv);
    divNoticias.each(function () {
      let link = "";
      let data = "";
      let titulo = "";
      let imagem = "";
      if (linkSplit[1] === "attr") {
        link = $(this).find(linkSplit[0]).attr(linkSplit[2]);
      }
      if (linkSplit[1] === "text") {
        link = $(this).find(linkSplit[0]).text();
      }

      if (dataSplit[1] === "attr") {
        data = $(this).find(dataSplit[0]).attr(dataSplit[2]);
      }
      if (dataSplit[1] === "text") {
        data = $(this).find(dataSplit[0]).text();
      }

      if (tituloSplit[1] === "attr") {
        titulo = $(this).find(tituloSplit[0]).attr(tituloSplit[2]);
      }
      if (tituloSplit[1] === "text") {
        titulo = $(this).find(tituloSplit[0]).text();
      }

      if (imagemSplit[1] === "attr") {
        imagem = $(this).find(imagemSplit[0]).attr(imagemSplit[2]);
      }
      if (imagemSplit[1] === "text") {
        imagem = $(this).find(imagemSplit[0]).text();
      }

      noticia.push({
        link,
        data,
        titulo,
        imagem,
      });
    });

    //console.log(noticia);

    return noticia;
  },
};
