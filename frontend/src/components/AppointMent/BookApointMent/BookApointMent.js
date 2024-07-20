import React from 'react';
import useFetch from '../../hooks/useFetch';
import BookingDate from './BookingDate';
import './booking.css';
const BookApointMent = ({ selectDate }) => {
    
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const { data, loading, error } = useFetch(`/auth/ourServices`);
    // console.log('BookApointMent',data);
    return (
        <section>
            <h1 className="text-center brand-color text-uppercase">your selected date {selectDate.toString()}</h1>
            <div className="container">
            <div className="row align-items-center">
                {
                    data && data?.map(booking => <BookingDate booking={booking} date={selectDate} key={booking._id}></BookingDate>)
                }
            </div>
            </div>
        </section>
    );
};

export default BookApointMent;