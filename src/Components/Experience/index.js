import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../Loading';
import "./style.css"

export default function Experience() {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {
        await axios
            .get("https://badawi-api.onrender.com/experience")
            .then((res) => {
                setData(res.data.data)
                // console.log(res.data.data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <section className='experience_Section' id='experience'>
            <div className='experience_container'>
                <h1>Work</h1>
                {isLoading ? <div>
                    <Loading />
                </div> : data.map((experience) => {
                    return (
                        <div className='experience_Description'>
                            <div className='experience_projectname_date'>
                                <h1 className='experience_CompanyName'>
                                    {experience.title}
                                </h1>
                                <p>{experience.startDate}-{experience.endDate}</p>
                            </div>
                            <div className='experience_work_description'>
                                <p>{experience.description}</p>

                                <div className='experience_Skills_styling'>
                                    <p className='experiece_Skills_background'>HTML</p>
                                    <p className='experiece_Skills_background'>CSS</p>
                                    <p className='experiece_Skills_background'>JavaScript</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}
