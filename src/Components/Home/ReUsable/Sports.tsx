'use client';

import React from "react";
import Link from "next/link";
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

function ArticleCard({ item, category, bordered = false }: { item: Article; category: string; bordered?: boolean }) {
  return (
    <div className={`p-3 ${bordered ? "border-bottom" : ""}`}>
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
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid w-100 rounded"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function MainArticle({ main, category }: { main: Article; category: string }) {
  return (
    <div className="col-lg-6 border-end p-3">
      <p className="fw-bold mb-2" style={{ fontFamily: 'Merriweather, serif' }}>{main.title}</p>
      <Link href={`/${category}/${main.slug}`} className="d-block">
        <div style={{ cursor: 'pointer' }}>
          <img
            src={main.image}
            alt={main.title}
            className="img-fluid w-100 rounded"
          />
        </div>
      </Link>
      <p className="text-muted small mb-0" style={{ fontFamily: 'Merriweather, serif' }}>
        {main.shortdescription.slice(0, 100)}...
      </p>
      <p className="text-muted mb-2 small" style={{ fontFamily: 'Merriweather, serif' }}>Author</p>
    </div>
  );
}

function Sports({ data }: { data: CategoryData }) {
  const { articles, category } = data;

  if (articles.length < 8) {
    return <div className="p-3 text-muted">Not enough articles to display this layout.</div>;
  }

  // Track used indexes to avoid duplicates
  const usedIndexes = new Set<number>();

  const mainTopIndex = 0;
  const mainReverseIndex = 1;
  const mainTop = articles[mainTopIndex];
  const mainReverse = articles[mainReverseIndex];
  usedIndexes.add(mainTopIndex);
  usedIndexes.add(mainReverseIndex);

  // Helper to get next unique articles
  const getNextArticles = (count: number): Article[] => {
    const result: Article[] = [];
    for (let i = 0; i < articles.length; i++) {
      if (!usedIndexes.has(i)) {
        result.push(articles[i]);
        usedIndexes.add(i);
        if (result.length === count) break;
      }
    }
    return result;
  };

  const topArticles = getNextArticles(2);      // Next 2
  const reverseArticles = getNextArticles(2);  // Next 2
  const lowerArticles = getNextArticles(2);    // Last 2

  return (
    <div className="border-bottom">
      {/* Section Header */}
      <Row className="mb-3 pt-5">
        <Col>
          <div className="d-flex align-items-center">
            <h6 className="fw-bold mb-0 me-2">Sports</h6>
            <div style={{ flexGrow: 1, borderTop: "3px solid black" }}></div>
          </div>
          <div className="d-flex justify-content-end">
            <a href="#" className="text-decoration-none small mt-1" style={{ color: "black" }}>
              View all
            </a>
          </div>
        </Col>
      </Row>

      {/* Top Section */}
      <div className="row">
        <div className="col-lg-6">
          {topArticles.map((item, index) => (
            <ArticleCard item={item} category={category} bordered={index === 0} key={`top-${index}`} />
          ))}
        </div>
        <MainArticle main={mainTop} category={category} />
      </div>

      {/* Reverse Layout Section */}
      <div className="row">
        <MainArticle main={mainReverse} category={category} />
        <div className="col-lg-6">
          {reverseArticles.map((item, index) => (
            <ArticleCard item={item} category={category} bordered={index === 0} key={`reverse-${index}`} />
          ))}
        </div>
      </div>

      <div className="divider"></div>

      {/* Lower Articles */}
      <div className="row">
        {lowerArticles.map((item, index) => (
          <div className="col-lg-6 p-3" key={`lower-${index}`}>
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
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid w-100 rounded"
                      style={{ objectFit: "cover" }}
                    />
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

export default Sports;
