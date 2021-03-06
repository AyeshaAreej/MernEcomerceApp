const Product=require('../models/product')
const APIFeatures = require('../utils/apiFeatures')

// const ErrorHandler=require('../utils/errorHandler')

//create new product=> /api/v1/product/new
const newProduct=  async (req,res,next)=>{

    req.body.user=req.user.id;
    const product = await Product.create(req.body);
    console.log('product created')
    res.status(201).json({
        success: true,
        product
    }) 

}
 
//get all products => /api/v1/products
const getProducts= async (req,res,next)=>{
  
    //pagination
    const resPerPage=8;
    const productsCount=await Product.countDocuments();

    const apiFeatures=new APIFeatures(Product.find(),req.query )
    .search()
    .filter()
    .pagination(resPerPage)
    // const products=await Product.find();

     const products=await apiFeatures.query;
    res.status(200).json({
        success:"true",
        productsCount,
        products
    })
}

//Get single product details => /api/v1/product/:id

const getSingleProduct=async(req,res,next)=>{

    const product=await Product.findById(req.params.id);

    if(!product){  
         // return next(new ErrorHandler('Product not found',404));
        return res.status(404).json({
            success:false,
            message:'Product not found'
        })

    } 
       
    
    res.status(200).json({
        success:true,
        product
    })
    
}


//update product => /api/v1/product/:id

const updateProduct = async(req,res,next)=>{
    let product=await Product.findById(req.params.id)
    
    if(!product){  
        return res.status(404).json({
            success:false,
            message:'Product not found'
        })
    }
    
    product=await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
        success:true,
        product
    })

}

//Delete product => api/v1/admin/product/id:
const deleteProduct=async(req,res,next)=>{
    const product=await Product.findById(req.params.id)
    
    if(!product){  
        return res.status(404).json({
            success:false,
            message:'Product not found'
        })
    //remove images also

    } 
    await product.remove();
    res.status(200).json({
        success:true,
        message:'Product is deleted'
       
    })
}

module.exports={getProducts,newProduct,getSingleProduct, updateProduct, deleteProduct}