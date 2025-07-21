import Featured from "@/Home/Featured";
import React from "react";
import business from "../data/business.json";
import BreackingNEws from "@/Home/BreackiingNews";
import Repeat from "@/Home/Repeat";
import LatestNews from "@/Home/LatestNews";
import NewsCard from "@/Home/NewsCard";
import Last from "@/Home/Last";
import RepeatPage from "@/Home/Repeat";

function page() {
  return (
    <div className="container p-3">
      <div className="row ">
        {/* -----------left--------------- */}
        <div className="col-lg-8 border-end   ">
          <Featured
            image={business[9].image}
            title={business[9].title}
            shortdescription={business[9].shortdescription}
            slug={business[9].slug}
          />
          <BreackingNEws
            image={business[2].image}
            title={business[2].title}
            shortdescription={business[2].shortdescription}
            slug={business[2].slug}
            
            
          />

          {/* ---------------------------------------------------repeat------------- */}
          <RepeatPage
            image={business[2].image}
            title={business[2].title}
            shortdescription={business[2].shortdescription}
            slug={business[2].slug}
            category={business[2].category}
          />

          {/* ---------------------------------------------------Cards------------- */}


         
        </div>

        

        {/* ------------------------------------------------------------------------------------------------------right---------------- */}
        <div className="col-lg-4">
          <div className="divider"></div>

          <p className="fw-bold align-items-center p-2">Latest News</p>

          <LatestNews
            image={business[2].image}
            title={business[2].title}
            shortdescription={business[2].shortdescription}
            slug={business[2].slug}
          />

          <LatestNews
            image={business[3].image}
            title={business[3].title}
            shortdescription={business[3].shortdescription}
            slug={business[3].slug}
          />

          <LatestNews
            image={business[4].image}
            title={business[4].title}
            shortdescription={business[4].shortdescription}
            slug={business[4].slug}
          />

          <LatestNews
            image={business[5].image}
            title={business[5].title}
            shortdescription={business[5].shortdescription}
            slug={business[5].slug}
          />

          <LatestNews
            image={business[6].image}
            title={business[6].title}
            shortdescription={business[6].shortdescription}
            slug={business[6].slug}
          />

          <LatestNews
            image={business[7].image}
            title={business[7].title}
            shortdescription={business[7].shortdescription}
            slug={business[7].slug}
          />
        </div>

        <NewsCard />

        {/* ------------------------------------------------------------------------------------------------------Last---------------- */}

        <div className="col-lg-8 border-end   ">
          <Last
            image={business[8].image}
            title={business[8].title}
            shortdescription={business[8].shortdescription}
            slug={business[8].slug}
            category={business[2].category}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
