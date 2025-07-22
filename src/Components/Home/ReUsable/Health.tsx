'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

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

function Health({ data }: { data: CategoryData }) {
  const { articles, category } = data;

  if (!articles || articles.length === 0) return null;

  const main = articles[0];
  const others = articles.slice(1, 10);

  return (
    <div className="div">
      {/* Section Header */}
      <Row className="mb-3 pt-5">
        <Col>
          <div className="d-flex align-items-center">
            <h6 className="fw-bold mb-0 me-2">{category}</h6>
            <div
              style={{
                flexGrow: 1,
                borderTop: "3px solid black",
              }}
            ></div>
          </div>

          <div className="d-flex justify-content-end">
            <Link
              href={`/${category}`}
              className="text-decoration-none small mt-1"
              style={{ color: "black" }}
            >
              View all
            </Link>
          </div>
        </Col>
      </Row>

      {/* Top Section */}
      <div className="row">
        {/* Main Article */}
        <div className="col-lg-6 border-end p-3">
          <p className="fw-bold mb-2" style={{ fontFamily: 'Merriweather, serif' }}>{main.title}</p>

          <Link href={`/${category}/${main.slug}`} className="d-block">
            <div style={{ cursor: 'pointer' }}>
              <div className="image-container mb-2">
                <Image
                  src={main.image}
                  alt={main.title}
                  width={700}
                  height={400}
                  className="img-fluid w-100 rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </Link>

          <p className="text-muted small mb-0" style={{ fontFamily: 'Merriweather, serif' }}>
            {main.shortdescription.slice(0, 100)}...
          </p>
          <p className="text-muted mb-2 small" style={{ fontFamily: 'Merriweather, serif' }}>Author</p>
        </div>

        {/* Top Two Horizontal Articles */}
        <div className="col-lg-6">
          {others.slice(0, 2).map((item, index) => (
            <div className={`p-3 ${index === 0 ? "border-bottom" : ""}`} key={index}>
              <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}>{item.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>
                    {item.shortdescription.slice(0, 30)}
                  </p>
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${category}/${item.slug}`} className="d-block">
                    <div style={{ cursor: 'pointer' }}>
                      <div className="image-container">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={200}
                          height={120}
                          className="img-fluid w-100 rounded"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      {/* Lower Two Articles */}
      <div className="row">
        {others.slice(2, 4).map((item, index) => (
          <div className="col-lg-6 p-3" key={index}>
            <p className="custom-headline" style={{ fontFamily: 'Merriweather, serif' }}>{item.title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>
                  {item.shortdescription.slice(0, 100)}
                </p>
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 min ago</p>
              </div>
              <div className="col-lg-4">
                <Link href={`/${category}/${item.slug}`} className="d-block">
                  <div style={{ cursor: 'pointer' }}>
                    <div className="image-container">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={200}
                        height={120}
                        className="img-fluid w-100 rounded"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Health;
