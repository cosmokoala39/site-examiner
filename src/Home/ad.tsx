import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

interface ArticleProps {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  category:string
}

function Last({ image, title, slug, shortdescription,category }: ArticleProps) {
  return (
    <div className="">
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


        {/* -----------horizontal-------------- */}
        <div className="col-lg-6 ">
          {/* -----------1st horiz-------------- */}
          <div className="border-bottom p-3 ">
           
            <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{shortdescription.slice(0, 100)}</p>
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 mint ago</p>
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
          <div className="p-3 ">
           
            <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted small"style={{ fontFamily: 'Merriweather, serif' }}>{shortdescription.slice(0, 100)}</p>
                <p className="text-muted small" >46 mint ago</p>
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
        <div className="col-lg-6 p-3  border-end">
          <div className=" ">
           
            <p className="fw-bold"style={{ fontFamily: 'Merriweather, serif' }}> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted small"style={{ fontFamily: 'Merriweather, serif' }}>{shortdescription.slice(0, 30)}</p>
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                 <Link href={`/${category || 'business'}/${slug}`}>

                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                /> </Link>
              </div>
            </div>
          </div>
        </div>
        {/* -----------2nd-------------- */}
        <div className="col-lg-6">
          <div className="pt-2 ">
           
            <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{shortdescription.slice(0, 30)}</p>
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                 <Link href={`/${category || 'business'}/${slug}`}>

                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                /> </Link>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>

      <Row className="mb-3 pt-5">
        {/* Title and Line */}
        <Col>
          <div className="d-flex align-items-center">
            <h6 className="fw-bold mb-0 me-2">Health</h6>
            <div
              style={{
                flexGrow: 1,
                borderTop: "2px solid grey", // ⬅ Black, thicker line
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


      {/* -------------lower-------------- */}
      <div className="row ">
        {/* -----------1st-------------- */}
        <div className="col-lg-6 p-3  border-end">
          <div className=" ">
          
            <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{shortdescription.slice(0, 100)}</p>
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>46 mint ago</p>
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
          <div className="pt-2 ">
          
            <p className="fw-bold" style={{ fontFamily: 'Merriweather, serif' }}> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted small" style={{ fontFamily: 'Merriweather, serif' }}>{shortdescription.slice(0, 30)}</p>
                <p className="text-muted small"style={{ fontFamily: 'Merriweather, serif' }}>46 mint ago</p>
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
      <Row className="mb-3 pt-5">
        {/* Title and Line */}
        <Col>
          <div className="d-flex align-items-center">
            <h6 className="fw-bold mb-0 me-2">news</h6>
            <div
              style={{
                flexGrow: 1,
                borderTop: "2px solid grey", // ⬅ Black, thicker line
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



    </div>
  );
}

export default Last;
