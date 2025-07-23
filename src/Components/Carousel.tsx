'use client';

import React from 'react';
import Image from 'next/image';

interface NewsItem {
  image: string;
  title: string;
  slug: string;
}

interface Props {
  data: NewsItem[];
}

function Carousel({ data }: Props) {
  // Chunk the data into groups of 3 for each slide
  const groupedSlides = [];
  for (let i = 0; i < data.length; i += 3) {
    groupedSlides.push(data.slice(i, i + 3));
  }

  return (
    <div className="container my-4">
      <h6 className="fw-bold mb-2">More from this Category</h6>
      <hr className="my-2" />
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {groupedSlides.map((group, slideIndex) => (
            <div
              key={slideIndex}
              className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}
            >
              <div className="row">
                {group.map((item, i) => (
                  <div className="col-12 col-md-4 mb-3" key={i}>
                    <div className="card border-0 h-100">
                      <div className="ratio ratio-16x9">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="card-body px-0">
                        <p className="card-title fw-semibold small mb-0">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show controls only if more than 3 */}
        {data.length > 3 && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Carousel;
