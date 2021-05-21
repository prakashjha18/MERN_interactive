import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  createbug,
  getbugs,
  getannouncements,
  createannouncements,
  addicons,
  geticons,
} from '../controllers/productController.js'
import { protect,admin } from '../middleware/authMiddleware.js'


router.route('/icons').post(addicons).get(geticons)
router.route('/announcement').get(getannouncements).post(protect,admin,createannouncements)
router.route('/viewbugs').get(getbugs)
router.route('/').get(protect,getProducts).post(protect,createProduct)
router.route('/:id').get(protect,getProductById).put(protect,updateProduct)
router.route('/createbug').post(createbug)



export default router