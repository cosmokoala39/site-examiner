'use client';

import React from "react";
import Image from "next/image";

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
  const { articles } = data;

  if (!articles || articles.length === 0) return null; // Handle empty array

  const main = articles[0];

  return (
    <div className="p-3">
      <div className="row">
        {/* Left Section: Text */}
        <div className="col-lg-5">
          <p className="fw-bold text-muted fs-3">{main.title}</p>
          <p className="text-muted">
            {main.shortdescription?.slice(0, 100)}
          </p>
          <p className="text-muted">2 hrs ago</p>
        </div>

        {/* Right Section: Image */}
        <div className="col-lg-7">
          <div
            className="position-relative"
            style={{ width: "100%", height: "280px" }}
          >
            <Image
              src={main.image}
              alt={main.title}
              fill
              className="rounded"
              style={{ objectFit: "cover" }}
            />
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
