import React from 'react'
import About from '../../Components/About'
import NavBar from "../../Components/NavBar"
import PersonalInfo from '../../Components/PersonalInfo'

export default function Home() {
  return (
    <>
      <NavBar />
      <PersonalInfo />
      <About />
    </>
  )
}
