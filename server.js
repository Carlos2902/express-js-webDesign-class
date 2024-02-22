const express = require("express");
const expressLayouts = require('express-ejs-layouts'); 
const app = express();
const PORT = 8080;

// Serve static files from the 'public' directory
app.use(express.static(__dirname + "/public"));
app.set("views", "./views");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");
app.set("view engine", "ejs");

// Establish various routes
app.get("/", async function (req, res) {    
    res.render('home', {
      title: 'Welcome to the home page!',
      // Other data
    });
  }
);

app.get("/about", async function (req, res){
    res.render('about',{
        title: 'About Us'
    });
});

app.get("/CheckOut", async function (req, res){
    res.render('CheckOut',{
        title: '1,2,3... Pay!'
    });
});

app.get("/login", async function (req, res){
    res.render('login',{
        title: 'Log In'
    });
});

app.get("/signup", async function (req, res){
    res.render('signup',{
        title: 'Create Account'
    });
});


// app.get('/about', (req,res)=>{
//     res.sendFile(path.join(__dirname, "/views/about.html"))

// })
// app.get('/CheckOut', (req,res)=>{
//     res.sendFile(path.join(__dirname, "/views/CheckOut.html"))
// })
// app.get('/signup', (req,res)=>{
//     res.sendFile(path.join(__dirname, "/views/signup.html"))
// })

// app.get('/login', (req,res)=>{
//     res.sendFile(path.join(__dirname, "/views/login.html"))
// })

// Starting the server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
