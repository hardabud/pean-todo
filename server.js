var express = require('express');
var bodyParser = require('body-parser');

var todoCtrl = require('./controllers/todo');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/partials', express.static(__dirname + '/client/partials'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/index.html');
});

app.get('/api/', todoCtrl.getAll);
app.post('/api/', todoCtrl.add);
app.get('/api/:id', todoCtrl.editView);
app.post('/api/edit/:id', todoCtrl.edit);
app.post('/api/del/:id', todoCtrl.delete);

app.listen(3000, function() { console.log('Listening on 3000'); });
