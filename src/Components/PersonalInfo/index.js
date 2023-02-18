import axios from 'axios';
import React, { useEffect, useState } from 'react'
import mypic from '../../images/mypic.jpg'
import "./style.css"

export default function PersonalInfo() {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getall();
        // setIsLoading();
    }, []);

    const getall = () => {
        axios
            .get("http://localhost:5000/personalinfo")
            .then((res) => {
                setData(res.data.data);
                console.log(res.data.data)
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return (
        <section className='personalInfo_section' id='home'>
            <div className='personal_Container'>
                {isLoading ? <>is Loading</> : data.map((personal) => {
                    return (
                        <div className='personalInfo_part1'>
                            <div className='personalInfo_title'>
                                {personal.title}
                            </div>
                            <div className='personalInfo_description'>
                                {personal.description}        
                            </div>
                        </div>
                    )
                })}


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
