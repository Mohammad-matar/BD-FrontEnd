import axios from 'axios'
import React, { useEffect, useState } from 'react'
import pointer from '../../images/pointer.png'
import Loading from '../Loading'
import "./style.css"

export default function About() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getall()
        setIsLoading(false)
    }, [])
    const getall = async () => {
        await axios
            .get("https://badawi-api.onrender.com/about")
            .then((res) => {
                setData(res.data.data[0])
                // console.log(res.data.data)
            })
            .catch((err) => {
                console.error(err);
            })
    }
    if (isLoading) {
        return (
            <div>
                <Loading />
            </div>
        )
    } else {
        return (
            <section className='about_Section' id='about'>
                <div className='about_Container'>
                    <div className='about_images'>
                        <img src={pointer} alt="pointerImage" className='about_top_pointer_img' />
                        <img src={pointer} alt="pointerImage" className='about_bot_pointer_img' />
                        <img src={data.image} alt="mypic" className='aboutImage' />
                    </div>
                    <div className='aboutMe_container'>
                        <div className='about_description'>
                            <h1>Bit about me</h1>
                            <p>{data.description}</p>
                        </div>
                        <a href={data.cv} target="_blank" rel="noreferrer">
                            <button className='about_CV_btn'>
                                Preview CV
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}
