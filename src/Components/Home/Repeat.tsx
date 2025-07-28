import Link from "next/link";
import React from "react";

export type Article = {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  category?: string;
  date?: string;
};

export type CategoryData = {
  category: string;
  articles: Article[];
};

function RepeatPage({ data }: { data: CategoryData }) {
  if (!data || !data.articles || data.articles.length < 12) return null;

  const { articles } = data;

  return (
    <div>
      {/* ---------------- SECTION 1 ---------------- */}
      <div className="row">
        {/* Vertical left */}
        <Link
          href={`/${articles[0].category || "business"}/${articles[0].slug}`}
          className="col-lg-6 border-end p-3 text-decoration-none text-dark"
          style={{ cursor: "pointer" }}
        >
          <span
            className="badge text-danger rounded-pill px-2 py-1 fw-semibold m-2"
            style={{
              fontSize: "clamp(0.6rem, 1vw, 0.75rem)", // Responsive text size
              backgroundColor: "#ffe5e5", // Light pink background
            }}
          >
            {data.category}
          </span>
          <p
            className="fw-bold text-muted mb-2"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {articles[0].title}
          </p>

          <img
            src={articles[0].image}
            alt={articles[0].title}
            className="img-fluid w-100 rounded mb-2"
            style={{ height: "220px", objectFit: "cover" }}
          />

          <p
            className="text-muted small mb-0"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {articles[0].shortdescription.slice(0, 100)}...
          </p>

          <p
            className="text-muted mt-2 small"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {articles[0].date}
          </p>
        </Link>

        {/* 2 horizontal right */}
        <div className="col-lg-6">
          {articles.slice(1, 3).map((item, index) => (
            <Link
              href={`/${item.category || "business"}/${item.slug}`}
              key={index + 1}
              className={`d-block text-decoration-none text-dark ${
                index === 0 ? "border-bottom" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <div className="p-3">
                <p
                  className="fw-bold"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  {item.title}
                </p>
                <div className="row">
                  <div className="col-lg-8">
                    <p
                      className="text-muted small"
                      style={{ fontFamily: "Merriweather, serif" }}
                    >
                      {item.shortdescription.slice(0, 100)}
                    </p>
                    <p
                      className="text-muted small"
                      style={{ fontFamily: "Merriweather, serif" }}
                    >
                      {item.date}
                    </p>
                  </div>

                  {/* ✅ Custom class for responsive image height */}
                  <div className="col-lg-4">
                    <div className="custom-img-container rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="divider"></div>

      {/* ---------------- SECTION 2 ---------------- */}
      <div className="row">
        {/* 2 horizontal left */}
        <div className="col-lg-6 border-end">
          {articles.slice(4, 6).map((item, index) => (
            <Link
              href={`/${item.category || "business"}/${item.slug}`}
              key={index + 3}
              className={`d-block text-decoration-none text-dark ${
                index === 0 ? "border-bottom" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <div className="p-3">
                <p
                  className="fw-bold"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  {item.title}
                </p>
                <div className="row">
                  <div className="col-lg-8">
                    <p
                      className="text-muted small"
                      style={{ fontFamily: "Merriweather, serif" }}
                    >
                      {item.shortdescription.slice(0, 100)}
                    </p>
                    <p
                      className="text-muted small"
                      style={{ fontFamily: "Merriweather, serif" }}
                    >
                      {item.date}
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid w-100 rounded"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Vertical right */}
        <Link
          href={`/${articles[7].category || "business"}/${articles[7].slug}`}
          className="col-lg-6 border-end p-3 text-decoration-none text-dark"
          style={{ cursor: "pointer" }}
        >
          <p
            className="fw-bold text-muted mb-2"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {articles[7].title}
          </p>

          <img
            src={articles[7].image}
            alt={articles[7].title}
            className="img-fluid w-100 rounded mb-2"
            style={{ height: "220px", objectFit: "cover" }}
          />

          <p
            className="text-muted small mb-0"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {articles[7].shortdescription.slice(0, 100)}...
          </p>

          <p
            className="text-muted mt-2 small"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {articles[0].date}
          </p>
        </Link>
      </div>

      <div className="divider"></div>

      {/* ---------------- SECTION 3 ---------------- */}
      <div className="row">
        {/* Vertical left */}
        <div className="col-lg-6 border-end p-3">
          <p
            className="fw-bold text-muted mb-2"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {articles[8].title}
          </p>
          <Link
            href={`/${articles[8].category || "business"}/${articles[8].slug}`}
          >
            <img
              src={articles[8].image}
              alt={articles[8].title}
              className="img-fluid w-100 rounded mb-2"
              style={{ height: "220px", objectFit: "cover" }}
            />
          </Link>
          <p
            className="text-muted small mb-0"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {articles[8].shortdescription.slice(0, 100)}...
          </p>
          <p
            className="text-muted mt-2 small"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {articles[0].date}
          </p>
        </div>

        {/* 2 horizontal right */}
        <div className="col-lg-6">
          {articles.slice(9, 11).map((item, index) => (
            <div
              className={`p-3 ${index === 0 ? "border-bottom" : ""}`}
              key={index + 7}
            >
              <p
                className="fw-bold"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                {item.title}
              </p>
              <div className="row">
                <div className="col-lg-8">
                  <p
                    className="text-muted small"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    {item.shortdescription.slice(0, 100)}
                  </p>
                  <p
                    className="text-muted small"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    {item.date}
                  </p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${item.category || "business"}/${item.slug}`}>
                    <div className="custom-img-container rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-100 h-100"
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
      <div className="divider"></div>

      {/* ---------------- SECTION 4 (Reversed) ---------------- */}
      <div className="row">
        {/* 2 horizontal left */}
        <div className="col-lg-6 border-end">
          {articles.slice(12, 13).map((item, index) => (
            <Link
              href={`/${item.category || "business"}/${item.slug}`}
              key={index + 9}
              className={`d-block text-decoration-none text-dark ${
                index === 0 ? "" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <div className="p-3">
                <p
                  className="fw-bold"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  {item.title}
                </p>
                <div className="row">
                  <div className="col-lg-8">
                    <p
                      className="text-muted"
                      style={{ fontFamily: "Merriweather, serif" }}
                    >
                      {item.shortdescription.slice(0, 100)}
                    </p>
                    <p
                      className="text-muted small"
                      style={{ fontFamily: "Merriweather, serif" }}
                    >
                      {item.date}
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid w-100 rounded"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Vertical right */}
        <Link
          href={`/${articles[14].category || "business"}/${articles[14].slug}`}
          className="col-lg-6 border-end p-3 text-decoration-none text-dark"
          style={{ cursor: "pointer" }}
        >
          <p
            className="fw-bold text-muted mb-2"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {articles[14].title}
          </p>

          <img
            src={articles[14].image}
            alt={articles[14].title}
            className="img-fluid w-100 rounded mb-2"
            style={{ height: "220px", objectFit: "cover" }}
          />

          <p
            className="text-muted small mb-0"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {articles[14].shortdescription.slice(0, 100)}...
          </p>

         
        </Link>
      </div>
      <div className="divider"></div>

      {/* -----------------------------------------------------------------------------------5th--------------------------------- */}

      <div className="row   ">
        {/* ----------------------1st---------------------------- */}

        {/* ------------vertical------------ */}
        <Link
          href={`/${articles[15].category || "business"}/${articles[15].slug}`}
          className="col-lg-6 border-end p-3 text-decoration-none text-dark"
          style={{ cursor: "pointer", display: "block" }}
        >
          {/* Title */}
          <p
            className="fw-bold text-muted mb-2"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {articles[15].title}
          </p>

          {/* Image */}
          <img
            src={articles[15].image}
            alt={articles[15].title}
            className="img-fluid w-100 rounded mb-2"
            style={{ height: "220px", objectFit: "cover" }}
          />

          {/* Description */}
          <p
            className="text-muted small mb-0"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {articles[15].shortdescription.slice(0, 100)}...
          </p>
           <p
              className="text-muted mt-2 small"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              {articles[0].date}
            </p>

          {/* Author */}
          <p
            className="text-muted mb-2 small"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            <p
              className="text-muted mt-2 small"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              {articles[0].date}
            </p>
          </p>
        </Link>

        {/* --------------------------hori */}
        <div className="col-lg-6 border-end">
          {articles.slice(16, 18).map((item, index) => (
            <Link
              href={`/${item.category || "business"}/${item.slug}`}
              key={index + 9}
              className={`d-block p-3 text-decoration-none text-dark ${
                index === 0 ? "border-bottom" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              <p
                className="fw-bold"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                {item.title}
              </p>
              <div className="row">
                <div className="col-lg-8">
                  <p
                    className="text-muted small"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    {item.shortdescription.slice(0, 100)}
                  </p>
                  <p
                    className="text-muted small"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    {item.date}
                  </p>
                </div>
                <div className="col-lg-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid w-100 rounded "
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default RepeatPage;
