import React,{useState,useEffect} from 'react'
import './enquiry.css'
import axios from 'axios';
import swal from 'sweetalert';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'35%'
  },
};


const EnquiryList = () => {
  

  const [enquiryData,setEnquiryData] = useState([]);
  useEffect( ()=>{
    fetchData()
   
    
  },[]);

  async function fetchData(){
    const {data} = await axios.get('http://localhost:5000/getContact');
    
    setEnquiryData(data)
  }

  return (
    <>
      <div className="title-wrap mt-20">
      <h4 className="brand-color text-start title-wrapper">Enquiry List</h4>
      </div>
      <table className="table shadow-lg p-5 mt-4">
            <thead >
                <tr>                    
                    <th className="text-primar" scope="col">Name</th>
                    <th className="text-primar" scope="col">Email</th>
                    <th className="text-primar" scope="col">Subject</th>
                    <th className="text-primar" scope="col">Message</th>
                    
                </tr>
            </thead>
            <tbody>

            {
                     enquiryData && enquiryData.map((enquiry, index) =>
                        <tr className="pateint-table-data" key={index + 1}>                            
                            <td>{enquiry.name}</td>
                            <td>{enquiry.email}</td>
                            <td>{enquiry.subject}</td>
                            <td>{enquiry.message}</td>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>
        
    </>
  )
}

export default EnquiryList;