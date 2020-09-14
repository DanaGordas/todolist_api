require('dotenv').config();
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

var todoRoutes  = require('./routes/todos');

//allows us to access the request body

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
    
app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

const port = process.env.PORT || 3000;
app.listen(port);