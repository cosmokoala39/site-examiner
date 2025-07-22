'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/union-leaders-exit-dnc-democratic-party-tensions.webp'

function Carousel() {
  return (
    <div className="container my-4">
        
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* First slide */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-4">
                <Image src={logo} alt="Image 1" className="d-block w-100 h-100" />
              </div>
              <div className="col-lg-4">
                <Image src={logo} alt="Image 2" className="d-block w-100 h-100" />
              </div>
              <div className="col-lg-4">
                <Image src={logo} alt="Image 3" className="d-block w-100 h-100" />
              </div>
            </div>
          </div>

          {/* Second slide (uses same image as placeholder) */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-4">
                <Image src={logo} alt="Image 4" className="d-block w-100" />
              </div>
              <div className="col-lg-4">
                <Image src={logo} alt="Image 5" className="d-block w-100" />
              </div>
              <div className="col-lg-4">
                <Image src={logo} alt="Image 6" className="d-block w-100" />
              </div>
            </div>
          </div>

          {/* Third slide */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-4">
                <Image src={logo} alt="Image 7" className="d-block w-100" />
              </div>
              <div className="col-lg-4">
                <Image src={logo} alt="Image 8" className="d-block w-100" />
              </div>
              <div className="col-lg-4">
                <Image src={logo} alt="Image 9" className="d-block w-100" />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
