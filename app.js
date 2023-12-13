//modules
require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs')
//const User = require('./models/usermodel')
var validator = require('validator');
const server = require('http').createServer(app);

// declaring passport and sessions

const session = require('express-session')
const _ = require("lodash");
const passport = require('passport')
//const LocalStrategy = require('passport-local')
//const passportLocalMongoose = require('passport-local-mongoose')
//const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const findOrCreate = require('mongoose-findorcreate')

const helmet = require('helmet')
/*
const rateLimit = require('express-rate-limit')
const mongoSanitize = require('express-mongo-sanitize')
const hpp = require('hpp')
const xss = require('xss-clean')
*/

// setting view engine to ejs
app.set('view engine', 'ejs')

//database configure ("monodb/mongoose")
const mongoose = require('mongoose')
const dbname = "cmakingapp"
const dburl = "mongodb+srv://Avin:avin@cluster0.ayk9r.mongodb.net/"

mongoose.connect(dburl+dbname,
{useNewUrlParser: true},
{useCreateIndex :true}).then(()=>{
    console.log("connected to database")
})

app.use(express.static("public"));
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

//Routes handler
const home = require('./routes/home')


//using routes middleware
app.use('/',home)

app.all('*', (req,res,next)=>{
    res.render('pagenotfound')
    next();
})

//export app.js for server
module.exports =  app
