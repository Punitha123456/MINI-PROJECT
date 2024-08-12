
//index.js file

const express = require('express')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();


const port = 3000;

mongoose.connect('mongodb://localhost/project');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./router/user');

app.use('/user', userRoutes)

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public','home.html'));
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','login.html'));
})

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','signup.html'));
})

app.get('/topics', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'explore.html'));
  });
  
app.get('/topics/:topic', (req, res) => {
    const topic = req.params.topic;
    const topicPath = path.join(__dirname, 'public', 'topics', `${topic}.html`);
  
    res.sendFile(topicPath, (err) => {
      if (err) {
        res.status(404).send('Topic not found');
      }
    });
});


// Existing server listening code

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})