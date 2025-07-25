"use client";

import Image from "next/image";
import NewsCardGrid from "@/Components/Home/NewsCard";
import AFLSection from "@/Components/AlfaSection";
import HeartFoundationCard from "@/Components/HeartFoundationCard";

// You can copy one article object from your data JSON (example from business.json)
const article = {
  title: "Sample Business News Headline",
  image: "/images/business-sample.jpg",
  slug: "sample-business-news-headline",
  shortdescription: "This is a short description of the article.",
  description: `This is the full description content of the article. It can include multiple paragraphs and be styled using Tailwind or Bootstrap.`,
  category: "business",
  author: "John Doe",
  updated: "July 24, 2025",
  published: "July 20, 2025",
  imageCaption: "Photo by Business Source",
};

import businessData from "@/data/business.json";
import sportsData from "@/data/sports.json";

export default function StaticDetailPage() {
  return (
    <div className="container py-5">
      <div className="py-4 border-bottom">
        {/* Title */}
        <h1 className="fw-bold mb-3">{article.title}</h1>

        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 justify-content-between">
          {/* Author and Meta */}
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2 text-muted flex-wrap">
            <div>
              By <span className="fw-semibold text-dark">{article.author}</span>
            </div>

            <div className="vr d-none d-sm-block"></div>

            <div>
              <strong>Updated</strong> {article.updated}, first published {article.published}
            </div>
          </div>

          {/* Social Icons */}
          <div className="d-flex align-items-center gap-3 fs-5">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-envelope"></i>
            <i className="bi bi-link-45deg"></i>
          </div>
        </div>
      </div>

      <div className="row pt-5">
        {/* ----------------------- Main Article ------------------------ */}
        <div className="col-lg-8 border-end">
          {/* Image */}
          <div className="mb-3">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={450}
              className="rounded w-100"
            />
            {article.imageCaption && (
              <small className="text-muted d-block mt-1">{article.imageCaption}</small>
            )}
          </div>

          {/* Short Description */}
          <p className="text-muted fs-6 mb-3">{article.shortdescription}</p>

          {/* Description */}
          <div className="container mx-auto px-3 sm:px-4 md:px-5 lg:px-6">
            <div
              className="text-sm sm:text-base text-gray-800 text-justify"
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                lineHeight: "1.8",
                letterSpacing: "0.015em",
                wordSpacing: "0.1em",
              }}
            >
              {article.description}
            </div>
          </div>

          <AFLSection data={sportsData} />
          <NewsCardGrid data={businessData} />
        </div>

        {/* ---------------------- Sidebar ------------------- */}
        <div className="col-lg-4 d-none d-lg-block">
          <HeartFoundationCard />
        </div>
      </div>
    </div>
  );
}
