import mongoose from 'mongoose';
const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:false,
    },
    message:{
        type:String,
        required:false,
    } 
    
}, {timestamps: true})

export default mongoose.model('contacts', contactSchema)