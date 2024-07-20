import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import swal from 'sweetalert';
import { Toast } from 'react-bootstrap';
import './addService.css'
import httpClient from '../../../helper/axios';
import Modal from 'react-modal';
Modal.setAppElement('#root');
const AddService = ({isOpen,closeModal,style,formType}) => {
    const [info, setInfo] = useState({
        serviceName:'',
        timeSlot:'',
        totalSpace:''
    });
        
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    
   

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            
            const res = await httpClient.post(`/auth/addServices`, info);
            
            setInfo({
                serviceName:'',
                timeSlot:'',
                totalSpace:''
            });
            closeModal();
            swal({
                icon: 'success',
                text: 'Successfully Save',
                timer: 2000
            })
        } catch (error) {
            
            setInfo({
                serviceName:'',
                timeSlot:'',
                totalSpace:''
            });
            swal({
                icon: 'error',
                text: 'Something Went Wrong',
                timer: 2000
            })
        }
    }

  
    return (
        <>
            <Modal isOpen={isOpen}  onRequestClose={closeModal} style={style} contentLabel="Example Modal" >
            
                <h2 className="text-center brand-color">Add Service</h2>
                <div className="addService-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword">Service Name</label>
                            <input type="serviceName" onBlur={handleBlur} name="serviceName" id="" placeholder="Enter Service Name" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword">Available Time</label>
                            <input type="timeSlot" onBlur={handleBlur} name="timeSlot" id="" placeholder="Enter Service Name" className="form-control" />

                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword">Total Space</label>
                            <input type="totalSpace" onBlur={handleBlur} name="totalSpace" id="" placeholder="Total Space" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                        <button type="button" className="btn btn-danger" onClick={closeModal}>close</button>

                    </form>
                </div>
           
            </Modal>
        </>
       
    );
};

export default AddService;