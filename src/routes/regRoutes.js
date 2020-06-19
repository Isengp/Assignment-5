const express = require('express');

const regRouter = express.Router();

function router(nav){
    regRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title: 'Library'
        })
    })
    return regRouter;
}

module.exports = router;