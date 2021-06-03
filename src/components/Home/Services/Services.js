import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import tooth from '../../../images/tooth.png'
import Service from '../Service/Service';

const Services = () => {
    const serviceInfo = [
        {
            name: 'Fluoride Treatment',
            img: fluoride,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam facere Velit officiis porro impedit libero exercitationem atque eligendi corporis'
        },
        {
            name: 'Cavity Feeling',
            img: cavity,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, quisquam facere? Velit officiis porro impedit libero exercitationem atque eligendi corporis.'
        },
        {
            name: 'Teeth Whitening',
            img: tooth,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, quisquam facere? Velit officiis porro impedit libero exercitationem atque eligendi corporis.'
        }
    ]
    return (
        <section>
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Service We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        serviceInfo.map(service => <Service service={service}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;