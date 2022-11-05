const fs = require("fs");
const path = require("path");
const marked = require("marked");

const existeRuta = (ruta) => {
  if (fs.existsSync(ruta)) {
    console.log("El archivo EXISTE!");
    return true;
  } else {
    console.log("El archivo NO EXISTE!");
    return false;
  }
};
//console.log(existeRuta(ruta));

//2 si la ruta es absoluta
const esrutaAbs = (ruta) => (path.isAbsolute(ruta) ? ruta : path.resolve(ruta));
//console.log(`Esta ruta ${esrutaAbs ? "" : "no"} es absoluta`);
// verifica si es  archivo
const esArchivo = (ruta) => fs.statSync(ruta).isFile();
//verifica si es directorio
const esDir = (ruta) => fs.statSync(ruta).isDirectory();
const leerExt = (ruta) => path.extname(ruta) === ".md";
// if (leerExt) {
//   console.log("si es extension md");
// } else {
//   console.error("no es extension md");
// }
// Leer directorio
const leerDir = (ruta) => {
  const hacerutaAbs = esrutaAbs(ruta);
  let arrMD = [];
  if (esArchivo(hacerutaAbs)) {
    if (leerExt(hacerutaAbs)) {
      arrMD.push(hacerutaAbs);
    }
  } else {
    const rutaDarchivos = fs.readdirSync(hacerutaAbs);
    rutaDarchivos.forEach((file) => {
      arrMD = arrMD.concat(leerDir(path.join(hacerutaAbs, file))); // va rellenando en un array los archivos md encontrados y al terminar de buscar en el dir, concatenaran todos los archivosen un solo array
    });
  }
  //console.log('ESTE ES EL ARRAY MD', arrMD);
  return arrMD;
};
// Guarda links y extrae  con renderer
const guardarLinks = (ruta) => {
  let links = [];
  const arrRutas = leerDir(ruta);
  arrRutas.forEach((laRuta) => {
    const leerArchivo = fs.readFileSync(laRuta, "utf8");
    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) => {
      links.push({
        href: href, // url encontradas
        text: text, //Texto  (<a>)
        file: ruta, //Ruta del archivo donde se encontró el link.
      });
    };
    marked.use({ renderer });
    marked.parse(leerArchivo);
  });

  // console.log(links);
  return links;
};

module.exports = {
  existeRuta,
  leerExt,
  esrutaAbs,
  leerDir,
  guardarLinks,
};
