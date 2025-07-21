"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  category?: string;
}

function Featured({
  image,
  title,
  slug,
  shortdescription,
  category,
}: ArticleProps) {
  return (
    <div className="p-3 ">
      <div className="row">
        {/* ------------------------------Left Section-------------------Text */}
        <div className="col-lg-5 d-flex flex-column justify-content-between">

          {/* ----------- breacking----------------- */}
          <p >breaking</p>
          {/* -----------------title----------------- */}
          <p
            className="fw-bold fs-3 text-muted"
            style={{
              fontFamily:
                ' Cambria, "Times New Roman", Times, serif',
              letterSpacing: "-0.5px",
              lineHeight: "1.2",
              cursor: "pointer",
            }}
          >
            {title}
          </p>

{/* -----------------short description----------------- */} 
          <p
            className="text-muted"
            style={{
              fontFamily:
                'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              letterSpacing: "-0.3px",
              lineHeight: "1.4",
            }}
          >
            {shortdescription ? shortdescription.slice(0, 100) + "..." : ""}
          </p>

          {/* --------------------time---------------- */}
          <p className="text-muted small mt-0 fw-semibold"> Author . 2 hrs ago</p>
        </div>

        {/* ---------------------Right Section-----------------------------Image */}
        <div className="col-lg-7">
          <Link href={`/${category || "business"}/${slug}`}>
            <div
              className="position-relative"
              style={{ width: "100%", height: "250px", cursor: "pointer" }}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="rounded"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4" style={{ borderColor: "grey" }} />
    </div>
  );
}

export default Featured;
