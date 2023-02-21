import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Loading from '../Loading'
import "./style.css"

export default function PersonalInfo() {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getall();
        setIsLoading(false);
    }, []);

    const getall = async () => {
        await axios
            .get("http://localhost:5000/personalinfo")
            .then((res) => {
                setData(res.data.data[0]);
                // console.log(res.data.data)
            })
            .catch((err) => {
                console.error(err);
            });
    };
    if (isLoading) {
        return (
            <div>
                <Loading />
            </div>
        );
    } else {
        return (
            <section className='personalInfo_section' id='home'>
                <div className='personal_Container'>
                    <div className='personalInfo_part1'>
                        <div className='personalInfo_title'>
                            {data.title}
                        </div>
                        <div className='personalInfo_description'>
                            {data.description}
                        </div>
                    </div>


                    <div className='personalInfo_part2'>
                        <div className='personalInfo_pic'>
                            <img src={data.image} alt="badawipic" />
                        </div>
                        <div className='personalInfo_name'>
                            BADAWI
                        </div>
                    </div>

                </div>
            </section>
        )
    }

}
