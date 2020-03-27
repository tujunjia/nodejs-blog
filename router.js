
var express = require("express")
var app = express()

var router = express.Router()

//首页渲染
router.get("/", function(req, res) {
  res.send("hello world")
} )

//注册页面渲染
router.get("/register", function(req, res) {
  res.send("hello register")
} )

//注册处理
router.post("/register", function(req, res) {
  res.send("hello world")
} )

//登录页面渲染
router.get("/login", function(req, res) {
  res.send("hello login")
} )

//登录处理
router.post("/login", function(req, res) {
  res.send("hello world")
} )

//助力分享页面渲染
router.get(["/share","/share/:userId"], function(req, res) {
  res.render("./share/share.html", {title: "助力分享"})
} )

//助力分享页面渲染
router.post(["/share"], function(req, res) {
  console.log(req.body.userId, req.body.otherId);
  
} )

//助力分享页面渲染
router.get("/time", function(req, res) {
  res.render("./setTime/index.html", {title: "定时器"})
})




module.exports = router