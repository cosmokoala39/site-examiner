import businessData from "../../../data/business.json";
import politicsData from "../../../data/politics.json";
import technologyData from "../../../data/technology.json";
import sportsData from "../../../data/sports.json";
import scienceData from "../../../data/science.json";
import healthData from "../../../data/health.json";
import educationData from "../../../data/education.json";
import entertainmentData from "../../../data/entertainment.json";

import Image from "next/image";
import NewsCardGrid from "@/Components/Home/NewsCard";
import AFLSection from "@/Components/AlfaSection";
import HeartFoundationCard from "@/Components/HeartFoundationCard";

interface ArticleProps {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  description?: string; // <-- now optional
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

// Helper function to format description
function splitDescriptionIntoParagraphs(
  description: string,
  groupSize: number = 3
): string[] {
  const sentences = description.split(". ").filter((s) => s.trim().length > 0);
  const paragraphs: string[] = [];

  for (let i = 0; i < sentences.length; i += groupSize) {
    paragraphs.push(sentences.slice(i, i + groupSize).join(". ") + ".");
  }

  return paragraphs;
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
    education:educationData,
    entertainment: entertainmentData,
  };

  const article = allArticles[category]?.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="p-4 text-danger">No article found for slug: {slug}</div>
    );
  }

const descriptionParagraphs = splitDescriptionIntoParagraphs(article.description || "");


  return (
    <div className="container py-5">
      {/* ---------- Header ---------- */}
      <div className="py-4 border-bottom">
        <h1 className="fw-bold mb-3">{article.title}</h1>

        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 justify-content-between">
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2 text-muted flex-wrap">
            <div>
              By{" "}
              <span className="fw-semibold text-dark">
                {article.author || "Unknown"}
              </span>
            </div>
            <div className="vr d-none d-sm-block"></div>
            <div>
              <strong>Updated</strong> {article.updated || "N/A"}, first
              published {article.published || "N/A"}
            </div>
          </div>

          <div className="d-flex align-items-center gap-3 fs-5">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-envelope"></i>
            <i className="bi bi-link-45deg"></i>
          </div>
        </div>
      </div>

      {/* ---------- Body ---------- */}
      <div className="row pt-5">
        {/* Main Content */}
        <div className="col-lg-8 border-end">
          <div className="mb-4">
            <Image
              src={article.image}
              alt={article.title}
              width={1200}
              height={700}
              className="img-fluid w-100 rounded"
              style={{
                objectFit: "cover",
                height: "auto",
                maxHeight: "600px",
              }}
            />
            {article.imageCaption && (
              <small className="text-muted d-block mt-1">
                {article.imageCaption}
              </small>
            )}
          </div>

          <p className="text-muted fs-6 mb-4">{article.shortdescription}</p>

          <div className="container px-0 px-sm-2 px-md-3">
            {descriptionParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="mb-4"
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  lineHeight: "1.8",
                  letterSpacing: "0.015em",
                  wordSpacing: "0.1em",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Additional Sections */}
          <AFLSection data={sportsData} />
          <NewsCardGrid data={businessData} />
        </div>

        {/* Sidebar */}
        <div className="col-lg-4 d-none d-lg-block">
          <HeartFoundationCard />
        </div>
      </div>
    </div>
  );
}
