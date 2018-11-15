const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  var db = client.db("TodoApp");

  //deleteMany
  //db.collection('Todos').deleteMany({text:'Walk the dog'}).then((result)=>{
  //  console.log(result);
  //});

  //deleteOne
//  db.collection('Todos').deleteOne({completed:true}).then((result)=>{
//    console.log(result);
//  });

  //findOneAndDelete
db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  console.log(result);
});
  client.close();

})
