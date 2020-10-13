require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/htmlroutes");
const routes2 = require("./routes/apiroutes");

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(routes);
app.use(routes2);

mongoose.connect(process.env.MONGODB_URI,
 {
        useNewUrlParser: true
    }, function (err, db) {
    }
);

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});