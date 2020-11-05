//const { blue } = require('chalk');
const chalk=require('chalk');
//console.log(chalk.blue.inverse('hello world'));
const log=console.log;
log(chalk.blue("hello")+"world"+chalk.red("!"))
log(chalk.blue.bgRed.bold('Hello world!'));
log(chalk.green("i m green "+chalk.blue.underline.bold("with a blue substring")+" tha becomes green again"))
log(chalk.red.bold.underline('Hello', 'world'))



