import asyncHandler from 'express-async-handler'
import Flight from '../models/flightModel.js'

const getrampupservice = asyncHandler(async (req, res) => {
    const rampupservice = await Flight.find().select('flightlog.rampuphandler');
    res.json(rampupservice);
})

const getluggageservice = asyncHandler(async (req, res) => {
    const luggageservice = await Flight.find().select('flightlog.luggagehandler');
    res.json(luggageservice);
})

const getcabinservice = asyncHandler(async (req, res) => {
    const cabinservice = await Flight.find().select('flightlog.cabinhandler');
    res.json(cabinservice);
})

const getrampupservicebyid = asyncHandler(async (req, res) => {
    const rampupservice = await Flight.findById(req.params.id).select('flightlog.rampuphandler');
    if (rampupservice) {
      res.json(rampupservice);
    } else {
      res.status(404);
      throw new Error("request Not Found");
    }
})


const getluggageservicebyid = asyncHandler(async (req, res) => {
    const rampupservice = await Flight.findById(req.params.id).select('flightlog.luggagehandler');
    if (rampupservice) {
      res.json(rampupservice);
    } else {
      res.status(404);
      throw new Error("request Not Found");
    }
})

const getcabinservicebyid = asyncHandler(async (req, res) => {
    const rampupservice = await Flight.findById(req.params.id).select('flightlog.cabinhandler');
    if (rampupservice) {
      res.json(rampupservice);
    } else {
      res.status(404);
      throw new Error("request Not Found");
    }
})

const updaterampupservicebyid = asyncHandler(async (req, res) => {
    const {
        isdelayed,
        reason,
        actualstarttime,
        actualendtime
      } = req.body
      const actualstarttime1 = new Date(actualstarttime)
      const actualendtime1 = new Date(actualendtime)
    const flight = await Flight.findById(req.params.id).select('flightlog.rampuphandler');
    if (flight) {
        flight.flightlog.rampuphandler.isdelayed = isdelayed
        flight.flightlog.rampuphandler.reason = reason
        flight.flightlog.rampuphandler.actualstarttime = actualstarttime1
        flight.flightlog.rampuphandler.actualendtime = actualendtime1
        const updatedflight = await flight.save()
        res.json(updatedflight)
      } else {
        res.status(404)
        throw new Error('Product not found')
      }
})

const updaterluggageservicebyid = asyncHandler(async (req, res) => {
    const {
        isdelayed,
        reason,
        actualstarttime,
        actualendtime
      } = req.body
      const actualstarttime1 = new Date(actualstarttime)
      const actualendtime1 = new Date(actualendtime)
    const flight = await Flight.findById(req.params.id).select('flightlog.luggagehandler');
    if (flight) {
        flight.flightlog.luggagehandler.isdelayed = isdelayed
        flight.flightlog.luggagehandler.reason = reason
        flight.flightlog.luggagehandler.actualstarttime = actualstarttime1
        flight.flightlog.luggagehandler.actualendtime = actualendtime1
        const updatedflight = await flight.save()
        res.json(updatedflight)
      } else {
        res.status(404)
        throw new Error('Product not found')
      }
})

const updatecabinservicebyid = asyncHandler(async (req, res) => {
    const {
        isdelayed,
        reason,
        actualstarttime,
        actualendtime
      } = req.body
      const actualstarttime1 = new Date(actualstarttime)
      const actualendtime1 = new Date(actualendtime)
    const flight = await Flight.findById(req.params.id).select('flightlog.cabinhandler');
    if (flight) {
        flight.flightlog.cabinhandler.isdelayed = isdelayed
        flight.flightlog.cabinhandler.reason = reason
        flight.flightlog.cabinhandler.actualstarttime = actualstarttime1
        flight.flightlog.cabinhandler.actualendtime = actualendtime1
        const updatedflight = await flight.save()
        res.json(updatedflight)
      } else {
        res.status(404)
        throw new Error('Product not found')
      }
})
export { 
    getrampupservice,
    getluggageservice,
    getcabinservice,
    getrampupservicebyid,
    getluggageservicebyid,
    getcabinservicebyid,
    updaterampupservicebyid,
    updaterluggageservicebyid,
    updatecabinservicebyid,
}