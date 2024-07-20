import React from 'react';


const DeshActivity = ({data}) => {
    let approve = 0,reject=0,pending=0,notvisit=0,visit=0;
     data && data.forEach(item=>{        
        if(item.appointMent_status=='visited'){
            visit+=1;
        } else if(item.appointMent_status=='not visited'){
            notvisit+=1;
        } else if(item.appointMent_status=='pending'){
            pending+=1;
        }  else if(item.appointMent_status=='approved'){
            approve+=1;
        }  else if(item.appointMent_status=='rejected'){
            reject+=1;
        }
    })
    
    return (

        <div className="container-fluid">
            <div className="row desh-card-wrap">
            <div className="desh-card bg-warning col-2">
                <div className="desh-date d-flex justify-content-evenly align-items-ceneter">
                    <h2>{pending}</h2>
                    <div className="desh-text">
                        <p>Pending <br /> Appointments</p>
                    </div>
                </div>
            </div>

            <div className="desh-card bg-success col-2">
                <div className="desh-date d-flex justify-content-evenly align-items-ceneter">
                    <h2>{approve}</h2>
                    <div className="desh-text">
                        <strong>Approved <br /> Appointments</strong>
                    </div>
                </div>
            </div>

            <div className="desh-card bg-success col-2">
                <div className="desh-date d-flex justify-content-evenly align-items-ceneter">
                    <h2>{visit}</h2>
                    <div className="desh-text">
                        <strong>Visited <br /> Appointments</strong>
                    </div>
                </div>
            </div>

            <div className="desh-card bg-danger col-2">
                <div className="desh-date d-flex justify-content-evenly align-items-ceneter">
                    <h2>{notvisit}</h2>
                    <div className="desh-text">
                        <strong>Not Visited <br /> Appointments</strong>
                    </div>
                </div>
            </div>
            <div className="desh-card bg-danger col-2">
                <div className="desh-date d-flex justify-content-evenly align-items-ceneter">
                    <h2>{reject}</h2>
                    <div className="desh-text">
                        <strong>Rejected <br /> Appointments</strong>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeshActivity;