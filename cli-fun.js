const {mdLinks} = require('./index');
const stats = require('./stats');
const chalk = require('chalk');
const funciones = require('./api');

const clifuncion =(path,opcionUno, opcionDos)=> {
    if(opcionUno === '--validate' && opcionDos === '--stats' || opcionUno === '--stats' && opcionDos === '--validate'){
        console.log(chalk.yellow.bold.bgBlueBright('\nLinks found in md file(s):\n'));
        return mdLinks(path, {validate:true}).then((resultado) =>{
           const retorno= `${chalk.yellow(stats.totalLinks(resultado))}\n${chalk.magenta(stats.uniqueLinks(resultado))}\n${chalk.red(stats.broken(resultado))}\n`;
           return retorno;
        });
    }else if(opcionUno === '--validate'){
             console.log(chalk.yellow.bold.bgBlueBright('\nStatus of each link found in the md file(s):\n'));
        return mdLinks(path, {validate:true}).then(resultado => {
           return resultado.map(agrega =>(`
                href: ${chalk.gray.underline(agrega.href)}
                text: ${chalk.gray(agrega.text)}
                file: ${chalk.gray(agrega.file)}
                valida: ${chalk.blue(agrega.statusMessage)}
                status: ${chalk.blue(agrega.status)}\n`)).join('');
            });
    
        }else if(opcionUno === '--stats'){
        console.log(chalk.yellow.bold.bgBlueBright('\nLinks found in md file(s):\n'));
        return mdLinks(path, {validate:true}).then((resultado)=>{
             return chalk.yellow(stats.totalLinks(resultado)) + "\n" +
                    chalk.magenta(stats.uniqueLinks(resultado));
        });
    } 
    console.log(chalk.yellow.bold.bgBlueBright('\nLinks found in md file(s):\n'));
    return mdLinks(path , {validate: false}).then(resultado=> {
       return resultado.map(file =>(`
                href: ${chalk.gray.underline(file.href)}
                text: ${chalk.gray(file.text)}
                file: ${chalk.gray(file.file)}\n`)).join('');
        });
       
    };

module.exports = {
    clifuncion
};