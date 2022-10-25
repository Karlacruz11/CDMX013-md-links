const {mdLinks} = require('./index');

const clifuncion =(path,options)=> {
    if(options === '--validate'){
        return mdLinks(path, {validate:true}).then((resultado)=> {
            let links ='';
            resultado.forEach((agrega)=>{
                links +=`
                href: ${agrega.href}
                text: ${agrega.text}
                file: ${agrega.file}
                valida: ${agrega.statusMessage}
                status: ${agrega.status}\n`;
            });
            return links;
        });
    }
    
};
module.exports = {
    clifuncion
};