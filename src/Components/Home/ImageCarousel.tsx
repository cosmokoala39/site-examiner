"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

type CarouselItem = {
  id: number;
  image: string;
  title: string;
  tag: string;
  time: string;
  slug: string;
};

type Props = {
  title: string;
  items: CarouselItem[];
  viewAllLink?: string;
};

const ImageCarousel: React.FC<Props> = ({ title, items, viewAllLink }) => {
  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(`carousel-${title}`);
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3 px-2">
        <h5 className="m-0">{title}</h5>
        {viewAllLink && (
          <Link href={viewAllLink} className="text-decoration-none small">
            View all <i className="bi bi-chevron-right"></i>
          </Link>
        )}
      </div>

      {/* Carousel */}
      <div className="position-relative">
        {/* Left Arrow */}
        <button
          className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-1 d-none d-md-block"
          onClick={() => scroll("left")}
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        {/* Cards */}
        <div
          id={`carousel-${title}`}
          className="d-flex overflow-auto gap-3 hide-scrollbar px-2"
        >
          {items.map((item) => (
            <Link
              href={`/${item.slug}`}
              key={item.id}
              className="text-decoration-none text-dark carousel-item-custom"
              style={{
                flex: "0 0 50%",        // Desktop default
                maxWidth: "20%",
                minWidth: "140px",     // Mobile fallback
              }}
            >
              <div className="card border-0 h-100">
                {/* Image */}
                <div
                  className="position-relative"
                  style={{
                    height: "360px",
                    borderRadius: "0.6rem",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-100 h-100 img-fluid"
                    style={{ objectFit: "cover" }}
                  />
                  {/* Play Button */}
                  <div
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{ color: "white", fontSize: "2rem" }}
                  >
                    <i className="bi bi-play-circle-fill"></i>
                  </div>
                </div>

                {/* Info */}
                <div className="card-body px-0 pt-2 pb-0">
                  <h6 className="mb-1" style={{ fontSize: "0.8rem" }}>
                    {item.title}
                  </h6>
                  <small className="text-muted">{item.time}</small>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-1 d-none d-md-block"
          onClick={() => scroll("right")}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
