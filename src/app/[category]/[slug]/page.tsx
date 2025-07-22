import businessData from "../../../data/business.json";
import politicsData from "../../../data/politics.json";
import technologyData from "../../../data/technology.json";
import sportsData from "../../../data/sports.json";
import scienceData from "../../../data/science.json";
import healthData from "../../../data/health.json";

import { Metadata } from "next";
import Image from "next/image";
import LatestNews from "@/Home/LatestNews";
import NewsCardGrid from "@/Home/NewsCard";

interface ArticleProps {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  description: string;
  category: string;
}

interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

// Generate static params
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

// Generate metadata
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

// Article Detail Page
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
        {/* -----------------------left------------------------ */}
        <div className="col-lg-8">
          <h1 className="fs-2 fw-bold mb-4">{article.title}</h1>

          {/* ✅ Image matches text width */}
          <div className="mb-4">
            <Image
              src={article.image}
              alt={article.title}
              width={768}
              height={430}
              className="img-fluid rounded w-100"
            />
          </div>

          <p className="text-muted mb-4" >{article.shortdescription}</p>
          <div className="container">
            <p
              className="text-dark mb-3 fs-6 fs-md-5 fs-lg-5"
              style={{
                lineHeight: "1.8",
                textAlign: "justify",
                wordBreak: "break-word",
              }}
            >
              {article.description}
            </p>
          </div>

          <NewsCardGrid />
        </div>

        {/* ----------------------right------------------- */}

        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}
