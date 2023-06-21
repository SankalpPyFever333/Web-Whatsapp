import React, { useEffect } from 'react'
import './sidebarchats.css'
import { Avatar } from '@mui/material'
import AOS from 'aos'
function Sidebarchats() {
  useEffect(()=>{
    AOS.init({
      duration:700,
    })
  })
  return (
    <div data-aos="fade-up" className="sidebarChat_contact">
      <Avatar />
      <div data-aos="fade-up" className="nameMessage">
        <h3>Muski</h3>
        <p>I am not there</p>
      </div>
    </div>
  );
}

export default Sidebarchats
