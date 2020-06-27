const express = require('express');
const Bookdata = require('../model/Bookdata');

const adminRouter = express.Router();

function router(nav){
    adminRouter.get('/',function(req,res){
        res.render("addBook",{
            nav,
            title: 'Library'
        })
    })
    
    adminRouter.post('/add',function(req,res){
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image,
            plot: req.body.plot,
        }

        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
    })  

    return adminRouter;
}

module.exports = router;
