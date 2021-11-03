const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/MyNoteBook";

const connectToMongo = ()=>{
    mongoose.connect( mongoURI )
    .then(()=>{
        console.log("DB Connected..................................")
    });
};

module.exports = connectToMongo;