"use client";

import React from "react";
import Image from "next/image";
import { Button, Card, Row, Col } from "react-bootstrap";
import healthData from "../data/health.json"; // Adjust the path as needed

interface NewsItem {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
}

const NewsCardGrid: React.FC = () => {
  const newsItems = healthData.slice(0, 4) as NewsItem[];

  return (
    <Row className="gx-2 gy-3 pt-5">
      <Row className="mb-3">
  {/* Title and Line */}
  <Col>
    <div className="d-flex align-items-center">
      <h6 className="fw-bold mb-0 me-2">Newsletters &amp; Alerts</h6>
      <div
        style={{
          flexGrow: 1,
          borderTop: "3px solid black", // ⬅ Black, thicker line
        }}
      ></div>
    </div>

    {/* View All Under End of Line */}
    <div className="d-flex justify-content-end">
      <a
        href="#"
        className="text-decoration-none  small mt-1"
        style={{ color: "black" }}
      >
        View all
      </a>
    </div>
  </Col>
</Row>


      {newsItems.map((item, index) => (
        <Col key={index} xs={12} sm={6} md={3}>
          <Card
            style={{ width: "100%", height: "380px" }}
            className="p-2 d-flex flex-column gap-3"
          >
            <div
              style={{
                position: "relative",
                height: "160px",
                width: "100%",
                overflow: "hidden",
                borderRadius: "4px",
              }}
            >
                 
              
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: "cover", borderRadius: "4px" }}
              /> 
            </div>
            <p className="mb-1 text-muted small">{item.slug.substring(0, 5)}</p>
            <h6 className="mb-1" style={{ fontFamily: 'Merriweather, serif' }}>{item.title.substring(0, 10)}</h6>
            <p
              className="mb-1"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                 fontFamily: 'Merriweather, serif' 
              }} 
            >
              {item.shortdescription}
            </p>
            <Button variant="light" size="sm">
              Signup
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default NewsCardGrid;
