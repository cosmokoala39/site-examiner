// components/CategoryPage.tsx
import Link from "next/link";
import React from "react";
import Image from "next/image";
import NewsCardGrid from "../Home/NewsCard";



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
  if (!articles || articles.length === 0) {
    return <p className="text-center text-muted">No articles found.</p>;
  }

  // console.log("Rendering with", articles.length, "articles");
  

  const vertical1 = articles[0];
  // console.log("vertical1:",vertical1)
  const horizontals1 = articles.slice(1, 3);
  const vertical2 = articles[3];
  const horizontals2 = articles.slice(4, 6);

  return (
    <div className="div">  
    <div className="row border-bottom">
      <div className="col-lg">
         <div className="px-4 pt-6 pb-3 border-b border-gray-200">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">{category}</h1>
      <div className="flex hhh77 overflow-x-auto scrollbar-hide">
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
    </div></div></div> 
     <div className="row">
      <div className="col-lg-8">
       
    <div className="container">
      {/* Top ad image */}
      <div className="my-4 text-center">
        <Image
          src="/images/Ads.jpg"
          alt="Advertisement"
          width={728}
          height={90}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

    

      {/* Article Grid Layout */}
      <div className="row pt-2">
        {/* Left vertical */}
        <div className="col-lg-6 border-end p-3">
          
          <div className="mb-2">
            <Link href={`/${category}/${vertical1.slug}`}>
              <img
                src={vertical1.image}
                alt={vertical1.title}
                className="img-fluid w-100 rounded"
                style={{ height: "220px", objectFit: "cover" }}
              />
            </Link>
          </div>
          <p className="fw-bold text-muted mb-2" style={{ fontFamily: 'Merriweather, serif' }}>{vertical1.title}</p>
          <p className="text-muted small mb-0 " style={{ fontFamily: 'Merriweather, serif' }}>{vertical1.shortdescription.slice(0, 100)}...</p>
          <p className="text-muted mb-2 small" style={{ fontFamily: 'Merriweather, serif' }}>Author</p>
        </div>

        {/* Top-right horizontal pair */}
        <div className="col-lg-6">
          {horizontals1.map((article, idx) => (
            <div key={idx} className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}>
              <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}>{article.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{article.shortdescription.slice(0, 100)}</p>
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${category}/${article.slug}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="img-fluid w-100 rounded"
                      style={{  objectFit: "cover" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
         {/* Bottom-right horizontal pair */}
        <div className="col-lg-6 border-top">
          {horizontals2.map((article, idx) => (
            <div key={idx} className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}>
              <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}>{article.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{article.shortdescription.slice(0, 100)}</p>
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${category}/${article.slug}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="img-fluid w-100 rounded"
                      style={{  objectFit: "cover" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom-left vertical */}
        <div className="col-lg-6 border-end p-3 border-top border-bottom">
          <p className="fw-bold text-muted mb-2" style={{ fontFamily: 'Merriweather, serif' }}>{vertical2.title}</p>
          <div className="mb-2">
            <Link href={`/${category}/${vertical2.slug}`}>
              <img
                src={vertical2.image}
                alt={vertical2.title}
                className="img-fluid w-100 rounded"
                style={{ height: "220px", objectFit: "cover" }}
              />
            </Link>
          </div>
          <p className="text-muted small mb-0 small" style={{ fontFamily: 'Merriweather, serif' }}>{vertical2.shortdescription.slice(0, 100)}...</p>
          <p className="text-muted mb-2 small" style={{ fontFamily: 'Merriweather, serif' }}>Author</p>
        </div>

       
      </div>

      {/* --------------------2nd--------------- */}
      <div className="row pt-2">
       

        {/* Top-right horizontal pair */}
        <div className="col-lg-6">
          {horizontals1.map((article, idx) => (
            <div key={idx} className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}>
              <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}>{article.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{article.shortdescription.slice(0, 100)}</p>
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${category}/${article.slug}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="img-fluid w-100 rounded"
                      style={{  objectFit: "cover" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
         {/* Left vertical */}
        <div className="col-lg-6 border-end p-3">
          <p className="fw-bold text-muted mb-2" style={{ fontFamily: 'Merriweather, serif' }}>{vertical1.title}</p>
          <div className="mb-2">
            <Link href={`/${category}/${vertical1.slug}`}>
              <img
                src={vertical1.image}
                alt={vertical1.title}
                className="img-fluid w-100 rounded"
                style={{ height: "220px", objectFit: "cover" }}
              />
            </Link>
          </div>
          <p className="text-muted small mb-0 small" style={{ fontFamily: 'Merriweather, serif' }}>{vertical1.shortdescription.slice(0, 100)}...</p>
          <p className="text-muted mb-2 small" style={{ fontFamily: 'Merriweather, serif' }}>Author</p>
        </div>

        {/* Bottom-left vertical */}
        <div className="col-lg-6 border-end p-3 border-top">
          <p className="fw-bold text-muted mb-2" style={{ fontFamily: 'Merriweather, serif' }}>{vertical2.title}</p>
          <div className="mb-2">
            <Link href={`/${category}/${vertical2.slug}`}>
              <img
                src={vertical2.image}
                alt={vertical2.title}
                className="img-fluid w-100 rounded"
                style={{ height: "220px", objectFit: "cover" }}
              />
            </Link>
          </div>
          <p className="text-muted small mb-0" style={{ fontFamily: 'Merriweather, serif' }}>{vertical2.shortdescription.slice(0, 100)}...</p>
          <p className="text-muted mb-2 small" style={{ fontFamily: 'Merriweather, serif' }}>Author</p>
        </div>

        {/* Bottom-right horizontal pair */}
        <div className="col-lg-6 border-top">
          {horizontals2.map((article, idx) => (
            <div key={idx} className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}>
              <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}>{article.title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{article.shortdescription.slice(0, 100)}</p>
                  <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${category}/${article.slug}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="img-fluid w-100 rounded"
                      style={{  objectFit: "cover" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
     </div>
    <NewsCardGrid />
    </div>
  );
}

export default RenderCategorySection;
