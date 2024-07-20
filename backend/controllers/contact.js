import Contact from "../models/Contact.js";

export const saveContact = async (req,res)=>{
    console.log('savContact')
    const{name,email,subject,message}=req.body;
    const contact = new Contact({
        name,email,subject,message
    })

    const saveContact = await contact.save();
    return res.status(200).json(saveContact);

}


export const getContactList = async (req,res)=>{
    console.log('getContactList')    
    const contact = await Contact.find({});
    return res.status(200).json(contact);

}



export default saveContact;