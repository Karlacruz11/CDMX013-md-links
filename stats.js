//const funciones = require("./api");

const totalLinks = (allLinks) => {
  const arrLinks = allLinks.map((linksHref) => linksHref.href);
  const arrLength = arrLinks.length;
  //console.log("TOTAL", arrLength);
  const stats = 
      `Total: ${arrLength}`;
  return stats;
};
//console.log(ruta, 'holis');

const uniqueLinks = (allLinks) => {
  const setlinksUnique = new Set ([]);// almacena valores únicos irrepetibles
  allLinks.forEach((element) => setlinksUnique.add(element.href));
  const stats = 
      `Unique: ${setlinksUnique.size}`;
  return stats
};
const broken = (allLinks) => {
  const linksRotos = allLinks.filter(
    (linksBrok) => linksBrok.statusMessage === "fail"
  );
  const stats = 
      `Broken: ${linksRotos.length}`;

  return stats;
};

module.exports = {
  totalLinks,
  uniqueLinks,
  broken,
};
