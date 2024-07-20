import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointByDate from '../../AppointMent/AppointByDate/AppointByDate';
import './Dashboard.css';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import httpClient from '../../../helper/axios';
import moment from 'moment';
import DeshActivity from './DeshActivity';

const Dashboard = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const [selectedDate, setSelectedDate] = useState(moment(new Date()).format("DD/MM/YYYY"));
    const [appointByDate, setAppointments] = useState([]);
    const { data, loading, error } = useFetch(`/auth/appointmentpatients`);
    
    const handleDateChange = date => {
        console.log('datee123',date);
        const d = moment(date).format("DD/MM/YYYY"); // you get "16/05/2018"
        console.log('d 123',d);
        setSelectedDate(d);
        
    }
    const showAllPatientsList = () =>{
        setAppointments(data);
    }

    useEffect(() =>{
       
        fetchData();
    }, [selectedDate])

    const fetchData = async () => {
        
        try {
            console.log('fetcha data')
            const res = await httpClient.post(`/auth/appointByDate`, { date: selectedDate })
            console.log('res date',res);
            setAppointments(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
       <>
            <div className="deshboard-activity">
                <DeshActivity data={data}/>
            </div>
              <div className='mt-5 mb-2 d-flex justify-content-between dash-wrapper'>
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                            className="calender-design"
                        />
                        <div className='ml-5 w-100 justify-content-between '>
                            
                            <div className="d-flex p-2 justify-content-between title-wrapper">
                            <div className="brand-color text-center title">Appointment</div>
                            <div className='title'>{selectedDate.toString()}</div>                
                                <button className='btn btn-primary' onClick={showAllPatientsList}>Show All Apppointments</button>                                
                                
                            </div>
                                <AppointByDate appopintMent={appointByDate} key={10} selectedDate={selectedDate} handler={showAllPatientsList}></AppointByDate>
                            
                        </div>
                    </div>
       </>
    );
};

export default Dashboard;