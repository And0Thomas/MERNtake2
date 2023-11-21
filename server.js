const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());




const MongoClient = require('mongodb').MongoClient;

require('dotenv').config();
const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

async function connectToDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    // Perform operations on the database using 'client'
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
  }
}

connectToDB();

const path = require('path');
const PORT = process.env.PORT || 5000;

console.log("port is " + PORT)


app.set('port', (process.env.PORT || 5000));


if (process.env.NODE_ENV === 'production')
{
// Set static folder
app.use(express.static('frontend/build'));
app.get('*', (req, res) =>
{
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});
}

app.listen(PORT, () =>
{
  console.log('Server listening on port ' + PORT);
});


// Endpoint to add a card
app.post('/api/signup', async (req, res, next) =>
{
  // incoming: userId, color
  // outgoing: error
  const { login, password, FirstName, LastName } = req.body;
  var error = '';
  try
  {
    const db = client.db('Account');
    const result = db.collection('Users').insertOne({FirstName:FirstName,LastName:LastName,login:login,password:password});
  }
  catch(e)
  {
    error = e.toString();
  }

  var ret = {firstName:first,lastName:last,login:login,password:password};
  res.status(200).json(ret);
});

// Endpoint for user login
app.post('/api/login', async (req, res, next) =>
{
  // incoming: login, password
  // outgoing: id, firstName, lastName, error
  var error = '';
  const { login, password } = req.body;
  const db = client.db("Account");
  const results = await
  db.collection('Users').find({login:login,password:password}).toArray();
  var id = -1;
  var fn = '';
  var ln = '';
  
  if( results.length > 0 )
  {
    id = results[0].UserID;
    fn = results[0].FirstName;
    ln = results[0].LastName;
  }

  var ret = { id:id, firstName:fn, lastName:ln, error:''};
  res.status(200).json(ret);
});

// Endpoint for searching cards
app.post('/api/searchcards', async (req, res, next) =>
{
  // incoming: userId, search
  // outgoing: results[], error
  var error = '';
  const { userId, search } = req.body;
  var _search = search.trim();
  const db = client.db();
  const results = await db.collection('Cards').find({"Card":{$regex:_search+'.*', $options:'r'}}).toArray();
  var _ret = [];
  for( var i=0; i<results.length; i++ )
  {
  _ret.push( results[i].Card );
  }
  var ret = {results:_ret, error:error};
  res.status(200).json(ret);
});