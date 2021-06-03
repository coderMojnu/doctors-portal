import React from 'react';

const Service = (props) => {
    const {name, img, description} = props.service;
    return (
        <div className="col-md-4 text-center mt-5">
            <div>
                <img src={img} alt="" style={{height: '50px'}}/>
                <h4 className="mt-4 mb-4">{name}</h4>
                <p className="text-secondary">{description}</p>
            </div>
        </div>
    );
};

export default Service;