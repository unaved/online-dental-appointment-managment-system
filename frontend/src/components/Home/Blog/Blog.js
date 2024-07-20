import React from 'react';
import ema from '../../../images/doc-4.jpg';
import john from '../../../images/doc-4.jpg';
import watson from '../../../images/doc-4.jpg';
import BlogDetail from './BlogDetail';
import './Blog.css';
import AppointMent from '../Appointment/Appointment.js';


const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Regular dental checkups are also important to catch any problems early on. During these checkups, your dentist will examine your teeth and gums and perform a cleaning to remove any built-up plaque.Ignoring dental problems can lead to more serious issues down the road.',
        author: 'Dr.Abdul Qahar',
        authorImg: ema,
        date: '10 January 2023'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'First and foremost, it is important to brush your teeth at least twice a day with fluoride toothpaste. This helps to remove plaque and prevent cavities. Flossing once a day is also important to remove plaque and food particles from between your teeth.',
        author: 'Dr.Junaid',
        authorImg: watson,
        date: '21 June 2022'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'If you are a smoker, it is important to quit smoking as it can increase your risk of gum disease and oral cancer.I am here to provide you with information and tips to keep your teeth and gums healthy. Dental health is an important part of overall health, and I believe that prevention is key.',
        author: 'Dr. Akhtar',
        authorImg: john,
        date: '23 December 2021'
    },
    {
        title: 'Limit your intake of sugary and acidic foods.',
        description: 'Sugary and acidic foods can cause tooth decay and erode your tooth enamel. Limit your intake of sugary and acidic foods and drinks, and brush your teeth or rinse your mouth with water after consuming them.Brush your teeth at least twice a day with fluoride toothpaste. ',
        author: 'Dr. Asefa Qahar',
        authorImg: john,
        date: '05 April 2021'
    },
    {
        title: 'Floss daily and Use mouthwash',
        description: 'Flossing helps to remove food particles and plaque from between your teeth and along the gum line. Use about 18 inches of floss and gently slide it between your teeth, making sure to curve it around the base of each tooth.Mouthwash helps to kill bacteria in your mouth and freshen your breath.',
        author: 'Dr. Rumaisa Anam',
        authorImg: john,
        date: '20 March 2020'
    },
    {
        title: 'Eat a healthy diet and Drink plenty of water',
        description: 'Eat a diet that is rich in fruits, vegetables, lean proteins, and whole grains. Avoid sugary and acidic foods, which can erode tooth enamel.Drinking water helps to flush away food particles and bacteria from your mouth and keep you hydrated.',
        author: 'Dr. Sayed',
        authorImg: john,
        date: '15 July 2020'
    }
]



const Blog = () => {
    return (
        <section className="blogs my-5" id="BlogContaint">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="brand-color text-uppercase">Our Blogs</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck">
                    <div className="mt-5 d-flex justify-content-center">
                        <div className="row w-80">
                            {
                                blogData.map(blog => <BlogDetail key={blog.title} blog={blog}></BlogDetail>)
                            }
                        </div>
                    </div>
                </div>
                <AppointMent></AppointMent>

            </div>
            
        </section>
       
    );
};

export default Blog;