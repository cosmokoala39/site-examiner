import React from "react";
import Featured from "@/Components/Home/Featured";
import BreackingNEws from "@/Components/Home/BreackiingNews";
import LatestNews from "@/Components/Home/LatestNews";
import NewsCard from "@/Components/Home/NewsCard";
import RepeatPage from "@/Components/Home/Repeat";

// JSON imports
import technologyJson from "@/data/technology.json";
import businessJson from "@/data/business.json";
import politicsJson from "@/data/politics.json";
import healthJson from "@/data/health.json";
import sportsJson from "@/data/sports.json";
import scienceJson from "@/data/science.json";
import National from "@/Components/Home/ReUsable/National";
import Sports from "@/Components/Home/ReUsable/Sports";
import Politics from "@/Components/Home/ReUsable/Politics";
import Science from "@/Components/Home/ReUsable/Science";
import Health from "@/Components/Home/ReUsable/Health";
import ImageCarousel from "@/Components/Home/ImageCarousel";
import HeartFoundationCard from "@/Components/HeartFoundationCard";

const businessItems = businessJson.map((item, i) => ({
  id: i,
  title: item.title,
  image: item.image,
  tag: item.category,
  time: "Jul 23, 2025",
  slug: item.slug,
}));

// ✅ Add these inline type definitions (or import from "@/types" if you created it separately)
type Article = {
  image: string;
  title: string;
  slug: string;
  date:string;
  shortdescription: string;
  category?: string;
};

type CategoryData = {
  category: string;
  articles: Article[];
};

// ✅ Function to create CategoryData
const createCategoryData = (
  category: string,
  articles: Article[]
): CategoryData => ({
  category,
  articles,
});

function Page() {
  // Category sections
  const businessSection = createCategoryData(
    "business",
    businessJson as Article[]
  );

  const technologyData = createCategoryData(
    "technology",
    technologyJson as Article[]
  );
  const politicsSection = createCategoryData(
    "politics",
    politicsJson as Article[]
  );
  const healthSection = createCategoryData("health", healthJson as Article[]);
  const sportsSection = createCategoryData("sports", sportsJson as Article[]);
  const scienceSection = createCategoryData(
    "science",
    scienceJson as Article[]
  );

  return (
    <div className="container p-3">
      <div className="row">
        {/* Left Section */}
        <div className="col-lg-8 border-end">
          <Featured data={businessSection} />

          <BreackingNEws data={sportsSection} />

          <RepeatPage data={scienceSection} />
        </div>

        {/* Right Section */}
        <div className="col-lg-4 pt-3">
       
          <p className="fw-bold align-items-center pt-2 border-top border-2 border-dark">
            Latest News
          </p>

          {businessJson.slice(8,12 ).map((item, index) => (
            <LatestNews
              key={index}
              image={item.image}
              title={item.title}
              shortdescription={item.shortdescription}
              slug={item.slug}
              date={item.date}
            />
          ))}
              {/* ---------------------- Sidebar ------------------- */}
        <div className=" d-none d-lg-block str mt-5">
         <HeartFoundationCard/>
        </div>
          
        </div>

        {/* NewsCard */}
        <NewsCard data={businessJson} />
         <ImageCarousel data={scienceJson}
      />

        {/* ---------------------------------Bottom Section */}
        
        
        <div className="col-lg-8 border-end">
          <National data={technologyData} />
         
          <Sports data={sportsSection} />
          <Politics data={politicsSection} />
          <Science data={scienceSection} />
          <Health data={healthSection} />

          
        </div>

        
          
          
      
      </div>
      
    </div>
  );
}

export default Page;
