import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import BusinessInfo from '../Businessinfo/BusinessInfo';

const Home = () => {
    return (
        <div>
            <BusinessInfo></BusinessInfo>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Appointment></Appointment>
            {/* <Testimonial></Testimonial> */}
            {/* <Blog></Blog> */}
            <Doctor></Doctor>
            <Blog></Blog>
            {/* <Contact></Contact> */}
            
        </div>
    );
};

export default Home;