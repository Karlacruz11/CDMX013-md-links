const funciones = require("./api");

const totalLinks = (allLinks) => {
  const arrLinks = allLinks.map((linksHref) => linksHref.href);
  const arrLength = arrLinks.length;
  const setlinksUnique = new Set(arrLinks);
  //console.log("TOTAL", arrLength);
  const stats = `
      Total: ${arrLength}
      Unique: ${setlinksUnique.size}`;
  return stats;
};
//console.log(ruta, 'holis');

const broken = (allLinks) => {
  const linksRotos = allLinks.filter(
    (linksBrok) => linksBrok.statusMessage === "fail"
  );
  const stats = `
      Broken: ${linksRotos.length}`;

  return stats;
};

module.exports = {
  totalLinks,
  broken,
};
