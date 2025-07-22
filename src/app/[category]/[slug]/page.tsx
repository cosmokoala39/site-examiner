import businessData from "../../../data/business.json";
import politicsData from "../../../data/politics.json";
import technologyData from "../../../data/technology.json";
import sportsData from "../../../data/sports.json";
import scienceData from "../../../data/science.json";
import healthData from "../../../data/health.json";

import { Metadata } from "next";
import Image from "next/image";
import NewsCardGrid from "@/Components/Home/NewsCard";
import Carousel from "@/Components/Carousel";

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
  params: {
    category: string;
    slug: string;
  };
}

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
  const { category, slug } = params;

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
  const { category, slug } = params;

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

  return (
    <div className="container py-5">
      <div className="row">
        {/* ----------------------- Main Article ------------------------ */}
        <div className="col-lg-8">
          {/* Title */}
          <h1 className="fw-bold mb-3">{article.title}</h1>

          {/* Author and Meta */}
          <div className="text-muted mb-2">
            <div>
              By <span className="fw-semibold text-dark">{article.author || "Unknown"}</span>
            </div>
            <div>
              <strong>Updated</strong> {article.updated || "N/A"},
              first published {article.published || "N/A"}
            </div>
          </div>

          {/* Social Icons */}
          <div className="d-flex gap-3 my-3">
            <i className="bi bi-facebook fs-5"></i>
            <i className="bi bi-twitter-x fs-5"></i>
            <i className="bi bi-whatsapp fs-5"></i>
            <i className="bi bi-envelope fs-5"></i>
            <i className="bi bi-link-45deg fs-5"></i>
          </div>

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
         <div className="container mx-auto px-4">
  <div className="text-gray-800 text-base leading-relaxed text-justify">
    {article.description}
  </div>
</div>


          {/* Related Carousel */}
          <div className="mt-5">
            <Carousel />
          </div>

          {/* Related Articles Grid */}
          <div className="mt-4">
            <NewsCardGrid />
          </div>
        </div>

        {/* ---------------------- Sidebar ------------------- */}
        <div className="col-lg-4 d-none d-lg-block">
          {/* Add optional widgets or sidebar features here */}
        </div>
      </div>
    </div>
  );
}
