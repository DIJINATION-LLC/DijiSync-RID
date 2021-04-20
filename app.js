const express = require('express')
const path = require('path');
const router = express.Router();
const app = express()

app.use(express.static('public'))
  app.use(express.json())
  app.use(express.urlencoded({extended:true}))

// app.get('/',(req,res)=>{
//         res.send("STarts");
// })
  app.get('/' , (req , res) => {
    res.sendFile(path.join(__dirname+ '/dist/index.html'));
   // app.use(express.static(__dirname + '/home'));
})

app.use('/', router);

app.get('/login' , (req , res) => {
    res.sendFile(path.join(__dirname+ '/dist/login.html'));
   // app.use(express.static(__dirname + '/home'));
})

app.use('/login', router);

app.get('/register' , (req , res) => {
    res.sendFile(path.join(__dirname+ '/dist/register.html'));
   // app.use(express.static(__dirname + '/home'));
})

app.use('/register', router);

app.get('/arperf' , (req , res) => {
  res.sendFile(path.join(__dirname+ '/dist/arperf.html'));

 // app.use(express.static(__dirname + '/home'));
})

app.use('/arperf', router);




app.listen(3000,function(){
    console.log("server has started")
   })