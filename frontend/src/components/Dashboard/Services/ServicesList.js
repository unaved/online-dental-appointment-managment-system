import React,{useState,useEffect} from 'react'
import './service.css'
import axios from 'axios';
import swal from 'sweetalert';
import AddService from './AddService';


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


const ServicesList = () => {
  

  const [serviceData,setServiceData] = useState([]);
  useEffect( ()=>{
    fetchData()
   
    
  },[]);

  async function fetchData(){
    const {data} = await axios.get('http://localhost:5000/auth/services');
    
    setServiceData(data)
  }
  const deleteService = async(id)=>{
    
    
    const {data} = await axios.delete(`http://localhost:5000/auth/services/${id}`)
    
    swal({
      icon: 'success',
      text: 'Delete Successfully',
      timer: 2000
  })
    fetchData()
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
    fetchData()
  }
  return (
    <>
      <div className="title-wrap mt-20">
        <button className='btn btn-primary' onClick={openModal}>Add Service</button>
      </div>
      <table className="table shadow-lg p-5 mt-4">
            <thead >
                <tr>                    
                    <th className="text-primar" scope="col">Name</th>
                    <th className="text-primar" scope="col">Time Slot</th>
                    <th className="text-primar" scope="col">Space</th>
                    <th className="text-primar" scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>

            {
                     serviceData && serviceData.map((service, index) =>
                        <tr className="pateint-table-data" key={index + 1}>                            
                            <td>{service.serviceName}</td>
                            <td>{service.timeSlot}</td>
                            <td>{service.totalSpace}</td>
                            <td>
                            <div className="btn-group" role="group" aria-label="Basic example">                              
                              <button type="button" className="btn btn-danger" onClick={()=>{deleteService(service._id)}}><i className="bi bi-trash-fill"></i></button>
                              
                            </div>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <AddService isOpen={modalIsOpen}  closeModal={closeModal}  style={customStyles} />
    </>
  )
}

export default ServicesList