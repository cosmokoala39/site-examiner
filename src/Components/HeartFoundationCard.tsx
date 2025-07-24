"use client";

import React from "react";
import Image from "next/image";

const HeartFoundationCard: React.FC = () => {
  return (
    <div className="card shadow-sm border-0 overflow-hidden text-center">
      {/* Single Image */}
      <Image
        src="/images/uber-waymo-robotaxi-launch-atlanta-autonomous.webp" // ✅ Update path as needed
        alt="Heart Foundation Walking"
        width={500}
        height={300}
        className="w-100"
        style={{ objectFit: "cover", height: "300px" }}
      />

      {/* Text below the image */}
      <div className="p-4">
        <h5 className="fw-bold mb-2">
          Waymo Robotaxis Now Live in Atlanta
        </h5>
        <p className="text-muted mb-0">Experience self-driving rides today</p>
      </div>
    </div>
  );
};

export default HeartFoundationCard;
