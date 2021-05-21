import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import Bug from '../models/bugModel.js'
import Announcement from '../models/announModel.js'
import Icon from '../models/iconModel.js'


const geticons = asyncHandler(async (req, res) => {
  const icons = await Icon.findById("60a67edebb3d5c775bd6b88e")

  res.json( icons.name )
})

const addicons = asyncHandler(async (req, res) => {
  const {
    icons
  } = req.body
  const savicon = new Icon({
    name:icons,
  })
  await savicon.save()
  res.status(201).json({ message: 'question added' })

})


const createannouncements = asyncHandler(async (req, res) => {
  const {
    name,
    description,
  } = req.body
  const announcement = new Announcement({
    name:name,
    description:description,
  })
  const createannouncement = await announcement.save()
  res.status(201).json(createannouncement)
})

const getannouncements = asyncHandler(async (req, res) => {
  const announcements = await Announcement.find()

  res.json( announcements )
})

//@desc     Fetch all products
//@route    GET /api/products
//@access   public
const getbugs = asyncHandler(async (req, res) => {
  const bugs = await Bug.find()

  res.json( bugs )
})

const getProducts = asyncHandler(async (req, res) => {
    const keyword = req.query.keyword
    ? {
      $or:[{name: {
        $regex: req.query.keyword,
        $options: 'i',
      }},{description: {
        $regex: req.query.keyword,
        $options: 'i',
      } }]
    }
    : {}
  //   const products = await Product.find({ $or:[{name: {
  //     $regex: req.query.keyword,
  //     $options: 'i',
  //   }},{description: {
  //     $regex: req.query.keyword,
  //     $options: 'i',
  //   } }]
  // })
  const products = await Product.find({ user: req.user._id,...keyword })
  res.json(products)
})

//@desc     Fetch single product
//@route    GET /api/products/:id
//@access   public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    const a = product.user.toString()
    const b = req.user._id.toString()
    if (a !== b) {
      res.status(401)
      throw new Error('Not Authorised')
    } else {
      res.json(product)
    }
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createbug = asyncHandler(async (req, res) => {
  const {
    email,
    domain,
    description,
  } = req.body
  const bug = new Bug({
    email:email,
    domain:domain,
    description:description
  })
  const createdBug = await bug.save()
  res.status(201).json(createdBug)
})

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    user: req.user._id,
    image: '/images/sample.jpg',
    description: 'Sample description',
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const {
      name,
      description,
      image,
    } = req.body
  
    const product = await Product.findById(req.params.id)
  
    if (product) {
      product.name = name
      product.description = description
      product.image = image
  
      const updatedProduct = await product.save()
      res.json(updatedProduct)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })

export { 
  getProductById, 
  getProducts, 
  createProduct,
  updateProduct, 
  createbug,
  getbugs,
  createannouncements,
  getannouncements,
  geticons,
  addicons
}
