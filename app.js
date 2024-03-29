const express=require('express');
const expresslayouts=require('express-ejs-layouts');
const mongoose=require('mongoose');

const app=express();


app.use(expresslayouts);
app.set('view engine','ejs')


const port=5000;


app.use('/',require('./routes/index'));
app.use('/users',require('./routes/user'));


app.listen(port,console.log(`Server started on port ${port}`))