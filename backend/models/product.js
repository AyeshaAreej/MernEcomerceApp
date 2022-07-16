const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please enter product name"],
    trim:true,
    maxLength:[100, "Product name can not exceed 100 characters"]
  },
  price:{
    type:Number,
    required:[true,"Please enter product price"],
    default:0.0,
    maxLength:[5, "Product price can not exceed 5 characters"]
  },
  description:{
    type:String,
    // required:[true,"Please enter product description"]
  },   
  ratings:{
    type:Number,
    default:0
  } ,
  images:[
    {
     public_id:{
        type:String,
        // required:true
     },
     url:{
        type:String,
        // required:true
     }
    }
  ],
  category:{
    type:String,
    // required:[true,"Please enter category for this product"],
    enum:{
        values:[
            'Electronics',
            'Cameras',
            'Laptop',
            'Accessories',
            'Headphones',
            'Food',
            'Books',
            'Clothes/Shoes',
            'Beauty/Health',
            'Sports',
            'Outdoor',
            'Home'
        ],
        message:'Please select correct category for product'
    }

  },
  seller:{
    type:String,
    // required:[true,"Please enter product seller"]
  },
  stock:{
    type:Number,
    // required:[true,"Please enter product stock"],
    maxLength:[5, "Product cannot extend 5 characters"]
  },
  numofReviews:{
    type:Number,
    default:0
  },
  reviews:[
    {
        name:{
            type:String,
            // required:true
        },
       rating:{
            type:Number,
            // required:true
        },
        comment:{
            type:String,
            // required:true
        }

    }
  ],
  createdAt:{
    type:Date,
    default:Date.now
  }

})
const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;
