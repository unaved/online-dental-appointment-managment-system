import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [form,setForm] = useState({name:'',email:'',subject:'',message:''});
    const navigate = useNavigate();

    const inputHandler = (e)=>{
        e.preventDefault();
        console.log('eeee',e);
        setForm({...form,[e.target.name]:e.target.value});
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();
        
        const data = await axios.post('http://localhost:5000/saveContact',form);
        console.log(data);
        if(data){
            swal({
                icon: 'success',
                text: 'Successfully Message Sent',
                timer: 2000
            })
            navigate("/")
        } else {
            swal({
                icon: 'success',
                text: 'Something went wrong,Please try again.',
                timer: 2000
            })
        }
    }
    return (
        <section className="contact my-5 py-5" id="ContactPage">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="text-secondary">Contact Us </h5>
                    <h1 className="brand-color">Alawys Connect With Us</h1>
                </div>
            </div>

            <div className="col-md-9 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="name" value={form.name} placeholder="enter your name" className="form-control mb-3" onChange={(e)=>{inputHandler(e)}}/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" value={form.email} placeholder="enter your email" className="form-control mb-3" onChange={(e)=>{inputHandler(e)}}/>
                    </div>
                    <div className="form-group">
                        <input type="subject" name="subject" value={form.subject} placeholder="enter your subject" className="form-control mb-3" onChange={(e)=>{inputHandler(e)}}/>
                    </div>

                    <div className="form-group">
                        <textarea name="message" value={form.message} cols="30" rows="10" placeholder="enter your message" className="form-control mb-3" onChange={(e)=>{inputHandler(e)}}/>
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary mb-3"> Submit</button>
                    </div>

                </form>
            </div>
            {/* <section className='map'>
            <iframe src='https://goo.gl/maps/d7SiQN8mnQ266FQS6?coh=178573&entry=tt' ></iframe>

            </section> */}
        </section>
    );
};

export default Contact;