import React from 'react';

const AboutDetail = (props) => {
    const { title, description, author, authorImg, date } = props.about
    return (
        <div className=" about-cards col-md-4 col-sm-6 col-12">
            <div className="cards shadow-lg">
                <div className="cards-header d-flex align-itmes-center ">
                    <img src={authorImg} width="50px" alt="" />
                    <div>
                        <h6 className="text-primary">{author}</h6>
                        <p className="m-0">{date}</p>
                    </div>
                </div>
                <div className="cards-body">
                    <h5>{title}</h5>
                    <p className="cards-text text-secondary mt-4">{description}</p>
                    {/* <a href="!#">Read More</a> */}
                </div>
            </div>
        </div>
    );
};

export default AboutDetail;