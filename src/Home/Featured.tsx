import React from "react";

interface ArticleProps {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
}

function Featured({ image, title, slug, shortdescription }: ArticleProps) {
  return (
    <div className=" pb-3 ">
        
      <div className="row">
        <div className="col-lg-5">
              <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">breacking</p>
          <p className="fw-bold fs-3">{title}</p>
          <p className="fw-bold text-muted">{shortdescription.slice(0, 100)}</p>
        </div>

        <div className="col-lg-7">
          <img
            src={image}
            alt={title}
            className="img-fluid w-100 rounded"
            style={{ height: "220px", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Featured;
