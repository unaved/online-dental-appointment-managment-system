import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import teath from '../../../images/teath.png';
import ServiceDetail from '../../../components/Home/ServiceDetail/ServiceDetail';
import './Services.css';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: flouride,
        desc:'Fluoride is a natural mineral that builds strong teeth and prevents cavities.'
    },
    {
        name: 'Cavity Filling',
        img: cavity,
        desc:'Cavity filling can prevent further damage, reduce the risks of pain and infection.'
    },
    {
        name: 'Teeth Whitening',
        img: teath,
        desc:'Tooth whitening or tooth bleaching is the process of lightening the color of teeth.'
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5" id="serviceContaint">
            <div className="text-center">
                <h5 className="brand-color">OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="w-75 row">
                    {
                        serviceData.map(service =><ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;