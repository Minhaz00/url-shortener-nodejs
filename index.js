const express = require('express');
const path = require('path');
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const Url = require("./models/url")
const {connectToMongoDb} = require('./connection');
const app = express();
const PORT = 5000;

connectToMongoDb("mongodb://localhost:27017/short-url")
    .then(() => {console.log("Connected to MongoDB")});


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/url", urlRoute);
// app.use('/', urlRoute);
app.use('/', staticRoute);


//for server side rendering
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));


app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})
