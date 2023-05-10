const express = require("express");
const app = express();
var port = 3000;
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.listen(port, () => {
    console.log("Server listening on port " + port);
    });
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://sarah2fyee:FGPD7vHgiBPqMjzo@newMedia.mgjbaxm.mongodb.net/?retryWrites=true&w=majority";
var mongoose = require("mongoose");
mongoose.connect(url);
var theUser = {};
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,

});

var User = mongoose.model("User", nameSchema);
app.get("/add", (req, res) => {
    res.sendFile(__dirname + "/adduser.html");
    });
 app.post("/addname", (req, res) => {
        var myData = new User(req.body);
        myData
            .save()
            .then((item) => {
                res.send("Name saved to databases");
            })
            .catch((err) => {
                res.status(400).send("Unable to save to database");
            });
    });
    app.get("/dadata", async (req, res) => {
        try {
          const user = await User.find();
          res.json(user);
        } catch (err) {
          res.status(100).json({
            message: err.message,
          });
        }
      });
      app.get("/modify", (req, res) => {
        res.sendFile(__dirname + "/modify.html");
    });

    app.get("/update/:id", getUser, async (req, res) => {
        if (req.query.firstName != null) {
          res.user.firstName = req.query.firstName;
        } else {
          console.log("don't work");
        }
        if (req.query.lastName != null) {
          res.user.lastName = req.query.lastName;
        }
        try {
          const updatedUser = await res.user.save();
          res.json(updatedUser);
        } catch (err) {
          res.status(400).json({
            message: "not getting data",
          });
        }
        message: "Successfully Updated User";
      });
     
      
      
      async function getUser(req, res, next) {
          console.log(req.body);
          let user;
          try {
              user = await User.findById(req.params.id);
              console.log(user);
              if (user == null) {
                  return res.status(404).json({
                      message: "Cannot find user",
                  });
              } else {
                  message: "found user";
                  console.log("success");
              }
          } catch (err) {
              return res.status(500).json({
                  message: "Oh Shit! What happened?",
              });
          }
          res.user = user;
          next();
      }

      app.get("/delete", (req, res) => {
        res.sendFile(__dirname + "/delete.html");
        });
      
      