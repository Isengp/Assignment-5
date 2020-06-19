const express = require('express');

const contRouter = express.Router();

function router(nav){
    contRouter.get('/',function(req,res){
        res.render("contact",{
            nav,
            title: 'Library'
        })
    })
    return contRouter;
}

module.exports = router;