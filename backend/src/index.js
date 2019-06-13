const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const cors = require('cors');
mongoose.connect('mongodb+srv://sisalfa:sisalfa@cluster0-oq7yn.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
})
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req,res, next)=>{
    req.io = io;
    next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname,'..','..','uploads','resized')));

app.use(require('./routes.js'))


server.listen(3333);
