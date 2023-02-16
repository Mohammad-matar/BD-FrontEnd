import React from 'react'
import logo from '../../images/broom.png'
import laptopcode from '../../images/laptop-code.png'
import sharealt from '../../images/share-alt.png'
import camera from '../../images/camera.png'
import CleanCode from '../../images/clone.png'
import maintenance from '../../images/maintenance.png'
import "./style.css"

export default function Service() {
    return (<>
        <h1 className='servicesTitle' id='services'> My Best Services</h1>
        <section className='services_container'>
            <div className='services_types'>
                <div className='Design'>
                    <div className='design_service_image'>
                        <img src={logo} alt="design" />
                    </div>
                    <p className='title_design'>Design</p>
                    <p className='text_design' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.  </p>
                </div>
            </div>

            <div className='services_types'>
                <div className='Design'>
                    <div className='design_service_image'>
                        <img src={laptopcode} alt="design" />
                    </div>
                    <p className='title_design'>Web Development</p>
                    <p className='text_design' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.  </p>
                </div>
            </div>
            <div className='services_types'>
                <div className='Design'>
                    <div className='design_service_image'>
                        <img src={sharealt} alt="design" />
                    </div>
                    <p className='title_design'>UX/UI</p>
                    <p className='text_design' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.  </p>
                </div>
            </div>
            <div className='services_types'>
                <div className='Design'>
                    <div className='design_service_image'>
                        <img src={camera} alt="design" />
                    </div>
                    <p className='title_design'>Testing</p>
                    <p className='text_design' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.  </p>
                </div>
            </div>
            <div className='services_types'>
                <div className='Design'>
                    <div className='design_service_image'>
                        <img src={CleanCode} alt="design" />
                    </div>
                    <p className='title_design'>Clean Code</p>
                    <p className='text_design' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.  </p>
                </div>
            </div>
            <div className='services_types'>
                <div className='Design'>
                    <div className='design_service_image'>
                        <img src={maintenance} alt="design" />
                    </div>
                    <p className='title_design'>Maintenance</p>
                    <p className='text_design' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.  </p>
                </div>
            </div>

        </section>
    </>

    )
}
