import React from "react";
import politicsData from "../../../data/politics.json";
import businessData from "../../../data/business.json";
import technologyData from "../../../data/technology.json";
import sportsData from "../../../data/sports.json";
import scienceData from "../../../data/science.json";
import healthData from "../../../data/health.json";

function page() {
  return (
    <div className="container">
      {/* ----------header----------------- */}
      <div className="div"> </div>

      <div className="roe">
        {/* ----------------left----------------- */}
        <div className="col-lg-8">
          <div className="position-relative" style={{ width: "100%", height: "280px" }}>
                      <Image
                        src=''
                        alt=''
                        fill
                        className="rounded "
                        style={{ objectFit: "cover" }}
                      />
                    </div>
        </div>

        {/* ----------------right----------------- */}
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}

export default page;
