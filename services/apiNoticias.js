const axios = require("axios");
const cheerio = require("cheerio");

function Noticias(params) {
  const url = "https://sindpd.org.br/sindpd/site/categoria.jsp?id=0";
  const encode = "latin1";
  const htmlDiv = ".boxHomeInner";

  const noticias = axios({
    method: "GET",
    url: url,
    responseType: "arraybuffer",
  })
    .then((response) => {
      const noticia = [];
      const html = response.data.toString(encode);
      const $ = cheerio.load(html);
      const divNoticias = $(htmlDiv);
      divNoticias.each(function () {
        const link = $(this).find("a").attr("href");
        const data = $(this).find(".vejaMais").text();
        const titulo = $(this).find("img").attr("title");
        const imagem = $(this).find("img").attr("src");
        noticia.push({
          link,
          data,
          titulo,
          imagem,
        });
      });
      module.exports = noticia;
    })
    .catch(console.error);

  return noticias;
}

Noticias();
