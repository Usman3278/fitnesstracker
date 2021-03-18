//Dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//MongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

//Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener
app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}!`);
});