
module.exports = function(app){
  app.get('/produtos', function (req,res) {
    var mysql = require('mysql');
    //Conexão
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'cdc'
    });
    //Consultando
    connection.query('select * from livros', function (err, results){
      res.send(results);
    });


    connection.end();




  });
};
