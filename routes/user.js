const express=require('express');

const router=express.Router();

router.get('/login',(req,res)=>res.render('login'))


//register
router.get('/register',(req,res)=>res.render('register'))

module.exports=router;