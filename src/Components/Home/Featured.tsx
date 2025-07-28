'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type Article = {
  image: string;
  title: string;
  slug: string;
  date:string;
  shortdescription: string;
};

export type CategoryData = {
  category: string;
  articles: Article[];
};

function Featured({ data }: { data: CategoryData }) {
  const { articles, category } = data;

  if (!articles || articles.length === 0) return null;

  const main = articles[10];

  return (
    <div className="p-3">
      <Link
        href={`/${category || 'business'}/${main.slug}`}
        className="text-decoration-none text-dark"
      >
        <div className="row">
          {/* ✅ Title on top for mobile only */}
          <div className="col-12 d-block d-lg-none mb-2">
           <span
  className="badge text-danger rounded-pill px-2 py-1 fw-semibold m-2"
  style={{
    fontSize: 'clamp(0.6rem, 1vw, 0.75rem)',
    backgroundColor: '#ffe5e5'
  }}
>
  {(category || 'Breaking').charAt(0).toUpperCase() + (category || 'Breaking').slice(1)}
</span>

            <h5 className="fw-bold" >{main.title}</h5>
          </div>

          {/* ✅ Image (Right on desktop, Top on mobile) */}
          <div className="col-12 col-lg-7 order-1 order-lg-2 mb-3 mb-lg-0">
            <div style={{ position: 'relative', width: '100%', height: '250px' }}>
              <Image
                src={main.image}
                alt={main.title}
                fill
                className="rounded"
                style={{ objectFit: 'cover' }}
              />
            
            </div>
          </div>

          {/* ✅ Text Section (Left on desktop, below image on mobile) */}
          <div className="col-12 col-lg-5 order-2 order-lg-1">
            <span
              className="badge text-danger rounded-pill px-2 py-1 fw-semibold m-2 d-none d-lg-inline-block"
              style={{
                fontSize: 'clamp(0.6rem, 1vw, 0.75rem)',
                backgroundColor: '#ffe5e5'
              }}
            >
              {category || 'Breaking'}
            </span>
            <h5 className="fw-bold mb-2 d-none d-lg-block">{main.title}</h5>
            <p className="text-muted" style={{ fontFamily: 'Merriweather, serif' }}>
              {main.shortdescription?.slice(0, 170)}...
            </p>
            <p className="text-muted fw-semibold small mb-0" style={{ fontFamily: 'Merriweather, serif' }}>
              {main.date}
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-4" />
      </Link>
    </div>
  );
}

export default Featured;
