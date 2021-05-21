import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}
const rampupuser = (req, res, next) => {
  if (req.user && req.user.role == 'rampupservice') {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an rampup service user')
  }
}

const luggageuser = (req, res, next) => {
  if (req.user && req.user.role == 'luggageservice') {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an luggage service user')
  }
}

const cabinuser = (req, res, next) => {
  if (req.user && req.user.role == 'cabinservice') {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an cabinservice user')
  }
}

const atcuser = (req, res, next) => {
  if (req.user && req.user.role == 'atcservice') {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an atc service user')
  }
}

export { protect, admin, rampupuser, luggageuser, cabinuser, atcuser }
