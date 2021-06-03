import React from 'react';
import featured from '../../../images/featured.png';

const Featured = () => {
    return (
        <div className="container mt-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-5">
                    <img src={featured} alt="" style={{height: '400px'}}/>
                </div>
                <div className="col-md-7">
                    <h2>Exceptional Dental Care,<br/>On Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page </p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;