const fs = require("fs");
const path = require("path");
const marked = require("marked");

//let ruta = process.argv[2];

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

const leerExt = (ruta) => path.extname(ruta) === ".md";
if (leerExt) {
  console.log("si es extension md");
} else {
  console.error("no es extension md");
}
// Guarda links y extrae  con renderer
//guardarLinks(ruta);
const guardarLinks = (ruta) => {
  let links = [];
  const leerArchivo = fs.readFileSync(ruta, "utf8");
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
  //console.log(links);
  return links;
};
// valida links
// const validarLinks = (arrLinks) => {
//   return Promise.all(
//     guardarLinks(arrLinks).map((element) => {
//       return fetch(element.href).then((res) => {
//         let mensaje;
//         const nuevoObj = {
//           href: element.href,
//           text: element.text,
//           file: element.file,
//         };
//         res.status >= 200 && res.status <= 399 ? (mensaje = "ok"): (mensaje = "fail");
//         nuevoObj.statusMessage = mensaje;
//         nuevoObj.status = res.status;
//         //console.log ('RESULTADO DEL NUEVO OBJETO', nuevoObj);
//         return nuevoObj;
//       });
//     })
//   );
// };

module.exports = {
  existeRuta,
  leerExt,
  esrutaAbs,
  /*validarLinks, */
  guardarLinks,
};
