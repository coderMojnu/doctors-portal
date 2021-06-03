import React from 'react';

const Testimonial = (props) => {
    const { speech, img, name, location } = props.feedback;
    return (
        <div className="col-md-4">
            <div className="card p-3">
                <p>{speech}</p>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="p-3">
                        <img src={img} alt="" />
                    </div>
                    <div className="p-3">
                        <h6>{name}</h6>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;