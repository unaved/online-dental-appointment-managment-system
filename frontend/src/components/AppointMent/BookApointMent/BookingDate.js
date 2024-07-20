import React, { useState } from 'react';
import AppointMentForm from '../AppointMentForm/AppointMentForm';

const BookingDate = ({ booking, date }) => {
    var subtitle;
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }

  return (
    <div className="col-3 mb-5 mt-5 bk-apt">
      <div className="card p-3">
          <div className="card-wrap">
            <h5 className="card-title brand-color">{booking.serviceName}</h5>
            <h4 className='slot'>{booking.timeSlot}</h4>
            <span className="space">Space : {booking.totalSpace}</span>
            <button onClick={openModal} className="btn btn-sm bookappointment">Book AppointMent</button>
            <AppointMentForm modalIsOpen={modalIsOpen} appointMentDate={booking.serviceName} closeModal={closeModal} date={date} timeSlot={booking.timeSlot}></AppointMentForm>
          </div>
      </div>
    </div>
  );
};

export default BookingDate;