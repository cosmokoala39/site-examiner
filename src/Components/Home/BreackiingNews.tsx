"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export type Article = {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  date:string;
};

export type CategoryData = {
  category: string;
  articles: Article[];
};

function getNextUniqueArticles(
  allArticles: Article[],
  usedSlugs: Set<string>,
  count: number
): Article[] {
  const result: Article[] = [];
  for (const article of allArticles) {
    if (!usedSlugs.has(article.slug)) {
      result.push(article);
      usedSlugs.add(article.slug);
    }
    if (result.length === count) break;
  }
  return result;
}

function BreackingNEws({ data }: { data: CategoryData }) {
  const { articles, category } = data;
  const usedSlugs = new Set<string>();

  const main = articles[0];
  usedSlugs.add(main.slug);
  const others = articles.slice(1);

  return (
    <div className="div">
      <div className="row">
        {/* ------------Main Vertical Article------------ */}
        <div className="col-lg-6 border-end p-3">
          <span
            className="badge text-danger rounded-pill px-2 py-1 fw-semibold m-2"
            style={{
              fontSize: "clamp(0.6rem, 1vw, 0.75rem)",
              backgroundColor: "#ffe5e5",
            }}
          >
            {category}
          </span>
          <p
            className="fw-bold mb-2"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {main.title}
          </p>
          <Link href={`/${category}/${main.slug}`} className="d-block">
            <div style={{ cursor: "pointer" }}>
              <Image
                src={main.image}
                alt={main.title}
                className="img-fluid w-100 rounded"
                layout="responsive"
                width={800}
                height={450}
              />
            </div>
          </Link>
          <p
            className="text-muted small mb-0"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {main.shortdescription.slice(0, 100)}...
          </p>
          <p
            className="text-muted mb-2 small"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {main.date}
          </p>
        </div>

        {/* ------------2 side --Horizontal Articles ------------ */}
        <div className="col-lg-6">
          {getNextUniqueArticles(others, usedSlugs, 2).map((item, index) => (
            <Link
              href={`/${category}/${item.slug}`}
              key={index}
              className="text-decoration-none text-dark d-block"
              style={{ cursor: "pointer" }}
            >
              <div className={`p-3 ${index === 0 ? "border-bottom" : ""}`}>
               
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
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="img-fluid w-100 rounded"
                      style={{ objectFit: "cover" }}
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="divider"></div>

{/* ------------2 More Horizontal Articles ------------ */}
<div className="row">
  {getNextUniqueArticles(others, usedSlugs, 2).map((item, index) => (
    <div
      key={index}
      className="col-lg-6 p-3 border-end"
      style={{ cursor: "pointer" }}
    >
      <Link
        href={`/${category}/${item.slug}`}
        className="text-decoration-none text-dark"
      >
        <div>
          <p
            className="custom-headline"
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
              <Image
                src={item.image}
                alt={item.title}
                className=" rounded responsive-image"
                width={300}
                height={240}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  ))}
</div>




      <div className="divider"></div>

      {/* ------------1 Wide Article ------------ */}
     <div className="row p-3">
  {getNextUniqueArticles(others, usedSlugs, 1).map((item, index) => (
    <Link
      href={`/${category}/${item.slug}`}
      key={index}
      className="col-lg-12 d-flex flex-wrap mb-4 text-decoration-none text-dark"
      style={{ cursor: "pointer" }}
    >
      <div className="col-lg-9 col-12 mb-2">
        <p
          className="custom-headline"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          {item.title}
        </p>
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
      <div className="col-lg-3 col-12">
        <img
          src={item.image}
          alt={item.title}
          className="rounded responsive-img"
        />
      </div>
    </Link>
  ))}
</div>


      <div className="divider"></div>

      {/* ------------1 Vertical + 2 Horizontal Articles ------------ */}
      <div className="row">
       {getNextUniqueArticles(others, usedSlugs, 1).map((item, index) => (
  <Link
    href={`/${category}/${item.slug}`}
    key={index}
    className="col-lg-6 border-end p-3 text-decoration-none text-dark"
    style={{ cursor: "pointer" }}
  >
    <p
      className="fw-bold mb-2"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      {item.title}
    </p>
    <img
      src={item.image}
      alt={item.title}
      className=" rounded taller-img"
    />
    <p
      className="text-muted small mb-0"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      {item.shortdescription}...
    </p>
    <p
      className="text-muted mt-2 small"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      {item.date}
    </p>
  </Link>
))}


        <div className="col-lg-6">
          {getNextUniqueArticles(others, usedSlugs, 2).map((item, index) => (
            <Link
              href={`/${category}/${item.slug}`}
              key={index}
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
              <Image
                src={item.image}
                alt={item.title}
                className=" rounded responsive-image"
                width={300}
                height={240}
              />
            </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      {/* ------------2 Horizontal Articles + 1 Vertical ------------ */}
      <div className="row">
<div className="col-lg-6 border-end">
  {getNextUniqueArticles(others, usedSlugs, 2).map((item, index) => (
    <Link
      href={`/${category}/${item.slug}`}
      key={index}
      className={`d-block text-decoration-none text-dark ${index === 0 ? "border-bottom" : ""}`}
      style={{ cursor: "pointer" }}
    >
      <div className="p-3">
        <p className="fw-bold" style={{ fontFamily: "Merriweather, serif" }}>
          {item.title}
        </p>
        <div className="row g-2 align-items-center">
          <div className="col-12 col-md-8">
            <p className="text-muted small" style={{ fontFamily: "Merriweather, serif" }}>
              {item.shortdescription.slice(0, 100)}...
            </p>
            <p className="text-muted small" style={{ fontFamily: "Merriweather, serif" }}>
              6 min ago
            </p>
          </div>
          <div className="col-12 col-md-4">
    <Image
  src={item.image}
  alt={item.title}
  className="img-fluid w-100 rounded responsive-img-height"
  style={{ objectFit: "cover" }}
  width={300}
  height={200}
/>


          </div>
        </div>
      </div>
    </Link>
  ))}
</div>



        {/* Final vertical article if available */}
       {getNextUniqueArticles(others, usedSlugs, 1).map((item, index) => (
  <Link
    href={`/${category}/${item.slug}`}
    key={index}
    className="col-lg-6 border-end p-3 text-decoration-none text-dark"
    style={{ cursor: "pointer" }}
  >
    <p
      className="fw-bold mb-2"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      {item.title}
    </p>
    
    <img
      src={item.image}
      alt={item.title}
      className="rounded small-img"
    />
    <p
      className="text-muted small mb-0"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      {item.shortdescription.slice(0, 100)}...
    </p>
    <p
      className="text-muted mt-2 small"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      {item.date}
    </p>
  </Link>
))}

      </div>

      <div className="divider"></div>
    </div>
  );
}

export default BreackingNEws;
