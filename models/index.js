var mongoose = require('mongoose');
mongoose.set('debug', true);

// connect to DB
mongoose.connect('mongodb://localhost/todo-api')

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");