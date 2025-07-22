import React from "react";
import politicsData from "../../data/politics.json";
import businessData from "../../data/business.json";
import technologyData from "../../data/technology.json";
import sportsData from "../../data/sports.json";
import scienceData from "../../data/science.json";
import healthData from "../../data/health.json";
import { Button } from "react-bootstrap";
import Category from "@/Components/Cat/CatPage";

type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
};

export const sportSubCategories = [
  { label: "Top News", active: true },
  { label: "Toyota Hub", icon: "🚗" },
  { label: "Live", icon: "📡" },
  { label: "Local Footy" },
  { label: "Local Sport" },
  { label: "Junior Sport" },
  { label: "NRL", icon: "🏉" },
  { label: "Scores and Draws" },
  { label: "A-League", icon: "🌐" },
  { label: "Football" },
  { label: "More", icon: "▼" },
];

interface PageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  return [
    { category: "politics" },
    { category: "business" },
    { category: "technology" },
    { category: "sports" },
    { category: "science" },
    { category: "health" },
  ];
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = params;

  let filteredArticles: Article[] = [];

  switch (category) {
    case "technology":
      filteredArticles = technologyData;
      break;
    case "sports":
      filteredArticles = sportsData;
      break;
    case "business":
      filteredArticles = businessData;
      break;
    case "health":
      filteredArticles = healthData;
      break;
    case "science":
      filteredArticles = scienceData;
      break;
    case "politics":
      filteredArticles = politicsData;
      break;
    default:
      break;
  }

  if (!filteredArticles.length) {
    return (
      <div className="p-4">No articles found for category: {category}</div>
    );
  }

  return (
    <div className="container">
      {/* ---------- Header -------------- */}
      <div className="my-3 pb-4 border-bottom">
        <h1 className="fw-bold text-capitalize">{category} News</h1>
        <div className="py-2">
          <div className="d-flex flex-wrap gap-1">
            {sportSubCategories.map((item, index) => (
              <Button
                key={index}
                variant="light"
                className="rounded-pill py-0 px-2 small text-nowrap d-flex align-items-center gap-1"
              >
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        {/* --------------------- Left (main articles) -------------------- */}
        <div className="col-lg-8 border-end">
          {filteredArticles.slice(0, 4).map((article, index) => (
            <Category
              key={index}
              image={article.image}
              title={article.title}
              shortdescription={article.shortdescription}
              slug={article.slug}
              category={category}
            />
          ))}
        </div>

        {/* --------------------------- Right (sidebar or future content) ---------------------- */}
        <div className="col-lg-4">
          {/* Optional: add sidebar, trending, ads, or social media feed here */}
        </div>
      </div>
    </div>
  );
}
