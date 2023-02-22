import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../Loading';

import "./style.css"

export default function Skills() {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getall();
    }, []);

    const getall = () => {
        axios
            .get("https://badawi-api.onrender.com/skill")
            .then((res) => {
                setData(res.data.data);
                console.log(res.data.data)
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    };
   

    
    return (
        <section id='skills' className='SkillsSection'>
            <div className='skills_container'>
                <div className='skills_overlay'></div>
                <div className='show_skills'>
                    <div className='servicesTitle'>
                        <span>
                            Skills

                        </span>
                    </div>
                    <div className='skills_list'>
                        {isLoading ? <Loading /> : data.map((skill) => {
                            return (
                                <div className='skill_item'>
                                    <div className='skill__image'>
                                        <img src={skill.icon} alt='title_image' />
                                    </div>
                                    <p> {skill.title}</p>
                                    
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
