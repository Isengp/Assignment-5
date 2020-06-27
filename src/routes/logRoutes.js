const express = require('express');

const logRouter = express.Router();

const Regdata = require('../model/Regdata');

function router(nav){
    logRouter.get('/',function(req,res){
        res.render("login",{
            nav,
            title: 'Library'
        })
    })

    logRouter.post('/log',function(req,res){
        var email = req.body.email;
        var password = req.body.password;


        Regdata.findOne({email:email,password:password},(err,match)=>{
            if(err) 
            {
                console.log("Error")
            }
            if(!match)
            {
                res.render("login",
                {
                    nav,
                    title: 'Library', 
                });
            }
            else {
                res.redirect("/books");
            }
        })
    
    })

    return logRouter;
}

module.exports = router;

