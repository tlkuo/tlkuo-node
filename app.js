'use strict';

var express = require("express");
var app = express();

app.use(function (req, res, next) {
    req.myMessage = "Hello, middleware #2";
    console.log("The leave on the trees are", req.query.color);
    next();
});

app.use(function (req, res, next) {
    console.log(req.myMessage);
    next();
});

app.use("/different/:id", function (req, res, next) {
    console.log("Third piece of middleware, ID:", req.params.id);
    next();
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Express server is listening on port", port);
});
