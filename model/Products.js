const mongoose=require('mongoose')

 const prodeucSchema=new mongoose.Schema({

    name:{
        type:String,
        trim:true,
        required:true
    },

    img:{
        type:String,
        trim:true,
    },
    price:{
type:Number,
min:0,
required:true
    },
    desc:{
        type:String,
        trim:true,
    },
    reviews:[
    
    {
      type:mongoose.Schema.Types.ObjectId,  //reference to the id of the review model
        ref:"Review"   //the name of the model that this field references
    }
]

})

// model-> capital letter, singular prodeuct likhnege na ki prodeucts
//model/collection -> js class -> objects/document
const Product=mongoose.model("Product",prodeucSchema);

module.exports=Product;  //exporting the module so that it can be used in other files




