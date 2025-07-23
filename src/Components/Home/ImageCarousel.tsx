"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

type RawItem = {
  image: string;
  title: string;
  slug: string;
  category?: string;
};

type CarouselItem = {
  id: number;
  image: string;
  title: string;
  tag: string;
  time: string;
  slug: string;
};

type Props = {
  data: RawItem[];
  title?: string;
  viewAllLink?: string;
};

const ImageCarousel: React.FC<Props> = ({ data, title = "Business", viewAllLink }) => {
  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(`carousel-${title}`);
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const items: CarouselItem[] = data.map((item, i) => ({
    id: i,
    image: item.image,
    title: item.title,
    slug: item.slug,
    tag: item.category || "general",
    time: "Jul 23, 2025",
  }));

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
              href={`/${item.tag}/${item.slug}`}
              key={item.id}
              className="text-decoration-none text-dark"
              style={{
                flex: "0 0 auto",
                width: "180px",
              }}
            >
              <div
                className="card border-0 rounded-4 shadow-sm overflow-hidden"
                style={{ height: "300px", position: "relative" }}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />

                {/* Play Icon */}
                <div
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{ color: "white", fontSize: "2.5rem", opacity: 0.9 }}
                >
                  <i className="bi bi-play-circle-fill"></i>
                </div>

                {/* Text Overlay */}
                <div
                  className="position-absolute bottom-0 start-0 w-100 p-2"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    color: "white",
                  }}
                >
                  <div
                    className="fw-bold"
                    style={{ fontSize: "0.9rem", lineHeight: "1.2em" }}
                  >
                    {item.title}
                  </div>
                  <small className="text-light">{item.time}</small>
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
