const express = require('express');
const path = require('path') //library that allows us to use path  withn our route
const app = express(); // Creates an express application
const HTTP_PORT = process.env.PORT || 8080; // Port where the server is hosted


// Establish various routes
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})
app.get('/about', (req,res)=>{
    res.send('This is the about page')
})
app.get('/settings', (req,res)=>{
    res.send('This is the settings page')
})
app.get('/login', (req,res)=>{
    res.send('This is the loging page')
})
app.get('/signup', (req,res)=>{
    res.send('This is the sign up page')
})

// Starting the server
app.listen(HTTP_PORT, () => console.log(`Server listening on port: ${HTTP_PORT}`));
