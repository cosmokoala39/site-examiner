'use client';

import React from "react";
import Link from "next/link";

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

        {/* ------------Horizontal articles (others[0] and others[1]) ------------ */}
        <div className="col-lg-6">
          {others.slice(0, 2).map((item, index) => (
            <div className={`p-3 ${index === 0 ? "border-bottom" : ""}`} key={index}>
              <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}>{item.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{item.shortdescription.slice(0, 30)}</p>
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

      <div className="divider"></div>

      {/* ------------Lower horizontal articles (others[2] and others[3]) ------------ */}
      <div className="row">
        {others.slice(2, 4).map((item, index) => (
          <div className="col-lg-6  p-3" key={index}>
            <p className="custom-headline" style={{ fontFamily: 'Merriweather, serif' }}>{item.title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{item.shortdescription.slice(0, 100)}</p>
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

      <div className="divider"></div>

      {/* ------------Wide article (others[0] again for demo) ------------ */}
     <div className="row p-5">
  {others.slice(5, 6).map((item, index) => (
    <div className="col-lg-12 d-flex mb-4" key={index}>
      <div className="col-lg-9">
        <p className="custom-headline" style={{ fontFamily: 'Merriweather, serif' }}>
          {item.title}
        </p>
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{item.shortdescription.slice(0, 100)}</p>

        <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>
          { 'Jel Maco'}
        </p>
      </div>
      <div className="col-lg-3">
        <Link href={`/${category}/${item.slug}`} className="d-block">
          <div style={{ cursor: 'pointer' }}>
            <img
              src={item.image}
              alt={item.title}
              className="img-fluid w-100 rounded"
            />
          </div>
        </Link>
      </div>
    </div>
  ))}
</div>


      <div className="divider"></div>
       <div className="row">
        {/* ------------Vertical main article------------ */}
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

        {/* ------------Horizontal articles (others[0] and others[1]) ------------ */}
        <div className="col-lg-6">
          {others.slice(0, 2).map((item, index) => (
            <div className={`p-3 ${index === 0 ? "border-bottom" : ""}`} key={index}>
              <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}>{item.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{item.shortdescription.slice(0, 30)}</p>
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

      <div className="divider"></div>

      {/* ------------Lower horizontal articles (others[2] and others[3]) ------------ */}
      <div className="row">
        {others.slice(2, 4).map((item, index) => (
          <div className="col-lg-6  p-3" key={index}>
            <p className="custom-headline" style={{ fontFamily: 'Merriweather, serif' }}>{item.title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{item.shortdescription.slice(0, 100)}</p>
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
       <div className="row">
        {/* ------------Vertical main article------------ */}
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

        {/* ------------Horizontal articles (others[0] and others[1]) ------------ */}
        <div className="col-lg-6">
          {others.slice(0, 2).map((item, index) => (
            <div className={`p-3 ${index === 0 ? "border-bottom" : ""}`} key={index}>
              <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}>{item.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{item.shortdescription.slice(0, 30)}</p>
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

      <div className="divider"></div>

      {/* ------------Lower horizontal articles (others[2] and others[3]) ------------ */}
      <div className="row">
        {others.slice(2, 4).map((item, index) => (
          <div className="col-lg-6  p-3" key={index}>
            <p className="custom-headline" style={{ fontFamily: 'Merriweather, serif' }}>{item.title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{item.shortdescription.slice(0, 100)}</p>
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

export default BreackingNEws;
