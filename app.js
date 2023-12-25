var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//dbyi kullanacağımı burada belirtiyorum
require("./app_api/models/db");
//index routes kullanıyorsam buraya
var apiRouter = require("./app_api/routes/index");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
app.use("/api", apiRouter);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
