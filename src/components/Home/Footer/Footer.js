import React from 'react';
import { faFacebook, faGoogle, faPhoneVolume, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container p-5 footer-bg">
            <div className="row">
                <div className="col-md-3">
                    <ul className="mt-5">
                        <li>Emergency Dental Care</li>
                        <li>Treatment of Personal Diseases</li>
                        <li>Tooth Education</li>
                        <li>Check Up</li>
                        <li>List</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="highlight-color">Services</h3>
                    <ul>
                        <li>list</li>
                        <li>list</li>
                        <li>list</li>
                        <li>list</li>
                        <li>list</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="highlight-color">Oral Health</h3>
                    <ul>
                        <li>list</li>
                        <li>list</li>
                        <li>list</li>
                        <li>list</li>
                        <li>list</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="highlight-color">Our Address</h3>
                    <p>Pabna Sadar, Pabna</p>
                    <FontAwesomeIcon icon={faFacebook} className="me-2"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faGoogle} className="me-2"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter} className="me-2"></FontAwesomeIcon>
                    <h4 className="mt-5">Call now</h4>
                    <button className="btn btn-primary">
                        <a href="tel:+8801788262433" className="text-white text-decoration-none">01788262433</a>
                    </button>
                </div>
            </div>
            <div className="row mt-3">
                <p className="text-center">Copyright {(new Date()).getFullYear()} All Right Reserved</p>
                <hr />
            </div>
        </div>
    );
};

export default Footer;