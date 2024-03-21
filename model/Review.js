const mongoose=require('mongoose')

 const reviewSchema=new mongoose.Schema({
rating:{
type:Number,
min:0,
max:5
},

comment:{
type: String,
trim:true,
}
 },  {timestamps:true})

// model-> capital letter, singular prodeuct likhnege na ki prodeucts
//model/collection -> js class -> objects/document
const Review=mongoose.model("Review",reviewSchema);

module.exports=Review;  //exporting the module so that it can be used in other files



