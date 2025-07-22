import React from "react";
import Link from "next/link";

interface ArticleProps {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  category?: string;
}

function LatestNews({ image, title, slug, shortdescription, category = "business" }: ArticleProps) {
  return (
    <div className="row p-3">
      <Link href={`/${category}/${slug}`} className="text-decoration-none text-dark d-flex w-100">
        <div className="col-lg-8">
          <p className="fw-semibold" style={{ fontFamily: 'Merriweather, serif' }}>{title}</p>
          <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>
            Author · 30 min ago
          </p>
        </div>
        <div className="col-lg-4">
          <img
            src={image}
            alt={title}
            className="img-fluid w-100 rounded"
            style={{ height: "80px", objectFit: "cover" }}
          />
        </div>
      </Link>
      <div className="divider"></div>
    </div>
  );
}

export default LatestNews;
