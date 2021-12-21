var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");

var db = mongoose.connection;

//Require route paths
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var dashboardRouter = require("./routes/dashboard");
const { hasSubscribers } = require("diagnostics_channel");

var app = express();

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

db.on("error", () => console.log("Error in Connecting to Database"));
db.once("open", () => console.log("Connected to Database"));

app.post("/Login", (req, res) => {
  var id = req.body.id;
  var password = req.body.password;
  var pass;

  db.collection("users").findOne(
    {
      ID: id,
    },
    (err, collection) => {
      if (err) {
        throw err;
      }

      pass = collection.password;
      console.log(pass);
      console.log(password);
      console.log("Record found Successfully");
      if (pass == password) {
        res.render("login_success");
      } else {
        res.render("unsuccess");
      }
    }
  );
});



//Statics
app.use(express.static(path.join(__dirname, "public")));
app.use("/Dashboards", express.static(path.join(__dirname, "Dashboards"))); //Register dashboard folder as static folder

//Views
app.set("views", [
  path.join(__dirname, "views"),
  path.join(__dirname, "Dashboards"),
]); //set the views directory
app.set("view engine", "hbs"); //set the view engine
require("hbs").registerPartials(path.join(__dirname, "Dashboards")); //register partials
//Tell node to use this links as paths
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/Dashboards", dashboardRouter);

app.post("/Register", (req, res) => {
  var f_name = req.body.f_name;
  var email = req.body.email;
  var ID = req.body.ID;
  var phone = req.body.phone;
  var password = req.body.password;
  var role = req.body.role;

  var data = {
    name: f_name,
    email: email,
    id: ID,
    password: password,
    phone: phone,
    role: role,
  };

  if(role == "Student"){
    db.collection("dashboard_s").insertOne(data, (err, collection) => {
      if (err) {
        throw err;
      }
      console.log("Record Inserted Successfully");
    });
  }
  else if(role == "Teacher"){
    db.collection("dashboard_t").insertOne(data, (err, collection) => {
      if (err) {
        throw err;
      }
      console.log("Record Inserted Successfully");
    });
  }
  else if(role == "Director"){
    db.collection("dashboard_d").insertOne(data, (err, collection) => {
      if (err) {
        throw err;
      }
      console.log("Record Inserted Successfully");
    });
  }

  res.render("signup_success");
  return res.render("index");
});

module.exports = app;
