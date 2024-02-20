const express = require('express');
const path = require('path') //library that allows us to use path  withn our route
const app = express(); // Creates an express application
const HTTP_PORT = process.env.PORT || 8080; // Port where the server is hosted


// Serve static files from the 'public' directory
app.use(express.static('public'));

// Establish various routes
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})
app.get('/about', (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/about.html"))

})
app.get('/CheckOut', (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/CheckOut.html"))
})
app.get('/signup', (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/signup.html"))
})
app.get('/login', (req,res)=>{
    res.send('This is the sign up page')
})

// Starting the server
app.listen(HTTP_PORT, () => console.log(`Server listening on port: ${HTTP_PORT}`));
