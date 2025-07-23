"use client";

import React from "react";
import Link from "next/link";
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

function BreackingNEws({ data }: { data: CategoryData }) {
  const { articles, category } = data;
  const main = articles[0];
  const others = articles.slice(1, 10);

  return (
    <div className="div">
      <div className="row">
        {/* ------------Vertical main article------------ */}
        <div className="col-lg-6 border-end p-3">
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
                width={800} // adjust based on your image
                height={450} // adjust based on your image
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
            Author
          </p>
        </div>

        {/* ------------Horizontal articles (others[0] and others[1]) ------------ */}
        
<div className="col-lg-6">
  {others.slice(0, 2).map((item, index) => (
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
              {item.shortdescription.slice(0, 30)}
            </p>
            <p
              className="text-muted small"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              46 min ago
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

      {/* ------------Lower horizontal articles (others[2] and others[3]) ------------ */}
 <div className="row">
  {others.slice(2, 4).map((item, index) => (
    <Link
      href={`/${category}/${item.slug}`}
      key={index}
      className="col-lg-6 p-3 border-end text-decoration-none text-dark"
      style={{ cursor: "pointer" }}
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
              46 min ago
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


      <div className="divider"></div>

      {/* ------------Wide article (others[0] again for demo) ------------ */}
      <div className="row p-3">
  {others.slice(5, 6).map((item, index) => (
    <Link
      href={`/${category}/${item.slug}`}
      key={index}
      className="col-lg-12 d-flex mb-4 text-decoration-none text-dark"
      style={{ cursor: "pointer" }}
    >
      <div className="col-lg-9">
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
          {"Jel Maco"}
        </p>
      </div>
      <div className="col-lg-3">
        <img
          src={item.image}
          alt={item.title}
          className="img-fluid w-100 rounded"
        />
      </div>
    </Link>
  ))}
</div>


      <div className="divider"></div>
      <div className="row">
        {/* ------------Vertical main article------------ */}
        <Link
  href={`/${category}/${main.slug}`}
  className="col-lg-6 border-end p-3 text-decoration-none text-dark"
  style={{ cursor: "pointer" }}
>
  <p
    className="fw-bold mb-2"
    style={{ fontFamily: "Merriweather, serif" }}
  >
    {main.title}
  </p>

  <img
    src={main.image}
    alt={main.title}
    className="img-fluid w-100 rounded"
  />

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
    Author
  </p>
</Link>


        {/* ------------Horizontal articles (others[0] and others[1]) ------------ */}
        <div className="col-lg-6">
  {others.slice(0, 2).map((item, index) => (
    <Link
      href={`/${category}/${item.slug}`}
      key={index}
      className={`d-block text-decoration-none text-dark ${index === 0 ? "border-bottom" : ""}`}
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
              {item.shortdescription.slice(0, 30)}
            </p>
            <p
              className="text-muted small"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              46 min ago
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

      </div>

      <div className="divider"></div>

     
      <div className="row">
         {/* ------------Horizontal articles (others[0] and others[1]) ------------ */}
        <div className="col-lg-6 border-end">
  {others.slice(0, 2).map((item, index) => (
    <Link
      href={`/${category}/${item.slug}`}
      key={index}
      className={`d-block text-decoration-none text-dark ${index === 0 ? "border-bottom" : ""}`}
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
              {item.shortdescription.slice(0, 30)}
            </p>
            <p
              className="text-muted small"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              46 min ago
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

        {/* ------------Vertical main article------------ */}
      <Link
  href={`/${category}/${main.slug}`}
  className="col-lg-6 border-end p-3 text-decoration-none text-dark"
  style={{ cursor: "pointer" }}
>
  <p
    className="fw-bold mb-2"
    style={{ fontFamily: "Merriweather, serif" }}
  >
    {main.title}
  </p>

  <img
    src={main.image}
    alt={main.title}
    className="img-fluid w-100 rounded"
  />

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
    Author
  </p>
</Link>


       
      </div>

      <div className="divider"></div>

     
    </div>
  );
}

export default BreackingNEws;
