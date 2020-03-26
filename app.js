
var express = require("express")
const path = require('path');
const fs = require('fs');
var router = require("./router")
var app = express()
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



//开放静态资源文件夹
app.use("/public", express.static(path.join(__dirname, 'public')))
app.use("/node_modules", express.static(path.join(__dirname, 'node_modules')))

// view engine setup
app.engine('html', require('express-art-template'));
app.set('views', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(router)

app.listen("3000", function (error ) {
  if ( error ) {
    console.log('Server error');
  }
  console.log('Server running');
})