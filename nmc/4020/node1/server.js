var express = require("express");
var app = express();
var port = 3000;
app.use(express.urlencoded({
extended: true
}));
app.use(express.json())
app.listen(port, () => {
    console.log("Server listening on port " + port);
    });
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
    });