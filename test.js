var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.166.17',
  user     : 'test_write',
  password : 'test_write123',
  database : 'jw_band'
});
 
connection.connect();
 
/*connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});*/


var  sql = 'CREATE TABLE t1123(id int  not null)';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();