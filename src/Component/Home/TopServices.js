import React, { useEffect, useState } from 'react';
import ServiceCardHome from '../ServiceCard/ServiceCardHome';
import './TopService.css'

const TopServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./serviceh.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div >
            <h1 className='m-3'>Our <span className='service-title'>Top Rated Services</span>.Students joing from <span className='service-title'>Around The Globe </span></h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    services.map(service => <ServiceCardHome
                        key={service.id}
                        service={service}
                    ></ServiceCardHome>)
                }
            </div>
        </div>
    );
};

export default TopServices;