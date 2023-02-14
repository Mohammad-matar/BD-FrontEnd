import React from 'react'
import mypic from '../../images/mypic.jpg'
import "./style.css"

export default function PersonalInfo() {
    return (
        <section className='personalInfo_section' id='home'>
            <div className='personal_Container'>
                <div className='personalInfo_part1'>
                    <div className='personalInfo_title'>
                        Full<br />
                        stack web
                        Developer
                    </div>
                    <div className='personalInfo_description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                    </div>
                </div>

                <div className='personalInfo_part2'>
                    <div className='personalInfo_pic'>
                        <img src={mypic} alt="badawipic" />
                    </div>
                    <div className='personalInfo_name'>
                        BADAWI
                    </div>
                </div>

            </div>
        </section>
    )
}
