const chalk = require('chalk');
const clear = require('clear')

console.log("Running app.js");

const fs = require("fs");

const todos = require("./todos.js");
const _ = require("lodash");

clear();

console.log(chalk.bold.yellow(('Do-it')));

console.log(todos.addTodo()); 
