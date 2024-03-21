const express=require("express")
const app=express();
const path=require('path')
const seedDB=require("./seed")
const mongoose = require('mongoose');
const productRoutes=require('./routes/product')
const productReview=require('./routes/review')
const methodOverride = require('method-override')

const session = require('express-session');
const flash = require('connect-flash');
app.use(methodOverride('_method'))
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')//return promise

.then(()=>{
    console.log('db connected')
})
.catch((err)=>{
    console.log('err is ',err)
})

// let configSession = {
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false
// }

let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}

app.set('view engine','ejs');
app.set('views',path.join( __dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended :true}))
// seedDB()  //comment kr do because nodemon harr barr isse mongodb me daal dega
app.use(session(configSession));
app.use(flash());
app.use((req,res,next)=>{
    res.locals.success=req.flash('success')
    res.locals.error=req.flash('err')
    next();
})

app.use(productRoutes);
app.use(productReview);

let PORT=8080;
app.listen(PORT,()=>{
    console.log(`Server is running on  port ${PORT}`);
})

//basic server
//mongoose connection
//model-> seed data kr dia
// routes-> views
// rating schema -> product change