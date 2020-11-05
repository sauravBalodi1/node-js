var validator = require('validator');
 var chalk=require('chalk')
console.log(validator.isEmail('foo@bar.com'));
console.log(validator.blacklist("hello wrold"),'\\')
const res=validator.isEmail("saurav@gmail.com")
console.log(res? chalk.blue(res):chalk.red(res))