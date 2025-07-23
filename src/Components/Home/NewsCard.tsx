"use client";

import React from "react";
import Image from "next/image";
import { Button, Card, Row, Col } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import healthData from "../../data/health.json";
import logo from "../../../public/images/examiner-head.svg";

interface NewsItem {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
}

const NewsCardGrid: React.FC = () => {
  const newsItems = healthData.slice(0, 4) as NewsItem[];

  return (
    <Row className="gx-2 gy-4 pt-4">
      {/* Header */}
      <Row className="mb-3">
        <Col>
          <div className="d-flex align-items-center">
            <h6 className="fw-bold mb-0 me-2" style={{ fontSize: "1rem" }}>
              Newsletters &amp; Alerts
            </h6>
            <div className="flex-grow-1 border-top border-3 border-dark"></div>
          </div>
          <div className="d-flex justify-content-end">
            <a href="#" className="text-decoration-none small mt-1 text-dark">
              View all
            </a>
          </div>
        </Col>
      </Row>

      {/* Cards */}
      {newsItems.map((item, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3}>
          <Card className="p-2 h-100 shadow-sm border rounded-3">
            {/* Image */}
            <div
              className="position-relative mb-2"
              style={{
                height: "130px",
                width: "100%",
                overflow: "hidden",
                borderRadius: "6px",
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Logo */}
            <div className="d-flex justify-content-end mb-1">
              <Image
                src={logo}
                alt="Examiner"
                width={75}
                height={18}
              />
            </div>

            {/* Text Content */}
            <p className="text-uppercase text-muted mb-1" style={{ fontSize: "0.65rem", fontWeight: 600 }}>
              Daily
            </p>
            <h6
              className="fw-bold mb-2"
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: "0.95rem",
              }}
            >
              {item.title.substring(0, 30)}
            </h6>
            <p
              className="text-muted mb-2"
              style={{ fontSize: "0.8rem", lineHeight: "1.25" }}
            >
              {item.shortdescription.substring(0, 100)}...
            </p>

            {/* Button aligned left and smaller */}
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
        </Col>
      ))}
    </Row>
  );
};

export default NewsCardGrid;
