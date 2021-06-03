import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const businessInformation = [
        {
            title: 'Opening Hours',
            description: 'we are open 7 days',
            icon: faClock,
            background: '#1CC7C1'
        },
        {
            title: 'Visit Our Location',
            description: 'Pabna, Bangladesh',
            icon: faMapMarker,
            background: '#3A4256'
        },
        {
            title: 'Call Us Now',
            description: '+8801788262433',
            icon: faPhoneVolume,
            background: '#1CC7C1'
        }
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    businessInformation.map(information => <InfoCard information={information}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;