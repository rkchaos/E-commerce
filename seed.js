const mongoose=require('mongoose')
const Product = require('./model/Products')

const product=[


    {
name:"iphone 15 pro",
img:  "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"           ,
price:12400,
desc:"very costly phone it is"
    },
    {
name:"mackbook pro",
img: "https://images.unsplash.com/photo-1617472241266-ff84f4ea167a?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
price:230000,
desc:"hello i am a good machine"
    },
    {
name:"apple pencil",
img:  "https://images.unsplash.com/photo-1594200664133-0ee987e1babf?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
price:10000,
desc:"i cam write  nothing "
    }
]

async function seedDB(){
   await Product.insertMany(product)
   console.log("Db seeded");
}

module.exports=seedDB;