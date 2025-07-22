// components/CategoryPage.tsx
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

interface Article {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  category: string;
}

interface Props {
  articles: Article[];
  category: string;
}

function RenderCategorySection({ articles, category }: Props) {
  if (!articles || articles.length === 0) {
    return <p className="text-center text-muted">No articles found.</p>;
  }

  console.log("Rendering with", articles.length, "articles");
  

  const vertical1 = articles[0];
  console.log("vertical1:",vertical1)
  const horizontals1 = articles.slice(1, 3);
  const vertical2 = articles[3];
  const horizontals2 = articles.slice(4, 6);

  return (
    <div className="container">
      {/* Top ad image */}
      <div className="my-4 text-center">
        <Image
          src="/images/Ads.jpg"
          alt="Advertisement"
          width={728}
          height={90}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      {/* Category heading with View all */}
      <Row className="mb-3 pt-5">
        <Col>
          <div className="d-flex align-items-center">
            <h6 className="fw-bold mb-0 me-2 text-capitalize">{category}</h6>
            <div style={{ flexGrow: 1, borderTop: "3px solid black" }}></div>
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

      {/* Article Grid Layout */}
      <div className="row pt-2">
        {/* Left vertical */}
        <div className="col-lg-6 border-end p-3">
          <p className="fw-bold text-muted mb-2">{vertical1.title}</p>
          <div className="mb-2">
            <Link href={`/${category}/${vertical1.slug}`}>
              <img
                src={vertical1.image}
                alt={vertical1.title}
                className="img-fluid w-100 rounded"
                style={{ height: "220px", objectFit: "cover" }}
              />
            </Link>
          </div>
          <p className="text-muted small mb-0">{vertical1.shortdescription.slice(0, 100)}...</p>
          <p className="text-muted mb-2">Author</p>
        </div>

        {/* Top-right horizontal pair */}
        <div className="col-lg-6">
          {horizontals1.map((article, idx) => (
            <div key={idx} className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}>
              <p className="fw-bold">{article.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted">{article.shortdescription.slice(0, 100)}</p>
                  <p className="text-muted">46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${category}/${article.slug}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="img-fluid w-100 rounded"
                      style={{ height: "80px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom-left vertical */}
        <div className="col-lg-6 border-end p-3 border-top">
          <p className="fw-bold text-muted mb-2">{vertical2.title}</p>
          <div className="mb-2">
            <Link href={`/${category}/${vertical2.slug}`}>
              <img
                src={vertical2.image}
                alt={vertical2.title}
                className="img-fluid w-100 rounded"
                style={{ height: "220px", objectFit: "cover" }}
              />
            </Link>
          </div>
          <p className="text-muted small mb-0">{vertical2.shortdescription.slice(0, 100)}...</p>
          <p className="text-muted mb-2">Author</p>
        </div>

        {/* Bottom-right horizontal pair */}
        <div className="col-lg-6 border-top">
          {horizontals2.map((article, idx) => (
            <div key={idx} className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}>
              <p className="fw-bold">{article.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted">{article.shortdescription.slice(0, 100)}</p>
                  <p className="text-muted">46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${category}/${article.slug}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="img-fluid w-100 rounded"
                      style={{ height: "80px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RenderCategorySection;
