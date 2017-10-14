import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import logger from 'morgan'
import mongoose from 'mongoose'
import bb from 'express-busboy'

import genrerouter from './routes/GenreRoute'
import bookrouter from './routes/BookRoute'

import SourceMapSupport from 'source-map-support'

//mongoose
const dbURL ='mongodb://localhost/rest_api_44'
mongoose.connect(dbURL,(err) =>{
  if(!err){
    console.log(`DB connected`)
  }
  else{
    console.log(`DB not connected`);
  }
})


SourceMapSupport.install()

const app = express()
// express-busboy
bb.extend(app)
// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.use('/genre',bookrouter)
app.use('/genre',genrerouter)
// set the port
const port = process.env.PORT || 7777;

app.listen(port,() =>{
  console.log(`Server Running on Port ${port}`);
})
