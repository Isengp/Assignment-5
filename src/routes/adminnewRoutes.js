const express = require('express');
const Authdata = require('../model/Authdata');

const adminnewRouter = express.Router();

function router(nav){
    adminnewRouter.get('/',function(req,res){
        res.render("addAuth",{
            nav,
            title: 'Library'
        })
    })
    
    adminnewRouter.post('/addnew',function(req,res){
        var item = {
            title: req.body.title,
            language: req.body.language,
            nation: req.body.nation,
            image: req.body.image,
            details: req.body.details,
        }

        var author = Authdata(item);
        author.save();
        res.redirect('/authors');
    })  

    return adminnewRouter;
}

module.exports = router;
