import React, { useEffect, useState } from 'react'


import axios from 'axios'
import "./style.css"
import Loading from '../Loading';

export default function Service() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAll();
    }, [])
    const getAll = async () => {
        await axios
            .get("http://localhost:5000/services")
            .then((res) => {
                setData(res.data.data)
                // console.log(res.data.data)
                setIsLoading(false)

            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (<>
        <h1 className='servicesTitle' id='services'> My Best Services</h1>
        <section className='services_container'>
            {isLoading ? <div><Loading /></div> : data.map((service) => {
                return (
                    <div className='services_types'>
                        <div className='Design'>
                            <div className='design_service_image'>
                                <img src={service.icon} alt="design" />
                            </div>
                            <p className='title_design'>{service.title}</p>
                            <p className='text_design' >{service.description}  </p>
                        </div>
                    </div>
                )
            })}

        </section>
    </>

    )
}
