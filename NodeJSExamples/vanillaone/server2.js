var express = require('express');
var app = express();

var logger = function(req,res,next){
	console.log(req.method,req.url);
	next(); // to forward to next request this is very important
};

var hasName = function(req,res,next){
	if(req.query.name){
		next();
	}
	else{
		res.send('your name please!!!!');
	}
};

app.use(logger);

app.use('/home',hasName,function(req,res){
	res.send('Hello World :'+req.query.name);
});

//app.listen(5000);
app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
});

module.exports = app;