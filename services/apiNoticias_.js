const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const url = "https://sindpd.org.br/sindpd/site/categoria.jsp?id=0";

const api = axios
  .get(url)
  .then((response) => {
    const html = iconv.decode(Buffer.from(response.data), "utf-8");
    //const html = iconv.decode(response.data, "ISO-8859-6");
    /*  const html = response.data; */
    const $ = cheerio.load(html, {
      xml: { xmlMode: false, decodeEntities: false },
    });
    const divNoticias = $(".boxHomeInner");
    const noticia = [];
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
    //const Noticias = JSON.stringify(noticia);
    module.exports = noticia;
    //console.log(Noticias);
  })
  .catch(console.error);
