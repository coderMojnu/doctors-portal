import React from 'react';
import doctor1 from '../../../images/doctor1.png';
import doctor2 from '../../../images/doctor2.png';
import doctor3 from '../../../images/doctor3.png';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const feedbacks = [
        {
            name: 'Milon Miah',
            speech: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
            location: 'Dinajpur',
            img: doctor1
        },
        {
            name: 'Most. Koma',
            speech: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
            location: 'Kurigram',
            img: doctor2
        },
        {
            name: 'Marufa Mou',
            speech: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
            location: 'Pabna',
            img: doctor3
        }
    ]
    return (
        <div className="container mt-5">
            <div className="p-3">
                <h5 className="blue-text">TESTIMONIAL</h5>
                <h2>What's Our Patient<br />Says</h2>
            </div>
            <div className="row mt-5">
                {
                    feedbacks.map(feedback => <Testimonial feedback={feedback}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;