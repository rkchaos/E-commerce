const express=require('express');
const Product = require('../model/Products');
const Review = require('../model/Review');
const { validReview } = require('../middleware');
const router=express.Router();//mini application
   

router.post('/products/:id/rating', validReview, async(req,res)=>{
  try{
   let{rating,comment}=req.body;
   let{id}=req.params;
   let product= await Product.findById(id);
   let review=new Review({rating,comment})
   product.reviews.push(review)
   await product.save();
   await review.save();
   req.flash('success','Review Added Sucessfully')
   res.redirect(`/products/${id}`)
  }
  catch(e){
   res.render('error',{err:e.message})
  }
})












module.exports=router;