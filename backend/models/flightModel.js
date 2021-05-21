import mongoose from 'mongoose'

//isdelayed as boolean which ives thta is this operatin delayed by any of this handler
const flightlogSchema = mongoose.Schema({
    luggagehandler:{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        isdelayed :{
            type:Boolean
        },
        reason: {
            type:String,
        },
        expectedstarttime: {
            type: Date,
        },
        expectedendtime: {
            type: Date,
        },
        actualstarttime: {
            type: Date,
        },
        actualendtime: {
            type: Date,
        },
    },
    cabinhandler:{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        isdelayed :{
            type:Boolean
        },
        reason: {
            type:String,
        },
        expectedstarttime: {
            type: Date,
        },
        expectedendtime: {
            type: Date,
        },
        actualstarttime: {
            type: Date,
        },
        actualendtime: {
            type: Date,
        },
    },
    rampuphandler:{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        isdelayed :{
            type:Boolean
        },
        reason: {
            type:String,
        },
        expectedstarttime: {
            type: Date,
        },
        expectedendtime: {
            type: Date,
        },
        actualstarttime: {
            type: Date,
        },
        actualendtime: {
            type: Date,
        },
    }
})
const flightSchema = mongoose.Schema(
{
    flightno: {
        type: String,
        required: true,
        unique: true,
    },
    flightname: {
        type: String,
        required: true,
    },
    flighttype: {
        type: String,
        required: true,
        enum: ['inbound', 'outbound'] 
    },
    delaytime: {
        type: String,
    },
    from:{
        type: String,
    },
    to:{
        type: String,
    },
    flightlog : flightlogSchema,
    isterminal: {
        type: Boolean,
        required: true,
    },
    landingtime: {
        type: Date,
        required: true,
    },
    takeofftime: {
        type: Date,
    },
},
{
    timestamps: true,
}
)
  
const Flight = mongoose.model('Flight', flightSchema)
export default Flight