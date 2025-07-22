'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/union-leaders-exit-dnc-democratic-party-tensions.webp'

function Carousel() {
  return (
    <div className="container my-4">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* First Slide */}
          <div className="carousel-item active">
            <div className="row">
              {[1, 2, 3].map((_, index) => (
                <div className="col-lg-4" key={`slide1-${index}`}>
                  <div className="card">
                    <Image
                      src={logo}
                      alt={`Image ${index + 1}`}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card Title {index + 1}</h5>
                      <p className="card-text">Some quick example text below the image.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <div className="row">
              {[4, 5, 6].map((_, index) => (
                <div className="col-lg-4" key={`slide2-${index}`}>
                  <div className="card">
                    <Image
                      src={logo}
                      alt={`Image ${index + 4}`}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card Title {index + 4}</h5>
                      <p className="card-text">Some quick example text below the image.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <div className="row">
              {[7, 8, 9].map((_, index) => (
                <div className="col-lg-4" key={`slide3-${index}`}>
                  <div className="card">
                    <Image
                      src={logo}
                      alt={`Image ${index + 7}`}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card Title {index + 7}</h5>
                      <p className="card-text">Some quick example text below the image.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
