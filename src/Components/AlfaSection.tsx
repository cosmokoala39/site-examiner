"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Article = {
  title: string;
  image: string;
  slug?: string;
};

type Props = {
  data: Article[];
};

const AFLScrollable: React.FC<Props> = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("afl-scroll");
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container py-4 pt-5 position-relative">
      {/* Social Icons */}
      <div className="d-flex gap-3 pb-3 border-bottom border-top pt-3">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-twitter-x"></i>
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-envelope"></i>
        <i className="bi bi-link-45deg"></i>
      </div>

      {/* Section Titles */}
      <div className="d-flex justify-content-between align-items-center mb-3 pt-5">
        <div className="d-flex align-items-center w-100">
          <h6 className="fw-bold mb-0 me-2" style={{ fontSize: "1rem" }}>
            Most Viewed
          </h6>
          <div className="flex-grow-1 border-top border-3 border-dark"></div>
        </div>
      </div>

      <h6 className="mt-4 mb-3 fw-bold pt-5">More from AFL</h6>

      {/* Scrollable Cards Row */}
      <div
        id="afl-scroll"
        className="d-flex flex-nowrap overflow-auto gap-3 pb-4 hide-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: "250px", maxWidth: "90vw" }}
          >
            <div className="card border-0 h-100">
              <div
                className="position-relative rounded-top overflow-hidden"
                style={{ height: "160px" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-fit-cover"
                />
              </div>
              <div className="card-body p-2">
                <p className="card-text small fw-medium">
                  {item.title.length > 60
                    ? item.title.substring(0, 60) + "…"
                    : item.title}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Arrow Button at the End */}
        <Link href="/afl" className="text-decoration-none">
          <div
            className="flex-shrink-0 d-flex align-items-center justify-content-center border rounded bg-light"
            style={{
              width: "80px",
              minWidth: "80px",
              height: "160px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            →
          </div>
        </Link>
      </div>

      {/* Scroll Arrows Positioned at Bottom Center */}
      <div
        className="position-absolute start-50 translate-middle-x d-flex gap-3"
        style={{ bottom: "0", zIndex: 10 }}
      >
        <button
          className="btn btn-light d-flex align-items-center justify-content-center"
          onClick={() => scroll("left")}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          <i className="bi bi-chevron-left fs-5"></i>
        </button>
        <button
          className="btn btn-light d-flex align-items-center justify-content-center"
          onClick={() => scroll("right")}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          <i className="bi bi-chevron-right fs-5"></i>
        </button>
      </div>
    </div>
  );
};

export default AFLScrollable;
