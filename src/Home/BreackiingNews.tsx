import React from "react";

interface ArticleProps {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
}

function BreackingNEws({ image, title, slug, shortdescription }: ArticleProps) {
  return (
    <div className="div">
      <div className="row   ">
        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          {/* Top labels: Breaking + Title */}
         
          <p className="fw-bold text-muted mb-2">{title}</p>

          {/* Image */}
          <div className="mb-2">
            <img
              src={image}
              alt={title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            />
          </div>

          {/* Text under image */}
          <p className="text-muted small mb-0">
            {shortdescription.slice(0, 100)}...
          </p>
          <p className=" text-muted mb-2">Author</p>
        </div>

        {/* -----------horizontal-------------- */}

        <div className="col-lg-6  ">
          {/* -----------1st-------------- */}
          <div className="border-bottom p-3">
          
            <p className="fw-bold"> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* -----------2nd-------------- */}
          <div className=" p-3">
        
            <p className="fw-bold"> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      {/* -------------lower-------------- */}
      <div className="row ">
        {/* -----------1st-------------- */}
        <div className="col-lg-6  border-end p-3">
          <div className=" ">
          
            <p className="fw-bold"> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* -----------2nd-------------- */}
        <div className="col-lg-6">
          <div className="p-3 ">
          
            <p className="fw-bold"> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="divider"></div>

      {/* ---------------horizontal one------- */}
      <div className="row p-5">
        <div className="col-lg-9">
        
          <p className="fw-bold text-muted"> {title}</p>
          <p className="text-muted"> jel maco</p>
        </div>
        <div className="col-lg-3">
          {" "}
          <img
            src={image}
            alt={title}
            className="img-fluid w-100 rounded"
            style={{ height: "140px", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default BreackingNEws;
