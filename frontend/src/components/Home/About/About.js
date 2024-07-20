import React from "react";

import Abouts from "./AboutDetail";
import './About.css';
import DoctorDetail from "../Doctor/DoctorDetail";
import Doctor from "../Doctor/Doctor";



const About = () => {
    return (
        <section className="about my-5" id="AboutContaint">
        {/* //     <div className="container">
        //         <div className="section-header text-center">
        //             <h5 className="brand-color text-uppercase">About Us</h5>
        //             <h1>From Our Blog News</h1>
        //         </div>
        //         <div className="card-deck">
        //             <div className="mt-5 d-flex justify-content-center">
        //                 <div className="row w-80">
        //                     { */}
        {/* //                         AboutData.map(about => <Abouts key={about.title} about={about}></Abouts>)
        //                     }
        //                 </div> */}
        {/* //             </div> */}
        {/* //         </div> */}
                {/* // <AppointMent></AppointMent> */}

            {/* // </div> */}
            <Doctor></Doctor>
            
        </section>
       
    );
};

export default About;