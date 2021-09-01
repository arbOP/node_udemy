const chalk = require('chalk');
const getNotes = require('./notes.js');

const displayNotes = getNotes();
console.log(displayNotes);

const successMsg = chalk.green('Success!');
console.log(successMsg);
// console.log(chalk.green('Success!')); < or this