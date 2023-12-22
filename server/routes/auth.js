const express = require('express')
const router =  express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config')
const requireLogin = require('../middleware/requireLogin')


router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    if(!email || !password || !name){
       return res.status(422).json({error:"Please add all the fields"})
    }
    User.findOne({email:email}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error: "User already exists with that email"})
        }
        bcrypt.hash(password,12).then(hasedpassword=>{
                const user = new User({
                    email,
                    password:hasedpassword,
                    name
                })
                user.save().then(user=>{
                    res.json({message:"saved successfully"})
                })
                .catch(err=>{
                    console.log(err);
                })

            })
        
    })
    .catch(err=>{
        console.log('err');
    })
})
 
router.post('/signin',(req,res)=>
{
    const {email,password} = req.body
    if(!email || !password ){
       return res.status(422).json({error:"Please add email or password"})
    }
    User.findOne({email:email}).then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error: "Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password).then(doMatch=>{
            if(doMatch){
                //res.json({message:"Successfully signed in"})
                const token = jwt.sign({ _id:savedUser._id },SECRET_KEY)
                const {_id,email} = savedUser
                res.json({token,user:{_id,email}})
            }
            else{
                return res.status(422).json({error: "Invalid Email or password"})
            }
        })
        .catch(err=>{
            console.log(err);
        })

    })
})
    module.exports = router