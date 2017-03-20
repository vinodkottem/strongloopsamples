// using body parser
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//sample for query strings
//http://localhost:5001/items?brand=UCB
app.get('/items', function(req, res) {
	   res.json({ requestqueryparameter: req.query.brand });
	});

//sample for url parameter
app.get('/items/:type', function(req, res) {
    res.json({ requesturlparameter: req.params.type });
});

// combinig both url parameter & query string
app.get('/items/:type/', function(req, res) {
	   res.json({ requesturlparameter: req.params.type,
		   requestqueryparameter: req.query.brand });
	});

app.listen(5001,function(){
	console.log("On port 5001");
});