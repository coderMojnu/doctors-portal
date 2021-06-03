import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Doctor = (props) => {
    const { img, name, phone } = props.doctor;
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={img} alt="" className="img-fluid" style={{ height: '300px' }} />
                <h5 className="mt-3 mb-2">{name}</h5>
                <div className="d-flex justify-content-center">
                    <FontAwesomeIcon icon = {faPhone}></FontAwesomeIcon>
                    <p>{phone}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;