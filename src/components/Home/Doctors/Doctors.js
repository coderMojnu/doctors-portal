import React from 'react';
import doctor from '../../../images/doctor.png';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const doctorsData = [
        {
            name: 'Dr. Ataul Goni',
            img: doctor,
            phone: +8801788262433
        },
        {
            name: 'Dr. Ramjan Ali',
            img: doctor,
            phone: +8801788262433
        },
        {
            name: 'Dr. Rabindro Bormon',
            img: doctor,
            phone: +8801788262433
        }
    ]
    return (
        <div className="container mt-5 text-center">
            <h5 className="blue-text mt-5 mb-5">OUR DOCTORS</h5>
            <div className="row">
                {
                    doctorsData.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;