var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require('express-session');
var bodyParser = require('body-parser');



//Require route paths
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var dashboardRouter = require("./routes/dashboard");
var databaseRouter = require("./routes/database");
const { hasSubscribers } = require("diagnostics_channel");
var loggerRouter = require("./routes/logger");
var roomsRouter = require("./routes/rooms");



//app session
const app = express();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//app use libraries
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Statics
app.use(express.static(path.join(__dirname, "public")));
app.use("/Dashboards", express.static(path.join(__dirname, "Dashboards"))); //Register dashboard folder as static folder
//Views
app.set("views", [
    path.join(__dirname, "views"),
    path.join(__dirname, "Dashboards"),
]);

//set the views directory
app.set("view engine", "hbs"); //set the view engine
require("hbs").registerPartials(path.join(__dirname, "Dashboards")); //register partials

//Tell node to use this links as paths
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/Dashboards", dashboardRouter);
app.use("/", databaseRouter);
app.use("/", loggerRouter);
app.use("/Dashboards/rooms", roomsRouter);

module.exports = app;

