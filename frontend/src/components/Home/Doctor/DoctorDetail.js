import React from 'react';

const DoctorDetail = ({item}) => {
    return (
        <div>
            <div className='col-md-3 col-sm-6 col-12 text-center doctor-content m-3'>
                <div className="container shadow-lg p-3">
                    <h2 className="brand-color mt-1">Dr.Abdul Qahar</h2>
                    <p className="text-primary">
                        BDS,MDS,DDS <br/>Contact : +91-88017547512 </p>
                </div>
            </div>
            <div className='col-md-3 col-sm-6 col-12 text-center doctor-content m-3'>
                <div className="container shadow-lg p-3">
                    <h2 className="brand-color mt-1">Dr. Junaid</h2>
                    <p className="text-primary">
                         BDS,MDS <br/>Contact :+91-6517547512
                    </p>
                </div>
            </div>
            <div className='col-md-3 col-sm-6 col-12 text-center doctor-content m-3'>
                <div className="container shadow-lg p-3">
                    <h2 className="brand-color mt-1">Dr. Akhtar</h2>
                    <p className="text-primary">
                    BDS,MS<br/>Contact : +91-75017547512                     </p>
                </div>
            </div>
            <div className='col-md-3 col-sm-6 col-12 text-center doctor-content m-3'>
                <div className="container shadow-lg p-3">
                    <h2 className="brand-color mt-1">Dr. Rumaisa</h2>
                    <p className="text-primary">
                        BDS,MDS,MS,DDS<br/>Contact : +91-48017547512 
                    </p>
                </div>
            </div>
            <div className='col-md-3 col-sm-6 col-12 text-center doctor-content m-3'>
                <div className="container shadow-lg p-3">
                    <h2 className="brand-color mt-1">Dr. Asefa</h2>
                    <p className="text-primary">
                    BDS<br/>Contact : +91-96017547512                    </p>
                </div>
            </div>
            <div className='col-md-3 col-sm-6 col-12 text-center doctor-content m-3'>
                <div className="container shadow-lg p-3">
                    <h2 className="brand-color mt-1">Dr. Sayed</h2>
                    <p className="text-primary">
                    BDS,MDS<br/>Contact : +91-39017547512 
                    </p>
                </div>
            </div>
        

        </div>
        
    );
};
export default DoctorDetail;