const mongoose = require('mongoose');

async function  connect(){
   await mongoose.connect('mongodb+srv://amit123:amit123@csvupload.cx0rkhg.mongodb.net/?retryWrites=true&w=majority');
}
connect();

const db = mongoose.connection;

db.on('err', console.error.bind(console, "Error in connecting to the database"));

db.once("open", function(){
    console.log("Connected to database :: Mongodb");
});

module.exports = db;