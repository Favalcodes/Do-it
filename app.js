const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

console.log("Running app.js");

const fs = require("fs");

const todos = require("./todos.js");
const _ = require("lodash");
const yargs = require('yargs');

const args = yargs.argv;

clear();
console.log('You ran the command: ' + args._[0]);

console.log(
    chalk.bold.yellow(
      figlet.textSync('Do-it', { horizontalLayout: 'full' })
    )
  );

console.log(todos.addTodo()); 

 
const argv = yargs.argv;
var command = argv._[0];
 
console.log('Running Command: ', command);
 
if (command === 'addTodo') {
    todos.addTodo(argv.title);
}else if (command === 'deleteTodo') {
    var todoDeleted = todos.deleteTodo(argv.title);
    var message = todoDeleted ? 'Todo was deleted' : 'Todo not found';
    console.log(message);
  } else if (command === 'readTodo') {
    var todo = todos.readTodo(argv.title);
    if (todo) {
        console.log('Great! The todo was found.');
        todos.logTodo(todo);
    } else {
        console.log('oops! todo not found.');
    }
  } else if (command === 'listTodos') {
    var allTodos = todos.listTodos();
    console.log(`Printing ${allTodos.length} todo(s).`);
    allTodos.forEach((todo) => todos.logTodo(todo));
} else {
    console.log('Invalid command.');
}