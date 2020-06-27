const express = require('express');
const Regdata = require('../model/Regdata');

const regRouter = express.Router();

function router(nav){
    regRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title: 'Library'
        })
    })

    regRouter.post('/reg',function(req,res){
        var item = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            city: req.body.city,
            state: req.body.state,
        }
        var register = Regdata(item);
        register.save();
        res.redirect('/login');
    })

    return regRouter;
}

module.exports = router;



// const express = require('express');
// const Bookdata = require('../model/Bookdata');

// const adminRouter = express.Router();

// function router(nav){
//     adminRouter.get('/',function(req,res){
//         res.render("addBook",{
//             nav,
//             title: 'Library'
//         })
//     })
    
//     adminRouter.post('/add',function(req,res){
//         var item = {
//             title: req.body.title,
//             author: req.body.author,
//             genre: req.body.genre,
//             image: req.body.image,
//             plot: req.body.plot,
//         }

//         var book = Bookdata(item);
//         book.save();
//         res.redirect('/books');
//     })  

//     return adminRouter;
// }

// module.exports = router;