import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

interface ArticleProps {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  category: string; // ✅ Added category
}

function Last({
  image,
  title,
  slug,
  shortdescription,
  category,
}: ArticleProps) {
  return (
    <div>
      <Row className="mb-3 pt-5">
        <Col>
          <div className="d-flex align-items-center">
            <h6 className="fw-bold mb-0 me-2 text-capitalize">{category}</h6>
            <div
              style={{
                flexGrow: 1,
                borderTop: "3px solid black",
              }}
            ></div>
          </div>

          <div className="d-flex justify-content-end">
            <a
              href={`/${category}`}
              className="text-decoration-none small mt-1"
              style={{ color: "black" }}
            >
              View all
            </a>
          </div>
        </Col>
      </Row>

      <div className="row pt-2">
        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          <p className="fw-bold text-muted mb-2">{title}</p>
          <div className="mb-2">
            <img
              src={image}
              alt={title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            />
          </div>
          <p className="text-muted small mb-0">
            {shortdescription.slice(0, 100)}...
          </p>
          <p className="text-muted mb-2">Author</p>
        </div>

        {/* -----------horizontal-------------- */}
        <div className="col-lg-6">
          {[1, 2].map((_, idx) => (
            <div
              key={idx}
              className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}
            >
              <p className="fw-bold">{title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                  <p className="text-muted">46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <img
                    src={image}
                    alt={title}
                    className="img-fluid w-100 rounded"
                    style={{ height: "80px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3 border-top">
          <p className="fw-bold text-muted mb-2">{title}</p>
          <div className="mb-2">
            <img
              src={image}
              alt={title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            />
          </div>
          <p className="text-muted small mb-0">
            {shortdescription.slice(0, 100)}...
          </p>
          <p className="text-muted mb-2">Author</p>
        </div>

        {/* -----------horizontal-------------- */}
        <div className="col-lg-6 border-top">
          {[1, 2].map((_, idx) => (
            <div
              key={idx}
              className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}
            >
              <p className="fw-bold">{title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                  <p className="text-muted">46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <img
                    src={image}
                    alt={title}
                    className="img-fluid w-100 rounded"
                    style={{ height: "80px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="divider"></div>

        {/* -------------lower-------------- */}

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
      <div className="row pt-2">
        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          <p className="fw-bold text-muted mb-2">{title}</p>
          <div className="mb-2">
            <Link href={`/${category || "business"}/${slug}`}>
              <img
                src={image}
                alt={title}
                className="img-fluid w-100 rounded"
                style={{ height: "220px", objectFit: "cover" }}
              /></Link>
          </div>
          <p className="text-muted small mb-0">
            {shortdescription.slice(0, 100)}...
          </p>
          <p className="text-muted mb-2">Author</p>
        </div>

        {/* -----------horizontal-------------- */}
        <div className="col-lg-6">
          {[1, 2].map((_, idx) => (
            <div
              key={idx}
              className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}
            >
              <p className="fw-bold">{title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted">{shortdescription.slice(0, 100)}</p>
                  <p className="text-muted">46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${category || "business"}/${slug}`}>
                    <img
                      src={image}
                      alt={title}
                      className="img-fluid w-100 rounded"
                      style={{ height: "80px", objectFit: "cover" }}
                    />{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3 border-top">
          <p className="fw-bold text-muted mb-2">{title}</p>
          <div className="mb-2">
                              <Link href={`/${category || "business"}/${slug}`}>

              <img
                src={image}
                alt={title}
                className="img-fluid w-100 rounded"
                style={{ height: "220px", objectFit: "cover" }}
              /> </Link>
            
          </div>
          <p className="text-muted small mb-0">
            {shortdescription.slice(0, 100)}...
          </p>
          <p className="text-muted mb-2">Author</p>
        </div>

        {/* -----------horizontal-------------- */}
        <div className="col-lg-6 border-top">
          {[1, 2].map((_, idx) => (
            <div
              key={idx}
              className={`p-3 ${idx === 0 ? "border-bottom" : ""}`}
            >
              <p className="fw-bold">{title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted">{shortdescription.slice(0, 100)}</p>
                  <p className="text-muted">46 min ago</p>
                </div>
                <div className="col-lg-4">
                  <Link href={`/${category || "business"}/${slug}`}>
                    <img
                      src={image}
                      alt={title}
                      className="img-fluid w-100 rounded"
                      style={{ height: "80px", objectFit: "cover" }}
                    />{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="divider"></div>

        {/* -------------lower-------------- */}
        <Row className="mb-3 pt-5">
          {/* Title and Line */}
          <Col>
            <div className="d-flex align-items-center">
              <h6 className="fw-bold mb-0 me-2">National</h6>
              <div
                style={{
                  flexGrow: 1,
                  borderTop: "3px solid black", // ⬅ Black, thicker line
                }}
              ></div>
            </div>

            {/* View All Under End of Line */}
            <div className="d-flex justify-content-end">
              <a
                href="#"
                className="text-decoration-none  small mt-1"
                style={{ color: "black" }}
              >
                View all
              </a>
            </div>
          </Col>
        </Row>

        <div className="row  pt-2  ">
          {/* ----------------------------------------------------------------------------------1st---------------------------- */}

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
          <div className="col-lg-6 ">
            {/* -----------1st horiz-------------- */}
            <div className="border-bottom p-3 ">
              <p className="fw-bold"> {title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                  <p className="text-muted">46 mint ago</p>
                </div>
                <div className="col-lg-4">
                  {" "}
                  <Link href={`/${category || "business"}/${slug}`}>
                    <img
                      src={image}
                      alt={title}
                      className="img-fluid w-100 rounded"
                      style={{ height: "80px", objectFit: "cover" }}
                    />{" "}
                  </Link>
                </div>
              </div>
            </div>

            {/* -----------2nd horiz-------------- */}
            <div className="p-3 ">
              <p className="fw-bold"> {title}</p>
              <div className="row">
                <div className="col-lg-8">
                  <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                  <p className="text-muted">46 mint ago</p>
                </div>
                <div className="col-lg-4">
                  {" "}
                  <Link href={`/${category || "business"}/${slug}`}>
                    <img
                      src={image}
                      alt={title}
                      className="img-fluid w-100 rounded"
                      style={{ height: "80px", objectFit: "cover" }}
                    />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Last;
