import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCard.css';

const InfoCard = (props) => {
    const { title, description, icon, background } = props.information;
    return (
        <div className="col-md-4 text-white info-card">
            <div className="d-flex justify-content-center align-items-center info-container" style={{backgroundColor: `${background}`, height: '120px'}}>
                <div className="me-4">
                    <FontAwesomeIcon className="info-icon" icon={icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;