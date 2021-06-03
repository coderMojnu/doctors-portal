import React from 'react';
import './Contact.css'
const Contact = () => {
    const sendEmail = () => {

    }
    return (
        <div className="contact-container" >
            <div className="container p-5">
                <div className="text-center text-white">
                    <h5>CONTACT US</h5>
                    <h2>Always Contact With Us</h2>
                </div>
                <form onSubmit={sendEmail}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name <span>*</span></label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Sakib Khan" required />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">Email <span>*</span></label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message <span>*</span></label>
                    <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            </div>
        </div>
    );
};

export default Contact;