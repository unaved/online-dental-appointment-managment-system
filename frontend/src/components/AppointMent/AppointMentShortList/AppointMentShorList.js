import React,{useContext, useEffect, useState} from 'react';
import Moment from 'react-moment';
import './appointment.css';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';

const AppointMentShorList = ({ appointment }) => {
    
    const {user:{isAdmin,isDoctor}}= useContext(AuthContext)
    
    const [appointMentList,setAppointmentList] = useState([]);

    useEffect(()=>{
        setAppointmentList(appointment);
    },[appointment])
    const updateStatus = async(id,status)=>{
        
        const {data} = await axios.put(`${process.env.REACT_APP_BASE_URL}/auth/patients/${id}`,{id,status});
        
        setAppointmentList(data);
    }

    // console.log('appointMentList',appointMentList);
    return (
        <div className='card shadow appointment-list'>
            <table className="table">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Gender</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Date</th>                    
                    <th className="text-secondary" scope="col">{isAdmin || isDoctor ? 'Action':'Status'}</th>
                </tr>
            </thead>
            <tbody>
                {appointMentList && appointMentList.length>0 ? appointMentList?.map((item, index) =>
                    {
                        
                        return (<tr key={index + 200}>
                        {/* <td>{index + 1}</td> */}
                        <td>{item.username}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.serviceTitle}</td>
                        <td>{item.appointmantDate}</td>                           
                        <td className="btn-group">
                            <span className='status btn btn-sm btn-custom'>
                                {item.appointMent_status}
                            </span> 
                            {(isAdmin || isDoctor) && (<div className="btn-group" role="group">
                                <div type="button" className="btn btn-custom dropdown-toggle gr-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-pencil"></i>
                                </div>
                                <ul className="dropdown-menu">
                                <li><div className="dropdown-item" onClick={()=>{updateStatus(item._id,'approved')}}>Approve</div></li>
                                <li><div className="dropdown-item" onClick={()=>{updateStatus(item._id,'rejected')}}>Reject</div></li>
                                <li><div className="dropdown-item" onClick={()=>{updateStatus(item._id,'visited')}}>Visited</div></li>
                                <li><div className="dropdown-item" onClick={()=>{updateStatus(item._id,'not visited')}}>Not Visited</div></li>
                                </ul>
                            </div>)}                            
                            
                            
                        </td>
                    </tr>)
                    }
                ):(<tr rowSpan="2"><td>No Appointment for Selected Date</td></tr>)}
            </tbody>
        </table>
        </div>
    );
};

export default AppointMentShorList;