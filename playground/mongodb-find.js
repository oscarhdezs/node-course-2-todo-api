const MongoClient = require('mongodb').MongoClient;

const name=process.argv[2];

console.log(process.argv[2]);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  db.collection('Todos').find({
    completed:true}
  ).toArray().then((docs)=>{
    console.log('Todo');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });

  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todo:${count}`);
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });



  db.collection('Users').find({name:name}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unabl to fetch todos',err);
  });

  //client.close();
});
