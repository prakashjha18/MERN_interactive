import express from 'express'
const router = express.Router()

import {
    getrampupservice,
    getluggageservice,
    getcabinservice,
    getrampupservicebyid,
    getluggageservicebyid,
    getcabinservicebyid,
    updaterampupservicebyid,
    updaterluggageservicebyid,
    updatecabinservicebyid
} from '../controllers/flightserviceController.js'

import { protect,rampupuser, luggageuser, cabinuser } from '../middleware/authMiddleware.js'

router.route('/rampupservice')
.get(protect, rampupuser, getrampupservice)

router.route('/rampupservice/:id')
.get(protect, rampupuser, getrampupservicebyid)
.put(protect, rampupuser, updaterampupservicebyid)

router.route('/luggageservice')
.get(protect, luggageuser, getluggageservice)

router.route('/luggageservice/:id')
.get(protect, luggageuser, getluggageservicebyid)
.put(protect, luggageuser, updaterluggageservicebyid)

router.route('/cabinservice')
.get(protect, cabinuser, getcabinservice)

router.route('/cabinservice/:id')
.get(protect, cabinuser, getcabinservicebyid)
.put(protect, cabinuser, updatecabinservicebyid)

export default router