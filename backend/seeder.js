import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import {flight_data,Flightlog} from './data/flight.js'
import User from './models/userModel.js'
import Flight from './models/flightModel.js'
import Product from './models/productModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    // await Product.deleteMany()
    // await User.deleteMany()
    await Flight.deleteMany()
    //const createdUsers = await User.insertMany(users)
    // const luggageuser = createdUsers[3]._id
    // const cabinuser = createdUsers[9]._id
    // const rampupuser = createdUsers[12]._id 
    // const normuser = createdUsers[0]._id
    // const sampleProducts = products.map((product) => {
    //   return { ...product, user: normuser }
    // })

    const sampleflightlog = Flightlog.map((flog) => {
      // flog.luggagehandler.user=luggageuser;
      // flog.cabinhandler.user=cabinuser;
      // flog.rampuphandler.user=rampupuser;
      return flog;
    })
    var i = 0;
    const flightcreate = flight_data.map((fli) => {
      fli.flightlog = sampleflightlog[i++];
      return fli;
    })
    const flight = await Flight.insertMany(flightcreate)

    //await Product.insertMany(sampleProducts)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Product.deleteMany()
    await User.deleteMany()
    await Flight.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
