const express = require('express');
const session = require('ejs');
const path = require('path');
const body_parser = require('body-parser');


//midelwares
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

//router setup
app.get("/homepage", (req, res) => {
    res.render('homepage');
})
app.get("/login", (req, res) => {
    res.render('login');
})
app.get("/register", (req, res) => {
    res.render('register');
})
app.get("/shopnow", (req, res) => {
    res.render('Shopnow')
})

// router part
let port = process.env.PORT || 4000;
app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log("server was running on the port " + port);
})