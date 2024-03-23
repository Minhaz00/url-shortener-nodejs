const express = require('express');
const urlRoute = require("./routes/url");
const Url = require("./models/url")
const {connectToMongoDb} = require('./connection');
const app = express();
const PORT = 5000;

connectToMongoDb("mongodb://localhost:27017/short-url")
    .then(() => {console.log("Connected to MongoDB")});

app.use(express.json())


app.use("/url", urlRoute);
app.use('/', urlRoute);

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})
