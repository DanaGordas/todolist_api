var mongoose = require('mongoose');
mongoose.set('debug', true);

// connect to DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todo-api', { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");