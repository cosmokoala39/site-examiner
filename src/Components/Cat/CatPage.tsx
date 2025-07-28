import Link from "next/link";
import Image from "next/image";
import MatchCard from "../MatchCard";
import React from "react";

interface Article {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  category: string;
}

const navItems = [
  { name: "Top News", active: true },
  { name: "Toyota Hub", icon: "🚗" },
  { name: "Live", icon: "📡" },
  { name: "Local Footy" },
  { name: "NRL", icon: "🏉" },
  { name: "Scores and Draws" },
  { name: "A-League", icon: "⚽" },
  { name: "Football" },
  { name: "More", icon: "⬇️" },
];

interface Props {
  articles: Article[];
  category: string;
}

function CategoryBlock({
  verticalTop,
  horizontalTop,
  verticalBottom,
  horizontalBottom,
  reverse,
  category,
}: {
  verticalTop: Article;
  horizontalTop: Article[];
  verticalBottom: Article;
  horizontalBottom: Article[];
  reverse: boolean;
  category: string;
}) {
  return (
    <div className="row pt-2">
      {reverse ? (
        <>
          {/* Horizontals Left */}
          <div className="col-lg-6 border-end">
            {horizontalTop.map((article, idx) => (
              <Link
                href={`/${category}/${article.slug}`}
                key={idx}
                className="text-decoration-none text-dark"
              >
                <div className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}>
                  <p
                    className="fw-bold"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    {article.title}
                  </p>
                  <div className="row">
                    <div className="col-lg-8">
                      <p
                        className="text-muted small"
                        style={{ fontFamily: "Merriweather, serif" }}
                      >
                        {article.shortdescription.slice(0, 100)}...
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={400}
                        height={300}
                        className="img-fluid w-100 rounded"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Vertical Right */}
          <div className="col-lg-6 border-end p-3">
            <Link
              href={`/${category}/${verticalTop.slug}`}
              className="text-decoration-none text-dark"
            >
              <p
                className="fw-bold text-muted mb-2"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                {verticalTop.title}
              </p>
              <Image
                src={verticalTop.image}
                alt={verticalTop.title}
                width={800}
                height={450}
                className="img-fluid w-100 rounded mb-2"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <p
                className="text-muted small"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                {verticalTop.shortdescription.slice(0, 100)}...
              </p>
            </Link>
          </div>
        </>
      ) : (
        <>
          {/* Vertical Left */}
          <div className="col-lg-6 border-end p-3">
            <Link
              href={`/${category}/${verticalTop.slug}`}
              className="text-decoration-none text-dark"
            >
              <p
                className="fw-bold text-muted mb-2"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                {verticalTop.title}
              </p>

              <Image
                src={verticalTop.image}
                alt={verticalTop.title}
                width={800}
                height={450}
                className="img-fluid w-100 rounded mb-2"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <p
                className="text-muted small"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                {verticalTop.shortdescription.slice(0, 100)}...
              </p>
            </Link>
          </div>
          {/* Horizontals Right */}
          <div className="col-lg-6 border-end">
            {horizontalTop.map((article, idx) => (
              <Link
                href={`/${category}/${article.slug}`}
                key={idx}
                className="text-decoration-none text-dark"
              >
                <div className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}>
                  <p
                    className="fw-bold"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    {article.title}
                  </p>
                  <div className="row">
                    <div className="col-lg-8">
                      <p
                        className="text-muted small"
                        style={{ fontFamily: "Merriweather, serif" }}
                      >
                        {article.shortdescription.slice(0, 100)}...
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={400}
                        height={300}
                        className="img-fluid w-100 rounded"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* Bottom Row */}
      <div className="col-lg-6 border-end p-3 border-top border-bottom">
        <Link
          href={`/${category}/${verticalBottom.slug}`}
          className="text-decoration-none text-dark"
        >
          <p
            className="fw-bold text-muted mb-2"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {verticalBottom.title}
          </p>

          <Image
            src={verticalBottom.image}
            alt={verticalBottom.title}
            width={800}
            height={450}
            className="img-fluid w-100 rounded mb-2"
            style={{ height: "220px", objectFit: "cover" }}
          />
          <p
            className="text-muted small"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {verticalBottom.shortdescription.slice(0, 100)}...
          </p>
        </Link>
      </div>
      <div className="col-lg-6 border-top border-end">
        {horizontalBottom.map((article, idx) => (
          <div key={idx} className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}>
            <p
              className="fw-bold"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              {article.title}
            </p>
            <div className="row">
              <div className="col-lg-8">
                <p
                  className="text-muted small"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  {article.shortdescription.slice(0, 100)}...
                </p>
              </div>
              <div className="col-lg-4">
                <Link href={`/${category}/${article.slug}`}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="img-fluid w-100 rounded"
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RenderCategorySection({ articles, category }: Props) {
  if (articles.length < 12) {
    return (
      <p className="text-center text-muted py-5">
        Not enough articles for layout.
      </p>
    );
  }

  // Break into chunks of 6: [0-5], [6-11], repeat if needed
  const sections = [];
  for (let i = 0; i + 5 < articles.length && sections.length < 4; i += 6) {
    const verticalTop = articles[i];
    const horizontalTop = articles.slice(i + 1, i + 3);
    const verticalBottom = articles[i + 3];
    const horizontalBottom = articles.slice(i + 4, i + 6);
    sections.push({
      verticalTop,
      horizontalTop,
      verticalBottom,
      horizontalBottom,
    });
  }

  return (
    <div className="div">
      {/* Header + Nav */}
      <div className="row border-bottom">
        <div className="col-lg">
          <div className="px-4 pt-6 pb-3 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h1>
            <div className="d-none d-md-flex flex-wrap gap-2 py-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className={`whitespace-nowrap doco344 flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium ${
                    item.active
                      ? "bg-blue-700 text-white"
                      : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                >
                  {item.icon && <span>{item.icon}</span>}
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* LEFT CONTENT */}
        <div className="col-lg-8">
          <div className="container">
            {/* Ad Banner */}
            <div className="my-4 text-center radio">
              <Image
                src="/images/Ads.jpg"
                alt="Advertisement"
                width={728}
                height={90}
                className="rounded"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>

            {/* Repeated Sections */}
            {sections.map((section, index) => (
              <CategoryBlock
                key={index}
                {...section}
                reverse={index % 2 !== 0}
                category={category}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-lg-4">
          <div className="container py-5">
            <MatchCard
              teamA={{ name: "Cowboys", logo: "/images/cow.svg", rank: "13th" }}
              teamB={{
                name: "Dragons",
                logo: "/images/dragon.svg",
                rank: "11th",
              }}
              date="Fri 25 July"
              time="1:30 pm"
              summary={[
                "Head-to-Head - 39 games played. Cowboys 22 wins – Dragons 17 wins.",
                "The Cowboys have won their last 5 matches against the Dragons – since 2021.",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderCategorySection;
