import React from 'react';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import Doctors from './Doctors/Doctors';
import Featured from './Featured/Featured';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MakeAppointment from './MakeAppointment/MakeAppointment.js';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <div>
                <Header/>
                <Services/>
                <Featured/>
                <MakeAppointment/>
                <Testimonials/>
                <Blogs/>
                <Doctors/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;