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
        link:'/admin',name:'Add Book'
    },
    {
        link:'/admin2',name:'Add Author'
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

const adminRouter = require('./src/routes/adminRoutes')(nav)

const adminnewRouter = require('./src/routes/adminnewRoutes')(nav)



app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authRouter);
app.use('/login',logRouter);
app.use('/signup',regRouter);
app.use('/contact',contRouter);
app.use('/admin',adminRouter);
app.use('/admin2',adminnewRouter);




app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title: 'Library'
    });
});


app.listen(5000);