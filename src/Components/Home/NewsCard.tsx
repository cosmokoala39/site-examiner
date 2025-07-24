"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import logo from "../../../public/images/examiner-head.svg";

type RawItem = {
  image: string;
  title: string;
  slug: string;
  category?: string;
  shortdescription?: string;
};

type Props = {
  data?: RawItem[] | RawItem;
};

const NewsCardGrid: React.FC<Props> = ({ data }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = Array.isArray(data)
    ? data
    : typeof data === "object" && data !== null
    ? [data]
    : [];

  if (items.length === 0) {
    console.warn("NewsCardGrid: No valid data provided", data);
    return null;
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newScroll =
        direction === "right"
          ? scrollLeft + clientWidth
          : scrollLeft - clientWidth;
      scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-5 position-relative">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center w-100">
          <h6 className="fw-bold mb-0 me-2" style={{ fontSize: "1rem" }}>
            Newsletters &amp; Alerts
          </h6>
          <div className="flex-grow-1 border-top border-3 border-dark"></div>
        </div>
      </div>

      {/* Scroll Left Button */}
      <button
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-1"
        onClick={() => scroll("left")}
        aria-label="Scroll Left"
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="d-flex flex-nowrap overflow-auto gap-3 pb-2"
        style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: "280px", maxWidth: "90vw" }}
          >
            <Link
              href={`/${item.category || "general"}/${item.slug}`}
              className="text-decoration-none text-dark"
            >
              <Card className="h-100 border rounded-4 shadow-sm p-2">
                {/* Image */}
                <div
                  className="position-relative mb-2 rounded-2 overflow-hidden"
                  style={{ height: "130px" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Optional logo */}
                <div className="d-flex justify-content-end mb-1">
                  <Image src={logo} alt="Examiner" width={75} height={18} />
                </div>

                {/* Tag */}
                <p
                  className="text-uppercase text-muted mb-1"
                  style={{ fontSize: "0.65rem", fontWeight: 600 }}
                >
                  Daily
                </p>

                {/* Title */}
                <h6
                  className="fw-bold mb-2"
                  style={{
                    fontFamily: "Merriweather, serif",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.title.length > 30
                    ? item.title.substring(0, 30) + "…"
                    : item.title}
                </h6>

                {/* Description */}
                <p
                  className="text-muted mb-2"
                  style={{ fontSize: "0.8rem", lineHeight: "1.25" }}
                >
                  {item.shortdescription?.substring(0, 90)}...
                </p>

                {/* CTA Button */}
                <div className="d-flex justify-content-start">
                  <Button
                    variant="light"
                    size="sm"
                    className="border rounded-pill d-flex align-items-center gap-1 px-2 py-1"
                    style={{ fontSize: "0.75rem" }}
                  >
                    <BsPlus size={14} /> Sign Up
                  </Button>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>

      {/* Scroll Right Button */}
      <button
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-1"
        onClick={() => scroll("right")}
        aria-label="Scroll Right"
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
};

export default NewsCardGrid;
