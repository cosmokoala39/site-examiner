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

function RenderCategorySection({ articles, category }: Props) {
  if (!articles || articles.length < 12) {
    return (
      <p className="text-center text-muted py-5">
        Not enough articles for full layout.
      </p>
    );
  }

  // First layout
  const vertical1 = articles[0];
  const horizontals1 = articles.slice(1, 3);
  const vertical2 = articles[3];
  const horizontals2 = articles.slice(4, 6);

  // Second layout with next unique articles
  const vertical3 = articles[6];
  const horizontals3 = articles.slice(7, 9);
  const vertical4 = articles[9];
  const horizontals4 = articles.slice(10, 12);

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

            {/* ----------- First Section ----------- */}
            <div className="row pt-2">
              {/* Left vertical */}
              <div className="col-lg-6 border-end p-3">
                <Link href={`/${category}/${vertical1.slug}`}>
                  <img
                    src={vertical1.image}
                    alt={vertical1.title}
                    className="img-fluid w-100 rounded mb-2"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                </Link>
                <p className="fw-bold text-muted mb-2" style={{ fontFamily: 'Merriweather, serif' }}>{vertical1.title}</p>
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{vertical1.shortdescription.slice(0, 100)}...</p>
              </div>

              {/* Right horizontals */}
              <div className="col-lg-6 border-end">
                {horizontals1.map((article, idx) => (
                  <div key={idx} className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}>
                    <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}>{article.title}</p>
                    <div className="row">
                      <div className="col-lg-8">
                        <p className="text-muted small">{article.shortdescription.slice(0, 100)}</p>
                      </div>
                      <div className="col-lg-4">
                        <Link href={`/${category}/${article.slug}`}>
                          <img src={article.image} alt={article.title} className="img-fluid w-100 rounded" style={{ objectFit: "cover" }} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom-right horizontals */}
              <div className="col-lg-6 border-top">
                {horizontals2.map((article, idx) => (
                  <div key={idx} className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}>
                    <p className="fw-bold">{article.title}</p>
                    <div className="row">
                      <div className="col-lg-8">
                        <p className="text-muted small">{article.shortdescription.slice(0, 100)}</p>
                      </div>
                      <div className="col-lg-4">
                        <Link href={`/${category}/${article.slug}`}>
                          <img src={article.image} alt={article.title} className="img-fluid w-100 rounded" style={{ objectFit: "cover" }} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom-left vertical */}
              <div className="col-lg-6 border-end p-3 border-top border-bottom">
                <Link href={`/${category}/${vertical2.slug}`}>
                  <img
                    src={vertical2.image}
                    alt={vertical2.title}
                    className="img-fluid w-100 rounded mb-2"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                </Link>
                <p className="fw-bold text-muted mb-2">{vertical2.title}</p>
                <p className="text-muted small">{vertical2.shortdescription.slice(0, 100)}...</p>
              </div>
            </div>

            {/* ----------- Second Section ----------- */}
            <div className="row pt-2">
              {/* Top-right horizontals */}
              <div className="col-lg-6">
                {horizontals3.map((article, idx) => (
                  <div key={idx} className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}>
                    <p className="fw-bold">{article.title}</p>
                    <div className="row">
                      <div className="col-lg-8">
                        <p className="text-muted small">{article.shortdescription.slice(0, 100)}</p>
                      </div>
                      <div className="col-lg-4">
                        <Link href={`/${category}/${article.slug}`}>
                          <img src={article.image} alt={article.title} className="img-fluid w-100 rounded" style={{ objectFit: "cover" }} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Left vertical */}
              <div className="col-lg-6 border-end p-3">
                <Link href={`/${category}/${vertical3.slug}`}>
                  <img
                    src={vertical3.image}
                    alt={vertical3.title}
                    className="img-fluid w-100 rounded mb-2"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                </Link>
                <p className="fw-bold text-muted mb-2">{vertical3.title}</p>
                <p className="text-muted small">{vertical3.shortdescription.slice(0, 100)}...</p>
              </div>

              {/* Bottom-left vertical */}
              <div className="col-lg-6 border-end p-3 border-top">
                <Link href={`/${category}/${vertical4.slug}`}>
                  <img
                    src={vertical4.image}
                    alt={vertical4.title}
                    className="img-fluid w-100 rounded mb-2"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                </Link>
                <p className="fw-bold text-muted mb-2">{vertical4.title}</p>
                <p className="text-muted small">{vertical4.shortdescription.slice(0, 100)}...</p>
              </div>

              {/* Bottom-right horizontals */}
             <div className="col-lg-6 border-top border-end">
  {horizontals4.map((article, idx) => (
    <div key={idx} className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}>
      <p className="fw-bold">{article.title}</p>
      <div className="row">
        <div className="col-lg-8">
          <p className="text-muted small">
            {article.shortdescription.slice(0, 100)}
          </p>
        </div>
        <div className="col-lg-4">
          <Link href={`/${category}/${article.slug}`}>
            <div className="img-wrapper rounded overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-lg-4">
          <div className="container py-5">
            <MatchCard
              teamA={{ name: "Cowboys", logo: "/images/cow.svg", rank: "13th" }}
              teamB={{ name: "Dragons", logo: "/images/dragon.svg", rank: "11th" }}
              date="Fri 25 July"
              time="1:30 pm"
              summary={[
                "Head-to-Head - 39 games played. Cowboys 22 wins – Dragons 17 wins.",
                "The Cowboys have won their last 5 matches against the Dragons – since 2021.",
              ]}
              readMoreLink="/match-preview/cowboys-vs-dragons"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderCategorySection;
