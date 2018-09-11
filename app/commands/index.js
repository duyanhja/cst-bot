const help = require('./Help');
const add = require('./Add');
const todo = require('./Todo');
const deleteToDo = require('./Delete')

module.exports = {
  helpMessage: help,
  addToDoEvent: add,
  todo: todo,
  deleteToDo: deleteToDo
}