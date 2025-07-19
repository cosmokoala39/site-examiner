import React from "react";

interface ArticleProps {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
}

function Last({ image, title, slug, shortdescription }: ArticleProps) {
  return (
    <div className="">
      <div className="row  pt-5  ">

      {/* ----------------------------------------------------------------------------------1st---------------------------- */}

        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
            breacking
          </p>

          <p className="fw-bold"> {title}</p>

          <div className="div h-25">
            {" "}
            <img
              src={image}
              alt={title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            />
          </div>
          <div className="div">
            <p> {shortdescription.slice(0, 30)}</p>
          </div>
        </div>

        {/* -----------horizontal-------------- */}
        <div className="col-lg-6 p-3 ">
          {/* -----------1st horiz-------------- */}
          <div className="border-bottom ">
            <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
              breacking
            </p>
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

          {/* -----------2nd horiz-------------- */}
          <div className=" ">
            <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
              breacking
            </p>
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




        {/* -----------------------------------------------------------------------------------------2nd reverse--------------------- */}


      <div className="row   ">
        {/* -----------horizontal-------------- */}

        <div className="col-lg-6 p-3 ">
          {/* -----------1st-------------- */}
          <div className="border-bottom ">
            <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
              breacking
            </p>
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
          <div className=" ">
            <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
              breacking
            </p>
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

        {/* -------------------Reverse--------------------- */}
        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
            breacking
          </p>

          <p className="fw-bold"> {title}</p>

          <div className="div h-25">
            {" "}
            <img
              src={image}
              alt={title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            />
          </div>
          <div className="div">
            <p> {shortdescription.slice(0, 30)}</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>


      {/* -----------------------------------------------------------------------------------3rd------------------- */}

       <div className="row   ">

      {/* ----------------------1st---------------------------- */}

        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
            breacking
          </p>

          <p className="fw-bold"> {title}</p>

          <div className="div h-25">
            {" "}
            <img
              src={image}
              alt={title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            />
          </div>
          <div className="div">
            <p> {shortdescription.slice(0, 30)}</p>
          </div>
        </div>

        {/* -----------horizontal-------------- */}
        <div className="col-lg-6 p-3 ">
          {/* -----------1st horiz-------------- */}
          <div className="border-bottom ">
            <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
              breacking
            </p>
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

          {/* -----------2nd horiz-------------- */}
          <div className=" ">
            <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
              breacking
            </p>
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


        {/* -----------------------------------------------------------------------------------------4th reverse--------------------- */}


      <div className="row   ">
        {/* -----------horizontal-------------- */}

        <div className="col-lg-6 p-3 ">
          {/* -----------1st-------------- */}
          <div className="border-bottom ">
            <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
              breacking
            </p>
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
          <div className=" ">
            <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
              breacking
            </p>
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

        {/* -------------------Reverse--------------------- */}
        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
            breacking
          </p>

          <p className="fw-bold"> {title}</p>

          <div className="div h-25">
            {" "}
            <img
              src={image}
              alt={title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            />
          </div>
          <div className="div">
            <p> {shortdescription.slice(0, 30)}</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>



      {/* -----------------------------------------------------------------------------------5th--------------------------------- */}

       <div className="row   ">

      {/* ----------------------1st---------------------------- */}

        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
            breacking
          </p>

          <p className="fw-bold"> {title}</p>

          <div className="div h-25">
            {" "}
            <img
              src={image}
              alt={title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            />
          </div>
          <div className="div">
            <p> {shortdescription.slice(0, 30)}</p>
          </div>
        </div>

        {/* -----------horizontal-------------- */}
        <div className="col-lg-6 p-3 ">
          {/* -----------1st horiz-------------- */}
          <div className="border-bottom ">
            <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
              breacking
            </p>
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

          {/* -----------2nd horiz-------------- */}
          <div className=" ">
            <p className=" breacking d-inline-block  px-2 py-1 rounded-pill ">
              breacking
            </p>
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

      
    </div>
  );
}

export default Last;
