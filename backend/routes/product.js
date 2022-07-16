const express=require('express')
const router =express.Router();

const  productController =require('../controllers/productController')



router.get('/products',productController.getProducts)
router.get('/new',productController.newProduct);
// router.route('/new').post(productController.newProduct);
// router.route('/products').get(productController.getProducts);

module.exports=router;