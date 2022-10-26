const {mdLinks} = require('./index');
const stats = require('./stats');
const funciones = require('./api');

const clifuncion =(path,opcionUno, opcionDos)=> {
    if(opcionUno === '--validate' && opcionDos === '--stats' || opcionUno === '--stats' && opcionDos === '--validate'){
        return mdLinks(path, {validate:true}).then((resultado) =>{
           const retorno= `${stats.totalLinks(resultado)}\n${stats.broken(resultado)}\n`;
           return retorno;
        });
    }else if(opcionUno === '--validate'){
        return mdLinks(path, {validate:true}).then(resultado => {
           return resultado.map(agrega =>(`
                href: ${agrega.href}
                text: ${agrega.text}
                file: ${agrega.file}
                valida: ${agrega.statusMessage}
                status: ${agrega.status}\n`)).join('');
            });
    
        }else if(opcionUno === '--stats'){
        return mdLinks(path, {validate:true}).then((resultado)=>{
             return stats.totalLinks(resultado);
        });
    } 
    return mdLinks(path , {validate: false}).then(resultado=> {
       return resultado.map(file =>(`
                href: ${file.href}
                text: ${file.text}
                file: ${file.file}\n`)).join('');
        });
       
    };

module.exports = {
    clifuncion
};