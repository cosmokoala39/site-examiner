import businessData from "../../../data/business.json";
import politicsData from "../../../data/politics.json";
import technologyData from "../../../data/technology.json";
import sportsData from "../../../data/sports.json";
import scienceData from "../../../data/science.json";
import healthData from "../../../data/health.json";

import { Metadata } from "next";
import Image from "next/image";
import NewsCardGrid from "@/Components/Home/NewsCard";
import AFLSection from "@/Components/AlfaSection";
import HeartFoundationCard from "@/Components/HeartFoundationCard";

interface ArticleProps {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  description: string;
  category: string;
  author?: string;
  updated?: string;
  published?: string;
  imageCaption?: string;
}

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Helper function to create category data
const createCategoryData = (
  category: string,
  articles: ArticleProps[]
) => ({
  category,
  articles,
});

export async function generateStaticParams() {
  const allData = [
    { category: "business", articles: businessData },
    { category: "politics", articles: politicsData },
    { category: "technology", articles: technologyData },
    { category: "sports", articles: sportsData },
    { category: "science", articles: scienceData },
    { category: "health", articles: healthData },
  ];

  return allData.flatMap(({ category, articles }) =>
    articles.map((article: ArticleProps) => ({
      category,
      slug: article.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, slug } = await params;

  const allArticles: Record<string, ArticleProps[]> = {
    business: businessData,
    politics: politicsData,
    technology: technologyData,
    sports: sportsData,
    science: scienceData,
    health: healthData,
  };

  const article = allArticles[category]?.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: article.title,
    description: article.shortdescription,
    openGraph: {
      title: article.title,
      description: article.shortdescription,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.shortdescription,
      images: [article.image],
    },
  };
}

export default async function DetailPage({ params }: PageProps) {
  const { category, slug } = await params;

  const allArticles: Record<string, ArticleProps[]> = {
    business: businessData,
    politics: politicsData,
    technology: technologyData,
    sports: sportsData,
    science: scienceData,
    health: healthData,
  };

  const article = allArticles[category]?.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="p-4 text-danger">No article found for slug: {slug}</div>
    );
  }

  // Create category data sections dynamically
  const businessSection = createCategoryData("business", businessData);
  const politicsSection = createCategoryData("politics", politicsData);
  const healthSection = createCategoryData("health", healthData);
  const sportsSection = createCategoryData("sports", sportsData);
  const scienceSection = createCategoryData("science", scienceData);

  return (
    <div className="container py-5">
      <div className="py-4 border-bottom">
        {/* Title */}
        <h1 className="fw-bold mb-3">{article.title}</h1>

     <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 justify-content-between">

          {/* Author and Meta */}
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2 text-muted flex-wrap">
            <div>
              By <span className="fw-semibold text-dark">{article.author || "Unknown"}</span>
            </div>

            {/* Divider */}
            <div className="vr d-none d-sm-block"></div>

            <div>
              <strong>Updated</strong> {article.updated || "N/A"}, first published {article.published || "N/A"}
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
              className="rounded w-100 hy6"
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
                textJustify: "inter-word", // clean spacing between words
                lineHeight: "1.8", // better vertical gap between lines
                letterSpacing: "0.015em", // smooth horizontal alignment
                wordSpacing: "0.1em", // increases gap between words slightly
              }}
            >
              {article.description}
            </div>
          </div>
          <AFLSection data={sportsData} />

          <NewsCardGrid data={businessData} />
        </div>

        {/* ---------------------- Sidebar ------------------- */}
        <div className="col-lg-4 d-none d-lg-block str">
         <HeartFoundationCard/>
        </div>
      </div>

      {/* Category Sections */}
      <div className="col-lg-8 border-end">
       
      </div>
    </div>
  );
}
