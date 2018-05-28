var express = require( 'express' );
var	bodyParser = require('body-parser');
var	app = express();
var	server = require('http').createServer(app);

server.listen(process.env.PORT || 3000, function(){
	console.log('Start listening 3000...');
} );

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){

	res.sendFile(__dirname + '/public/index.html');
});
