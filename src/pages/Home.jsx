import React from 'react'
import Navbar from '../components/Navbar'
import Anouncement from '../components/Anouncement';
import Slider from '../components/Slider';
const Home = () => {
  return (
    <>
        <Anouncement />
        <Navbar />
        <Slider />
    </>
  )
}

export default Home