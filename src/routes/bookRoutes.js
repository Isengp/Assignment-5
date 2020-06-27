const express = require('express');

const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
            nav,
            title: 'Library',
            books
            });
        });
        
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
            nav,
            title:'Library',
            book
            })
        })  
    })

    booksRouter.get('/edit/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("bookedit",{
            nav,
            title:'Library',
            book
            })
        })  
    })

    booksRouter.post("/update",function(req,res){
        var id = req.body.id;
        var title = req.body.title;
        var author = req.body.author;
        var genre = req.body.genre;
        var plot = req.body.plot;
        
        Bookdata.update({_id:id},{$set:{title:title,author:author,genre:genre,plot:plot}})
        .then(function(){
            res.redirect('/books')
        })
    })


    booksRouter.get('/delete/:id',function(req,res){
        var id = req.params.id;

        Bookdata.findByIdAndDelete({_id:id})
        .then(function(){
            res.redirect('/books')
        })         
        
    })

    return booksRouter;
}


module.exports = router;