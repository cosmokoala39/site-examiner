import React from 'react'
import DesktopTopHeader from './DesktopTopHeader'
import Header from './Header'

function NavBar() {
      const currentDate = new Date().toLocaleDateString("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (

    <div className='fhht55 container'>
        <DesktopTopHeader currentDate={currentDate} />
        
    </div>
  )
}

export default NavBar
