import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import PatientList from './PatientList';
import './patient.css';

import useFetch from '../../hooks/useFetch';

const AllPatients = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const {data, loading, error} = useFetch(`/auth/patients`);
    
    return (
       <>
            <nav className="navbar navbar1 bg-body-tertiary">
                <div className="container-fluid">                
                    <h4 className="brand-color text-start title-wrapper">Patients List</h4>
                </div>
            </nav>
            <PatientList patient={data}></PatientList>
            
           
       </>
    );
};

export default AllPatients;

