import React from 'react';
import FooterDetail from './FooterDetail';
import './Footer.css';

const Footer = () => {
    const noNamed = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
    ]
    const ourAddress = [
        { name: "Al-Mohammadi Dental Clinic", link: "https://goo.gl/maps/d7SiQN8mnQ266FQS6?coh=178573&entry=tt" },
        { name: "Akola,Maharashtra", link: "https://goo.gl/maps/E9ejxHHY1rdhLK549?coh=178573&entry=tt" },

    ]
    const oralHealth = [
        { name: "Gum Care", link: "/emergency" },
        { name: "Root Canel", link: "/checkup" },
        { name: "Fillings", link: "/personal-treatment" },
        { name: "Prevention Education", link: "/tooth-extract" },        
    ]
    const services = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Fast Treatment of Dental Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },        
    ]

    return (
        <footer className="footer-area clear-both sm-pe-5">
            <div className="container pt-5">
                <div className="row md-py-5 footer-content">
                    {/* <FooterDetail key={1} menuTitle={"."} menuItems={noNamed} /> */}
                    <FooterDetail key={2} menuTitle="Services" menuItems={services} />
                    <FooterDetail key={3} menuTitle="Oral Health" menuItems={oralHealth} />
                    <FooterDetail key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        
                    </FooterDetail>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;