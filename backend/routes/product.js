const express=require('express')
const router =express.Router();

const  productController =require('../controllers/productController')



router.get('/products',productController.getProducts)
router.get('/product/:id',productController.getSingleProduct)
router.post('/admin/product/new',productController.newProduct);
router.put('/admin/product/:id',productController.updateProduct)
router.delete('/admin/product/:id',productController.deleteProduct)


module.exports=router;