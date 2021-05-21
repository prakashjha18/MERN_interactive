import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

//@desc     Auth user & get token
//@route    POST /api/users/login
//@access   public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      role:user.role,
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

//@desc     GET user profile
//@route    GET /api/users/profile
//@access   privet
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    if (req.body.password) {
      user.password = req.body.password
    }
    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(user._id),
      role:user.role,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

//@desc     GET user profile
//@route    GET /api/users/profile
//@access   privet
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      role:user.role,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

//@desc     REgister a new usern
//@route    POST /api/users/
//@access   public
const RegisterUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,  
      token: generateToken(user._id),
      role:user.role,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

export { authUser, updateUserProfile, getUserProfile, RegisterUser, getUsers }
