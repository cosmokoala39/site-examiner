import React from "react";
import Featured from "@/Home/Featured";
import BreackingNEws from "@/Home/BreackiingNews";
import LatestNews from "@/Home/LatestNews";
import NewsCard from "@/Home/NewsCard";
import RepeatPage from "@/Home/Repeat";

// JSON imports
import businessJson from "@/data/business.json";
import politicsJson from "@/data/politics.json";
import healthJson from "@/data/health.json";
import sportsJson from "@/data/sports.json";
import scienceJson from "@/data/science.json";
import technologyJson from "@/data/technology.json";
import National from "@/Home/ReUsable/National";
import Sports from "@/Home/ReUsable/Sports";
import Politics from "@/Home/ReUsable/Politics";
import Science from "@/Home/ReUsable/Science";
import Health from "@/Home/ReUsable/Health";

// ✅ Add these inline type definitions (or import from "@/types" if you created it separately)
type Article = {
  image: string;
  title: string;
  slug: string;
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
  const technologySection = createCategoryData(
    "technology",
    technologyJson as Article[]
  );

  return (
    <div className="container p-3">
      <div className="row">
        {/* Left Section */}
        <div className="col-lg-8 border-end">
          <Featured data={businessSection} />

          <BreackingNEws data={politicsSection} />

          <RepeatPage data={politicsSection} />
        </div>

        {/* Right Section */}
        <div className="col-lg-4">
          <div className="divider"></div>
          <p className="fw-bold align-items-center p-2">Latest News</p>

          {businessJson.slice(2, 8).map((item, index) => (
            <LatestNews
              key={index}
              image={item.image}
              title={item.title}
              shortdescription={item.shortdescription}
              slug={item.slug}
            />
          ))}
        </div>

        {/* NewsCard */}
        <NewsCard />
       

        {/* ---------------------------------Bottom Section */}
        <div className="col-lg-8 border-end">
          <National data={politicsSection}/>
           <Sports data={sportsSection}/>
           <Politics data={politicsSection}/>
           <Science data={scienceSection}/>
           <Health data={healthSection}/>
       
        </div>
      </div>
    </div>
  );
}

export default Page;
