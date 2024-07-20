import appointMentSchema from "../models/DoctorAppointMent.js";
import OurServices from "../models/PatientsServices.js";
import reviewSchema from "../models/ReviewsModal.js";
import Users from "../models/Users.js";
import Doctor from '../models/Doctors.js';
import bcrypt from 'bcrypt';

export const appointMentByDate = async (req, res, next) => {
    const { id, isAdmin, isDoctor } = req.user;
    console.log("req body",req.body);
    try {
        if(isDoctor){
            
            const appointmentDate = await appointMentSchema.find({appointmantDate: req.body.date});
            
            return res.status(200).json(appointmentDate);
        }
        if (isAdmin) {
            const appointmentDate = await appointMentSchema.find({ appointmantDate: req.body.date })
            return res.status(200).json(appointmentDate);
        } else {
            const appointmentDate = await appointMentSchema.find({ appointmantDate: req.body.date, user_id: id })
            return res.status(200).json(appointmentDate);
        }
    } catch (err) {
        next(err);
    }
}
// Add service
export const AddServices = async (req, res, next) => {
    const serviceData = new OurServices(req.body);
    try {
        const services = await serviceData.save();
        return res.status(200).json(services);
    } catch (err) {
        next(err);
    }
}

export const getServices = async(req,res,next)=>{    
    try {
        const serviceData = await OurServices.find();    
        return res.status(200).json(serviceData);
    } catch (err) {
        next(err);
    }
}

export const deleteService = async(req,res,next)=>{
    const {id} = req.params;
    try {
        const serviceData = await OurServices.findByIdAndDelete(id);    
        return res.status(200).json(serviceData);
    } catch (err) {
        next(err);
    }
}
// Add doctor
export const AddDoctor = async (req, res, next) => {
    const salt =  bcrypt.genSaltSync(10);
    const hash =  bcrypt.hashSync(req.body.name, salt);
    const doctorData = new Doctor(req.body);
    try {
        const userData = new Users({
            username: req.body.name,
            email: req.body.email,
            password: hash,
            isAdmin:false,
            isDoctor: true
        })
        const newUser = await userData.save();
        const data = await doctorData.save();
        return res.status(200).json(data);
    } catch (err) {
        next(err);
    }
}

export const ServicesList = async (req, res, next) => {
    try {
        const services = await OurServices.find();
        return res.status(200).json(services);
    } catch (err) {
        next(err)
    }
}

export const DoctorList = async (req, res, next) => {
    const { email } = req.query;
    try {
        if (email) {
            const doctorList = await Users.find({ email: email })
            return res.status(200).json(doctorList);
        } else {
            const doctorList = await Users.find({ isDoctor: true })
            return res.status(200).json(doctorList);
        }
    }
    catch (err) {
        next(err);
    }
}
export const UpdateUserInfo = async (req, res, next) => {
    try {
        const response = await Users.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        return res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

export const AddAppointMentCollection = async (req, res, next) => {
    console.log('Request body',req.body);
    const saveAppoint = new appointMentSchema(req.body)
    try {
        const addpointment = await saveAppoint.save();
        return res.status(200).json(addpointment)
    }
    catch (err) {
        console.log('Errorr',err);
        next(err);
    }
}

//Appopintment PatientList
export const AppointmentPatientsList = async (req, res, next) => {
    const { id, isAdmin, isDoctor } = req.user;
    const {status} = req.query;
    console.log('Patheri',req.user);
    try {
        if(isDoctor || isAdmin){
            const patientList = await appointMentSchema.find({});
            console.log(patientList);
            return res.status(200).json(patientList);
        } 
        else {
            const appointmentPatients = await appointMentSchema.find({ user_id: id });
            return res.status(200).json(appointmentPatients);
        }
    }
    catch (err) {
        next(err);
    }
}

export const IsDoctor = async (req, res, next) => {
    const docEmail = req.body.email;
    try {
        const isDoc = await Users.findOne({ email: docEmail })
        if (isDoc.isDoctor = true) {
            const { password, ...others } = isDoc._doc;
            return res.status(200).json({ ...others })
        }
        else {
            return res.status(200).json(false)
        }
    }
    catch (err) {
        next(err);
    }
}

//Reviews

export const AddReview = async (req, res, next) => {
    const savedData = new reviewSchema(req.body);
    try {
        const saveReview = await savedData.save();
        return res.status(200).json(saveReview);
    } catch (err) {
        next(err)
    }
}
export const ReviewsList = async (req, res, next) => {
    try {
        const response = await reviewSchema.find({});
        return res.status(200).json(response)
    }
    catch (err) {
        next(err)
    }
}


export const updateAppointment = async (req,res,next)=>{
    const {id} = req.params;
    
    try {
        const response = await appointMentSchema.findByIdAndUpdate(id, { appointMent_status: req.body.status }, { new: true });
        
        return res.status(200).json(response)
        
    }
    catch (err) {
        
        next(err)
    }
}

let getUnique = (arr,callback)=>{
    
    if(arr.length<0 || arr==undefined){
        callback(null,err);
    } else {
        callback(arr.length>0 && arr.filter((v,i,a)=>a.findIndex(v2=>(v2.email===v.email))===i),null);
    }

}

export const PatientList = async (req, res, next) => {
    const { id, isAdmin, isDoctor } = req.user;
    const {status} = req.query;
    
    try {
        if(isDoctor){
            const patientList = await appointMentSchema.find({doctor_id:id});
            getUnique(patientList,(data,err)=>{
                if(err){
                    return res.status(400).json({msg:'Data Not Found'});
                }
                return res.status(200).json(data);
            })
            
        }
        else if(isAdmin) {
            const appointmentPatients = await appointMentSchema.find({});            
            getUnique(appointmentPatients,(data,err)=>{
                if(err){
                    return res.status(400).json({msg:'Data Not Found'});
                }
                return res.status(200).json(data);
            })
        } 
        else {
            const appointmentPatients = await appointMentSchema.find({ user_id: id });
            getUnique(appointmentPatients,(data,err)=>{
                if(err){
                    return res.status(400).json({msg:'Data Not Found'});
                }
                return res.status(200).json(data);
            })
            
            
        }
    }
    catch (err) {
        next(err);
    }
}

