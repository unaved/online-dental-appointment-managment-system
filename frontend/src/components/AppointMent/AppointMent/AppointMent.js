import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointMentForm from '../AppointMentForm/AppointMentForm';
import AppointMentTop from '../AppointMentTop/AppointMentTop';
import BookApointMent from '../BookApointMent/BookApointMent';
import moment from 'moment';
// import 
const AppointMent = () => {
    const [selectDate, setSelectedDate] = useState(new Date());
    
    const handleDateChange = (date) =>{
        const d = moment(date).format("DD/MM/YYYY"); // you get "16/05/2018"
        
        setSelectedDate(d)
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointMentTop handleDateChange={handleDateChange} key={10}></AppointMentTop>
            <BookApointMent selectDate={selectDate} key={6}></BookApointMent>
            <AppointMentForm></AppointMentForm>
            <Footer></Footer>
        </div>
    );
};

export default AppointMent;