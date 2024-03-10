const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const connectDB= () =>
{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("db is connected")
    }).catch((e)=>{
      console.log("Db is not connected", e)
    })
}

module.exports = connectDB;

