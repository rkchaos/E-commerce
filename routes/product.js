const express=require('express')
const router=express.Router();//mini application
const Product = require('../model/Products');
const Review = require('../model/Review');
const { validProduct } = require('../middleware');

router.get("/products",async(req,res)=>{
try{
    let product=await Product.find({});
res.render('index',{product})
}
catch(e){
    res.render('error',{err:e.message})
}
});

router.get('/products/new',(req,res)=>{
    try{
        res.render('new')
    }
    catch(e){
        res.render('error',{err:e.message})
    }
})


router.post('/products', validProduct, async(req,res)=>{
   try{
    let{name,img,price,desc}=req.body;
    await Product.create( { name , img , price , desc } )//automaticaaly store
 res.redirect('/products')
   }
   catch(e){
    res.render('error',{err:e.message})
   }
})

// show particular products
router.get('/products/:id', async (req, res) => {

try{
    let {id}=req.params;
let foundProducts =await Product.findById(id).populate('reviews');  // find the id in database
res.render('show',{foundProducts,success:req.flash('success')});   // render that data to ejs file
} 
catch(e){
    res.render('error',{err:e.message})
   }

})
//show edit form
router.get('/products/:id/edit', async(req,res)=>{
   try{
    let {id}=req.params;
    let foundProducts =await Product.findById(id);  // find the id in database
    res.render('edit',{foundProducts});
   }
   catch(e){
    res.render('error',{err:e.message})
   }
    
})
router.patch("/products/:id", validProduct, async(req,res)=>{
try{
    let {id}=req.params;
    let{name,img,price,desc}=req.body;
   await Product.findByIdAndUpdate(id,{name,img,price,desc});
   req.flash('success' , 'Product edited successfully');
   res.redirect(`/products`)
}
catch(e){
    res.render('error',{err:e.message})
   }
})
router.delete("/products/:id", async(req,res)=>{
   try{
     let {id}=req.params;
    let foundProducts =await Product.findById(id);
    for(let ids of  foundProducts.reviews){
      await  Review.findByIdAndDelete(ids);
    }
    // let{name,img,price,desc}=req.body;
   await Product.findByIdAndDelete(id);
   req.flash('success' , 'Product delect successfully');
res.redirect('/products')
   }
   catch(e){
    res.render('error',{err:e.message})
   }
})










module.exports=router;