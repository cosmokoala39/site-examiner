import Link from "next/link";
import React from "react";

export type Article = {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  category?: string;
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
        <div className="col-lg-6 border-end p-3">
          <p className="fw-bold text-muted mb-2" style={{ fontFamily: 'Merriweather, serif' }}>{articles[0].title}</p>
          <Link href={`/${articles[0].category || 'business'}/${articles[0].slug}`}>
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="img-fluid w-100 rounded mb-2"
              style={{ height: "220px", objectFit: "cover" }}
            />
          </Link>
          <p className="text-muted small mb-0" style={{ fontFamily: 'Merriweather, serif' }}>
            {articles[0].shortdescription.slice(0, 100)}...
          </p>
          <p className="text-muted mb-2 small"style={{ fontFamily: 'Merriweather, serif' }}>Author</p>
        </div>

        {/* 2 horizontal right */}
        <div className="col-lg-6">
          {articles.slice(1, 3).map((item, index) => (
            <div className={`p-3 ${index === 0 ? "border-bottom" : ""}`} key={index + 1}>
              <p className="fw-bold " style={{ fontFamily: 'Merriweather, serif' }}>{item.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{item.shortdescription.slice(0, 30)}</p>
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${item.category || 'business'}/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.title}
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
      <div className="divider"></div>

      {/* ---------------- SECTION 2 ---------------- */}
      <div className="row">
        {/* 2 horizontal left */}
        <div className="col-lg-6 border-end">
          {articles.slice(3, 5).map((item, index) => (
            <div className={`p-3 ${index === 0 ? "border-bottom" : ""}`} key={index + 3}>
              <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}>{item.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{item.shortdescription.slice(0, 30)}</p>
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${item.category || 'business'}/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid w-100 rounded"
                      style={{ height: "80px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical right */}
        <div className="col-lg-6 border-end p-3">
          <p className="fw-bold text-muted mb-2" style={{ fontFamily: 'Merriweather, serif' }}>{articles[5].title}</p>
          <Link href={`/${articles[5].category || 'business'}/${articles[5].slug}`}>
            <img
              src={articles[5].image}
              alt={articles[5].title}
              className="img-fluid w-100 rounded mb-2"
              style={{ height: "220px", objectFit: "cover" }}
            />
          </Link>
          <p className="text-muted small mb-0" style={{ fontFamily: 'Merriweather, serif' }}>
            {articles[5].shortdescription.slice(0, 100)}...
          </p>
          <p className="text-muted mb-2 small" style={{ fontFamily: 'Merriweather, serif' }}>Author</p>
        </div>
      </div>
      <div className="divider"></div>

      {/* ---------------- SECTION 3 ---------------- */}
      <div className="row">
        {/* Vertical left */}
        <div className="col-lg-6 border-end p-3">
          <p className="fw-bold text-muted mb-2" style={{ fontFamily: 'Merriweather, serif' }}>{articles[6].title}</p>
          <Link href={`/${articles[6].category || 'business'}/${articles[6].slug}`}>
            <img
              src={articles[6].image}
              alt={articles[6].title}
              className="img-fluid w-100 rounded mb-2"
              style={{ height: "220px", objectFit: "cover" }}
            />
          </Link>
          <p className="text-muted small mb-0" style={{ fontFamily: 'Merriweather, serif' }}>
            {articles[6].shortdescription.slice(0, 100)}...
          </p>
          <p className="text-muted mb-2 small" style={{ fontFamily: 'Merriweather, serif' }}>Author</p>
        </div>

        {/* 2 horizontal right */}
        <div className="col-lg-6">
          {articles.slice(7, 9).map((item, index) => (
            <div className={`p-3 ${index === 0 ? "border-bottom" : ""}`} key={index + 7}>
              <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}>{item.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{item.shortdescription.slice(0, 30)}</p>
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${item.category || 'business'}/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.title}
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
      <div className="divider"></div>

      {/* ---------------- SECTION 4 (Reversed) ---------------- */}
      <div className="row">
        {/* 2 horizontal left */}
        <div className="col-lg-6 border-end">
          {articles.slice(9, 11).map((item, index) => (
            <div className={`p-3 ${index === 0 ? "border-bottom" : ""}`} key={index + 9}>
              <p className="fw-bold">{item.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted">{item.shortdescription.slice(0, 30)}</p>
                  <p className="text-muted">46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${item.category || 'business'}/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid w-100 rounded"
                      style={{ height: "80px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical right */}
        <div className="col-lg-6 border-end p-3">
          <p className="fw-bold text-muted mb-2" style={{ fontFamily: 'Merriweather, serif' }}>{articles[11].title}</p>
          <Link href={`/${articles[11].category || 'business'}/${articles[11].slug}`}>
            <img
              src={articles[11].image}
              alt={articles[11].title}
              className="img-fluid w-100 rounded mb-2"
              style={{ height: "220px", objectFit: "cover" }}
            />
          </Link>
          <p className="text-muted small mb-0" style={{ fontFamily: 'Merriweather, serif' }}>
            {articles[11].shortdescription.slice(0, 100)}...
          </p>
          <p className="text-muted mb-2 small" style={{ fontFamily: 'Merriweather, serif' }}>Author</p>
        </div>
      </div>
      <div className="divider"></div>



      {/* -----------------------------------------------------------------------------------5th--------------------------------- */}

       {/* -----------------------------------------------------------------------------------5th--------------------------------- */}

       <div className="row   ">

      {/* ----------------------1st---------------------------- */}

        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          {/* Top labels: Breaking + Title */}
         
          <p className="fw-bold text-muted mb-2" style={{ fontFamily: 'Merriweather, serif' }}>{articles[12].title}</p>

          {/* Image */}
          <div className="mb-2">
                 <Link href={`/${articles[12].category || 'business'}/${articles[12].slug}`}>

            <img
              src={articles[12].image}
              alt={articles[12].title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            /> </Link>
          </div>

          {/* Text under image */}
          <p className="text-muted small mb-0" style={{ fontFamily: 'Merriweather, serif' }}>
            {articles[12].shortdescription.slice(0, 100)}...
          </p>
          <p className=" text-muted mb-2 small" style={{ fontFamily: 'Merriweather, serif' }}>Author</p>
        </div>

         <div className="col-lg-6 border-end">
          {articles.slice(9, 11).map((item, index) => (
            <div className={`p-3 ${index === 0 ? "border-bottom" : ""}`} key={index + 9}>
              <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}>{item.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{item.shortdescription.slice(0, 100)}</p>
                  <p className="text-muted" style={{ fontFamily: 'Merriweather, serif' }}>46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${item.category || 'business'}/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.title}
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
      <div className="divider"></div>

      
    </div>
  );
}

export default RepeatPage;
