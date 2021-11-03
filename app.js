const express = require("express");
const connectToMongo = require("./db-connection");
const app = express();

connectToMongo();

app.use( express.json() );

const PORT = 4000;

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen( PORT, ()=>{
    console.log(`App is running on port ${PORT}`);
});