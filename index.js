const express = require('express')
const app = express()
const mongoose = require('mongoose');
var cors = require('cors')
const dotenv = require('dotenv');
const server = require('http').createServer(app);
const router=require('./routes/UserRoutes.js')
dotenv.config();
app.use(cors()) 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)
let port=process.env.PORT

// DataBase connection 
mongoose.connect(`mongodb://localhost:27017/${process.env.DATABASE_NAME}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
  try{
    console.log("Database connected")
    app.listen(port, () => {
      console.log(`App listening on port ${port}`)
  })
  }catch(err){
      console.log(err)
  }
    
}).catch((err) => {
    console.log(err)
})
 

