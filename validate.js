const fetch = require("node-fetch");

const validarLinks = (arrLinks) => {
    return Promise.all(
      (arrLinks).map((element) => {
        return fetch(element.href).then((res) => {
          let mensaje;
          const nuevoObj = {
            href: element.href,
            text: element.text,
            file: element.file,
          };
        
          res.status >= 200 && res.status <= 399 ? (mensaje = "ok"): (mensaje = "fail");
          nuevoObj.statusMessage = mensaje;
          nuevoObj.status = res.status;
        //   //console.log ('RESULTADO DEL NUEVO OBJETO', nuevoObj);
          return nuevoObj;
        });
      })
    );
  };

  module.exports ={
    validarLinks
  }