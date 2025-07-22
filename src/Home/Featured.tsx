'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

export type Article = {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
};

export type CategoryData = {
  category: string;
  articles: Article[];
};

function Featured({ data }: { data: CategoryData }) {
  const { articles, category } = data;

  if (!articles || articles.length === 0) return null;

  const main = articles[0];
  console.log("main:", main);

  return (
    <div className="p-3">
      
        <div className="row">
          {/* Left Section: Text */}
          <div className="col-lg-5">
            <p className="fw-bold fs-3">{main.title}</p>
            <p
              className="text-muted"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              {main.shortdescription?.slice(0, 170)}
            </p>
            <p
              className="text-muted small"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              2 hrs ago
            </p>
          </div>

          {/* Right Section: Image */}
          <div className="col-lg-7">
            <div
              className="position-relative"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              {/* ✅ Image wrapped in div */}
              <Link href={`/${category || 'business'}/${main.slug}`}>
              <div style={{ position: "relative", width: "100%", height: "250px" }}>
                <Image
                  src={main.image}
                  alt={main.title}
                  fill
                  className="rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
              </Link>
            </div>
          </div>
        </div>
      

      {/* Divider */}
      <div
        className="divider mt-3 mb-3"
        style={{ borderBottom: "1px solid #ddd" }}
      ></div>
    </div>
  );
}

export default Featured;
