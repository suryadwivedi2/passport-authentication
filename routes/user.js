const express=require('express');

const router=express.Router();

router.get('/login',(req,res)=>res.send('login page'))


//register
router.get('/register',(req,res)=>res.send('register'))

module.exports=router;