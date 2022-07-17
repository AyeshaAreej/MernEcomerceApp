const User=require('../models/user');
const sendToken = require('../utils/jwtToken');

const registerUser=async(req,res,next)=>{
    const{name,email,password}=req.body;

    const user=await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:'avatars/abcede',
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-VFG60RJk6-hhpS2pVR5v7PWjPHPhuyVuw&usqp=CAU'
        }
    })
  sendToken(user,200,res)
}

//Login user=>/api/v1/login
const loginUser= async(req,res,next)=>{
    const { email, password } = req.body;

    // Checks if email and password is entered by user
    if (!email || !password) {
        return res.status(400).json({
            success:false,
            message:'Please enter email & password'
        })
    }

    // Finding user in database
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
       return res.status(401).json({
            success:false,
            message:'Invalid Email or Password'
        })
    }

    // Checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return res.status(401).json({
            success:false,
            message:'Invalid Email or Password '
        })
    }
    sendToken(user,200,res)

    }

//logout use 
const logout = async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
}

//Get currently logged in user details => /api/v1/me
const  getUserProfile=async (req,res,next)=>{
    const user=await User.findById(req.user.id);
    res.status(200).json({
        success: true,
       user
    })
}

// Update user profile   =>   /api/v1/me/update
const updateProfile =async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    // Update avatar
    // if (req.body.avatar !== '') {
    //     const user = await User.findById(req.user.id)

    //     const image_id = user.avatar.public_id;
    //     const res = await cloudinary.v2.uploader.destroy(image_id);

    //     const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //         folder: 'avatars',
    //         width: 150,
    //         crop: "scale"
    //     })

        // newUserData.avatar = {
        //     public_id: result.public_id,
        //     url: result.secure_url
        // }
    // }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
}
//Get all users => /api/v1/admin/users

const allUsers= async (req,res,next)=>{
    const users=await User.find();
    res.status(200).json({
        success: true
    })


}

// Get user details   =>   /api/v1/admin/user/:id
const getUserDetails = async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return  res.status(404).json({
            success: false,
            message:`User does not found with id: ${req.params.id}`
        })

    }

    res.status(200).json({
        success: true,
        user
    })
}

// Update user profile   =>   /api/v1/admin/user/:id 
const updateUser =async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role:req.body.role
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
}


// Delete user   =>   /api/v1/admin/user/:id
const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return  res.status(404).json({
            success: false,
            message:`User does not found with id: ${req.params.id}`
        })
      }
      //remove avatar
    await user.remove();

    res.status(200).json({
        success: true,
        user
    })
}


module.exports={registerUser,loginUser,logout, getUserProfile,updateProfile, allUsers,getUserDetails,updateUser,deleteUser}