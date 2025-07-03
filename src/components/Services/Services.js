import React,{useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { servicesData } from '../../data/servicesData';

import './Services.css'
import SingleService from './SingleService/SingleService';

function Services() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {servicesData.length > 0 && (
                <div className="services" id="services" style={{backgroundColor:theme.secondary}}>
                    <div className="services-header">
                        <h1 style={{color: theme.primary}}>Layanan</h1>
                    </div>
                    <div className="services-body">
                        <p style={{color:theme.tertiary80}}>
                            Berikut adalah layanan yang saya tawarkan. Saya memiliki keahlian dalam berbagai bidang, termasuk pengembangan web, dan pengembangan aplikasi. Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi saya.
                        </p>
                        <div className="services-bodycontainer">
                            {servicesData.map(services => (
                                <SingleService
                                key={services.id}
                                id={services.id}
                                title={services.title}
                                icon={services.icon}/>
                            ))}
                        </div>
                    </div>
                </div>
            )}
       </>
    )
}

export default Services
