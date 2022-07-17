const express=require('express')
const router=express.Router()
const { isAuthenticatedUser, authorizeRoles }=require('../middlewares/auth')
const authController =require('../controllers/authController')

router.post('/register',authController.registerUser);
router.post('/login',authController.loginUser);
router.get('/logout',authController.logout);
router.get('/me', isAuthenticatedUser,authController.getUserProfile )
router.put('/me/update', isAuthenticatedUser,authController.updateProfile )
router.get('/admin/users',isAuthenticatedUser, authorizeRoles('admin'), authController.allUsers)
router.get('/admin/user/:id',isAuthenticatedUser, authorizeRoles('admin'), authController.getUserDetails)
router.put('/admin/user/:id',isAuthenticatedUser, authorizeRoles('admin'), authController.updateUser)
router.delete('/admin/user/:id',isAuthenticatedUser, authorizeRoles('admin'), authController.deleteUser)



module.exports=router;