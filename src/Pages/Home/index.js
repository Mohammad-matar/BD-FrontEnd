import React from 'react'
import About from '../../Components/About'
import Experience from '../../Components/Experience'
import NavBar from "../../Components/NavBar"
import PersonalInfo from '../../Components/PersonalInfo'
import Service from '../../Components/Services'
import Projects from '../../Components/Projects'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import Skills from '../../Components/Skills'

export default function Home() {
  return (
    <>
      <NavBar />
      <PersonalInfo />
      <About />
      <Service />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
