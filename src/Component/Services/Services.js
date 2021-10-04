import React, { useEffect, useState, useContext } from 'react';
import ServicesCardPage from '../ServiceCard/ServicesCardPage';
import { showContext } from '../../App'
const Services = () => {
    const [servicesCard, setServicesCard] = useState([])
    const context = useContext(showContext)
    useEffect(() => {
        fetch('./serviceS.JSON')
            .then(res => res.json())
            .then(data => setServicesCard(data))
    }, [])
    return (
        <div className='container m-5'>
            {context}


            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    servicesCard.map(serviceCard => <ServicesCardPage
                        key={serviceCard.id}
                        serviceCard={serviceCard}
                    ></ServicesCardPage>)
                }
            </div>
        </div>
    );
};

export default Services;