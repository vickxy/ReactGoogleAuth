var express = require('express');
var router = express.Router();
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());

const SELECT_ALL = "SELECT * FROM users";

const connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'cyrene'
});

connection.connect(err=>{
	return err;
});

//console.log(connection);

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hey");

  //res.send("foo");
  res.render('index', { title: 'Express' });
});

router.get('/test/:id', cors(), function(req, res, next){
	connection.query(SELECT_ALL, (err, results)=>{
		if(err){
			res.send(err);
		}else{
			res.json({
				data: results
			})
		}
	})
	//console.log(req);
	console.log(req.params.id);
	console.log("go");
	//res.render('test', {output: req.params.id});
});

module.exports = router;
