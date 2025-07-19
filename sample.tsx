import NewsHighlightCard from "@/Home/NewsHighlightCard";
import React from "react";
import business from "./src/data/business.json";
import BreakingNewsCard from "@/Home/BreakingNewsCard";
import HorizontalNews from "@/Home/Horizontal";

function page() {
  return (
    // <div className="flex">
    //   {/* ----------left side----------------- */}
    //   <div className="width80">
    //     {/* ---------featured----------- */}
    //     <div className="div">
    //       <NewsHighlightCard
    //         title={business[0].title}
    //         shortdescription={business[0].shortdescription}
    //         description={business[0].description}
    //         image={business[0].image}
    //         slug={business[0].slug}
    //         category={business[0].category}
    //       />{" "}
    //     </div>

    //     {/* ----------2nd div----------- */}

    //     <div className="d-flex border-bottom  mb-4">
    //       {/* ----------breacking news----------- */}
    //       <div className="">
    //         <BreakingNewsCard
    //           title={business[0].title}
    //           description={business[0].description}
    //           image={business[0].image}
    //           slug={business[0].slug}
    //           category={business[0].category}
    //         />
    //       </div>

    //       {/* ----------HORIZONTAL MAIN----------- */}
    //       <div className="div">
    //         <div className="div">
    //           {" "}
    //           <HorizontalNews
    //             title={business[0].title}
    //             description={business[0].description}
    //             image={business[0].image}
    //             slug={business[0].slug}
    //             category={business[0].category}
    //           />
    //         </div>
    //         <div className="div">
    //           {" "}
    //           <HorizontalNews
    //             title={business[0].title}
    //             description={business[0].description}
    //             image={business[0].image}
    //             slug={business[0].slug}
    //             category={business[0].category}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     {/* ---------------3rd--------------- */}
    //     <div className="d-flex border-bottom  mb-4">
    //       <div className="dv">
    //         {" "}
    //         <HorizontalNews
    //           title={business[0].title}
    //           description={business[0].description}
    //           image={business[0].image}
    //           slug={business[0].slug}
    //           category={business[0].category}
    //         />
    //       </div>
    //       <div className="div">
    //         {" "}
    //         <HorizontalNews
    //           title={business[0].title}
    //           description={business[0].description}
    //           image={business[0].image}
    //           slug={business[0].slug}
    //           category={business[0].category}
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   {/* ----------right side--------- */}
    //   <div className="width20"></div>
    // </div>


     <div className="row px-3">
      <div className="col-lg-9">
         <div className="row">
            <div className="col-lg-6">
                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est excepturi.</h3>
                <img className="img-fluid"  src="https://www.examiner.com.au/images/transform/v1/crop/frm/247626858/11454855-5a53-426e-9cf5-2f1bb1b9a7f9.jpg/r0_297_5555_3414_w720_h404_fmax.webp" alt="" />
            </div>
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et optio aperiam, </p>
                        <div className="row">
                          <div className="col-lg-7">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur.</p>
                          </div>
                          <div className="col-lg-5">
                            <img className="img-fluid"  src="https://www.examiner.com.au/images/transform/v1/crop/frm/247626858/11454855-5a53-426e-9cf5-2f1bb1b9a7f9.jpg/r0_297_5555_3414_w720_h404_fmax.webp" alt="" />
                          </div>
                        </div>
                    
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et optio aperiam</p>
  <div className="row">
                          <div className="col-lg-7">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur.</p>
                          </div>
                          <div className="col-lg-5">
                            <img className="img-fluid"  src="https://www.examiner.com.au/images/transform/v1/crop/frm/247626858/11454855-5a53-426e-9cf5-2f1bb1b9a7f9.jpg/r0_297_5555_3414_w720_h404_fmax.webp" alt="" />
                          </div>
                        </div>                    </div>

                </div>
            </div>
        </div>
      </div>
     </div>
  );
}

export default page;
