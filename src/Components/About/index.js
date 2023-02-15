import React from 'react'
import mypic from '../../images/placeholderimage.png'
import pointer from '../../images/pointer.png'
import "./style.css"

export default function About() {
    return (
        <section className='about_Section' id='about'>
            <div className='about_Container'>
                <div className='about_images'>
                    <img src={pointer} alt="pointerImage" className='about_top_pointer_img' />
                    <img src={pointer} alt="pointerImage" className='about_bot_pointer_img' />
                    <img src={mypic} alt="mypic" className='aboutImage' />
                </div>
                <div className='aboutMe_container'>
                    <div className='about_description'>
                        <h1>Bit about me</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
