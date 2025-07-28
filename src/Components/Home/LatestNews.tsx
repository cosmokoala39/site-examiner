"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ArticleProps {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  category?: string;
  date: string;
}

const LatestNews: React.FC<ArticleProps> = ({
  image,
  title,
  slug,
  category = "business",
  date,
}) => {
  return (
    <div className="row py-3 border-bottom">
      <Link
        href={`/${category}/${slug}`}
        className="text-decoration-none text-dark d-flex w-100 align-items-center"
      >
        <div className="col-lg-8">
          <p
            className="fw-bold mb-1"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {title}
          </p>
          <p
            className="text-muted small mb-0"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {date}
          </p>
        </div>
        <div className="col-lg-4 d-flex justify-content-end">
          <div
            className="position-relative"
            style={{ width: "100px", height: "80px" }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="rounded"
              style={{ objectFit: "cover" }}
              sizes="100px"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LatestNews;
