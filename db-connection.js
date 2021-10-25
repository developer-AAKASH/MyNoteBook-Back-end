const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/MyNoteBook?readPreference=primary&directConnection=true&ssl=false";

const connectToMongo = ()=>{
    mongoose.connect( mongoURI, ()=>{
        console.log("Connected to Mongodb Succesfully !!");
    });
};

module.exports = connectToMongo;