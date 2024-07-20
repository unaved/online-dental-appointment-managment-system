import React from 'react';
// import baby from '../../../images/baby.png';
import baby from '../../../images/doc/doctor chair 2.jpg';


const FeaturedService = () => {
    return (
        <div className="feature-service pb-0 pb-md-5 pt-md-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-5 col-sm-6 col-12">
                        <img src={baby} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-7 col-sm-6 col-12 align-self-center">
                        <h1>Exceptional Dental Care, on your Term</h1>
                        <p className=" my-5">Dentists recommend that patients get regular dental checkups 
                        at least twice a year to monitor their oral health and catch any problems early on.
                        During a dental checkup, a dental hygienist will clean your teeth, removing any built-up plaque 
                        and tartar. If you have a cavity, your dentist can fill it with a dental filling to restore the tooth's 
                        function and prevent further decay.If you have an infected tooth, your dentist may perform a root canal 
                        to remove the infected tissue and save the tooth.These are just some of the many services provided by our 
                        dentists to help maintain and improve oral health. It is important to schedule regular dental checkups to 
                        ensure that your teeth and gums are healthy.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;