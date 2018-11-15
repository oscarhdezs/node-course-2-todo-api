const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  var db = client.db("TodoApp");

  db.collection('Todos').findOneAndUpdate({
    text:'Something to do'},{
      $set:{
        completed:true
      }
    },{
      returnOriginal:false
    }).then(result=>{
      console.log(result);
    })

  client.close();

})
