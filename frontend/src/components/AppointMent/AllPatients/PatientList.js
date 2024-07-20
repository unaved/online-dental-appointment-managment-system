import React, { useEffect } from 'react';
import { useState } from 'react';

const PatientList = ({ patient }) => {
    
    const [patients,setPatients] = useState([]);
    const [isLoading,setLoading] = useState(true);
    useEffect(()=>{
        setPatients(patient);        
    },[patient])


    let getUnique = (arr)=>{
        return arr.filter(function(item, pos) {
            
            return arr.indexOf(item.email) == pos.email;
        })
    }
    
    
    return (
        <table className="table shadow-lg p-5 mt-4">
            <thead >
                <tr>
                    <th className="text-primar text-center" scope="col">Sr No</th>
                    <th className="text-primar" scope="col">Name</th>
                    <th className="text-primar" scope="col">Phone</th>
                    <th className="text-primar" scope="col">Email</th>
                    <th className="text-primar" scope="col">Gender</th>                    
                    <th className="text-primar" scope="col">Age</th>
                    <th className="text-primar" scope="col">Weight</th>
                    
                </tr>

            </thead>
            <tbody>
                {
                     patients && patients.map((patient, index) =>
                        <tr className="pateint-table-data" key={index + 1}>
                            <th className="text-center">{index + 1}</th>
                            <td>{patient.username}</td>
                            <td>{patient.phone}</td>
                            <td>{patient.email}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.age}</td>
                            <td>{patient.weight}</td>
                            
                        </tr>
                    )
                }

            </tbody>
        </table>
    );
};

export default PatientList;