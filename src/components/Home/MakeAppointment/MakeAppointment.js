import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center appointment-container text-white">
                <div className="col-md-5">
                    <img src={doctor} alt="" className="img-fluid doctor-img"/>
                </div>
                <div className="col-md-7 appointment-content">
                    <h5 className="mb-3 blue-text">APPOINTMENT</h5>
                    <h2 className="mb-2">Make an appointment<br />Today</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable
content of a page when looking at its</p>
                    <button className="btn btn-primary mt-2">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;