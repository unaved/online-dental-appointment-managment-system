import mongoose from 'mongoose';
const appointMentSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
    }, 
    phone:{
        type: String,
    },
    email:{
        type: String,
        required:true,
    }, 
    gender:{
        type: String,
    },
    age:{
        type: String
    },
    weight:{
        type: String,
    },
    serviceTitle:{
        type: String
    },
    appointmantDate:{
        type: String,
        required:true
    },
    appointmantTime:{
        type: String,
        required:true
    },
    doctor_id:{
        type: String,
        required:false
    },
    user_id:{
        type: String,
        required:true
    },
    appointMent_status:{
        type:String,
        default:'pending',
    }
}, {timestamps: true})

export default mongoose.model('Appointments', appointMentSchema)