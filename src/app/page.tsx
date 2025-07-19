import Featured from "@/Home/Featured";
import React from "react";
import business from "../data/business.json";
import BreackingNEws from "@/Home/BreackiingNews";
import Repeat from "@/Home/Repeat";
import LatestNews from "@/Home/LatestNews";
import NewsCard from "@/Home/NewsCard";
import Last from "@/Home/Last";

function page() {
  return (
    <div className="container p-3">
      <div className="row ">
        {/* -----------left--------------- */}
        <div className="col-lg-8 border-end   ">
          <Featured
            image={business[0].image}
            title={business[0].title}
            shortdescription={business[0].shortdescription}
            slug={business[0].slug}
          />
          <BreackingNEws
            image={business[2].image}
            title={business[2].title}
            shortdescription={business[2].shortdescription}
            slug={business[2].slug}
            
            
          />

          {/* ---------------------------------------------------repeat------------- */}
          <Repeat
            image={business[2].image}
            title={business[2].title}
            shortdescription={business[2].shortdescription}
            slug={business[2].slug}
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
            image={business[2].image}
            title={business[2].title}
            shortdescription={business[2].shortdescription}
            slug={business[2].slug}
          />

          <LatestNews
            image={business[2].image}
            title={business[2].title}
            shortdescription={business[2].shortdescription}
            slug={business[2].slug}
          />

          <LatestNews
            image={business[2].image}
            title={business[2].title}
            shortdescription={business[2].shortdescription}
            slug={business[2].slug}
          />

          <LatestNews
            image={business[2].image}
            title={business[2].title}
            shortdescription={business[2].shortdescription}
            slug={business[2].slug}
          />

          <LatestNews
            image={business[2].image}
            title={business[2].title}
            shortdescription={business[2].shortdescription}
            slug={business[2].slug}
          />
        </div>

         <NewsCard />

        {/* ------------------------------------------------------------------------------------------------------Last---------------- */}


         <div className="col-lg-8 border-end   ">
          <Last image={business[2].image}
            title={business[2].title}
            shortdescription={business[2].shortdescription}
            slug={business[2].slug}/>
         </div>

      </div>
    </div>
  );
}

export default page;
