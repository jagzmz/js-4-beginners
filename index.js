const chalk = require('chalk');
const utils = require('./src/utils')
const error = console.error
console.error= (...args) => {
    error(chalk.red(...args))
}

const init =  () => {

    const args = process.argv.filter( i => i.startsWith('--') ).map( i => i.slice(2) );

    for(const util of args){

        let [func, utilArgs = ""] = util.split('=');

        if(utilArgs.length === 0){
            console.error(`Invalid arguments for \`${func}\``);
            continue;
        }

        if(!utils[func]){
            console.error(`Utility function ${func} does not exist.`);
            continue;
        }

        utilArgs = argsFromString(utilArgs);
        
        const result = utils[func](...utilArgs);

        console.log(chalk.greenBright(`\`${func}\` result => ${result}`));
    }

}

const argsFromString = (string = "") => {
    return string.split(',');
}

init()