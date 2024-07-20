import mongoose from 'mongoose'

const OurServices = new mongoose.Schema({
    serviceName:{
        type:String,
        required:true,
    },
    timeSlot:{
        type:String,
        required:true,
    },
    totalSpace:{
        type:String,
        required: true,
    }
})

export default mongoose.model("OurServices", OurServices)
