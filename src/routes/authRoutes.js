const express = require('express');

const authRouter = express.Router();
const Authdata = require('../model/Authdata');

function router(nav){    
    
    authRouter.get('/',function(req,res){
        Authdata.find()
        .then(function(authors){
            res.render("authors",
            {
                nav,
                title: 'Library',
                authors
            })
        })
    })

    authRouter.get('/:id',function(req,res){
        const id = req.params.id
        Authdata.findOne({_id:id})
        .then(function(author){
            res.render('author',{
                nav,
                title:'Library',
                author
            })
        })     
    })

    authRouter.get('/edit/:id',function(req,res){
        const id = req.params.id;
        Authdata.findOne({_id:id})
        .then(function(author){
            res.render("authedit",{
            nav,
            title:'Library',
            author
            })
        })  
    })

    authRouter.post("/update",function(req,res){
        var id = req.body.id;
        var title = req.body.title;
        var language = req.body.language;
        var nation = req.body.nation;
        var details = req.body.details;
        
        Authdata.update({_id:id},{$set:{title:title,language:language,nation:nation,details:details}})
        .then(function(){
            res.redirect('/authors')
        })
    })


        authRouter.get('/delete/:id',function(req,res){
        var id = req.params.id;

        Authdata.findByIdAndDelete({_id:id})
        .then(function(){
            res.redirect('/authors')
        })         
        
    })


    return authRouter;
}

module.exports = router;