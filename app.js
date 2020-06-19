const express = require('express');

const app = express();
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/contact',name:'Contact Us'
    }
];
const booksRouter = require('./src/routes/bookRoutes')(nav)

const authRouter = require('./src/routes/authRoutes')(nav)

const regRouter = require('./src/routes/regRoutes')(nav)

const logRouter = require('./src/routes/logRoutes')(nav)

const contRouter = require('./src/routes/contRoutes')(nav)



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authRouter);
app.use('/login',logRouter);
app.use('/signup',regRouter);
app.use('/contact',contRouter);



app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title: 'Library'
    });
});


app.listen(5000);