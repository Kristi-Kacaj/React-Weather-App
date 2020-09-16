const express = require ('express');
const cors = require ('cors');
const mysql = require ('mysql');
const { restart } = require('nodemon');


const app = express();

const SELECT_ALL_COMMENTS_QUERY = 'SELECT * FROM comments';

const connection = mysql.createConnection({

  host: 'localhost',
  database: 'schema',
  user: 'root',
  password: 'root',

});

connection.connect(err =>{
  if(err){
    return err;
  }
});

//console.log(connection);
app.use((req,res,next)=>{
  console.log( req.method, req.url, res.statusCode)
  next()
})

app.use(cors());

app.get('/', (_req, res) => {
res.send('go to /comments to see comments')
});

app.get('/comments/add', (req, res) => {
  const {user_name, comment} = req.query;
  //console.log(user_name, comment)
    //res.send('adding product');

  const INSERT_COMMENTS_QUERY = `INSERT INTO comments (user_name, comment) VALUES('${user_name}','${comment}')`;
  connection.query(INSERT_COMMENTS_QUERY, (err, _results) =>{
    if(err) {
      return res.send(err)
    }
        else{
          return res.send('successfully added comment')
      }
    });
  });



app.get('/comments', (req, res) => {  
connection.query(SELECT_ALL_COMMENTS_QUERY, (err, results) =>{
  if(err) {
    return res.send(err)
  }
    else{
    return res.json({
    data: results
})
}
});
});
app.listen(5000, () =>{
  console.log(`Comments server listenig on portal 5000`)
});




