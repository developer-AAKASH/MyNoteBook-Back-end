const express = require("express");
const connectToMongo = require("./db-connection");

connectToMongo();

const app = express();

const PORT = 4000;

app.get("/", ( request, response )=>{
    response.send("Hello World !!!");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen( PORT, ()=>{
    console.log(`App is running on port ${PORT}`);
});