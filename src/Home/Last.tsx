import React from "react";
import { Col, Row } from "react-bootstrap";

interface ArticleProps {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
}

function Last({ image, title, slug, shortdescription }: ArticleProps) {
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

        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          {/* Top labels: Breaking + Title */}
          <p className="breacking d-inline-block  px-2 py-1 rounded-pill">
            Breaking
          </p>
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
          <div className="p-3 ">
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
      {/* -------------lower-------------- */}
      <div className="row ">
        {/* -----------1st-------------- */}
        <div className="col-lg-6 p-3  border-end">
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
        {/* -----------2nd-------------- */}
        <div className="col-lg-6">
          <div className="pt-2 ">
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

      {/* -----------------------------------------------------------------------------------------2nd reverse--------------------- */}
      <div className="row   ">
        {/* -----------horizontal-------------- */}

        <div className="col-lg-6 border-end ">
          {/* -----------1st-------------- */}
          <div className="border-bottom p-3">
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
          <div className="p-3 ">
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

        {/* ------------vertical------------ */}
        <div className="col-lg-6  p-3">
          {/* Top labels: Breaking + Title */}
          <p className="breacking d-inline-block  px-2 py-1 rounded-pill">
            Breaking
          </p>
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
      </div>
      <div className="divider"></div>
      {/* -------------lower-------------- */}
      <div className="row border-bottom">
        {/* -----------1st-------------- */}
        <div className="col-lg-6 p-3  border-end">
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
        {/* -----------2nd-------------- */}
        <div className="col-lg-6">
          <div className="pt-2 ">
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
          </div>{" "}
        </div>
      </div>

      {/* -----------------------------------------------------------------------------------3rd------------------- */}
      <div className="row   ">
        {/* ----------------------1st---------------------------- */}

        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          {/* Top labels: Breaking + Title */}
          <p className="breacking d-inline-block  px-2 py-1 rounded-pill">
            Breaking
          </p>
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
          {/* -----------1st horiz-------------- */}
          <div className="border-bottom p-3 ">
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
          <div className="p-3 ">
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

      {/* -------------lower-------------- */}
      <div className="row ">
        {/* -----------1st-------------- */}
        <div className="col-lg-6 p-3  border-end">
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
        {/* -----------2nd-------------- */}
        <div className="col-lg-6">
          <div className="pt-2 ">
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
          </div>{" "}
        </div>
      </div>

      {/* -----------------------------------------------------------------------------------------4th reverse--------------------- */}
      <div className="row   ">
        <Row className="mb-3 pt-5">
          {/* Title and Line */}
          <Col>
            <div className="d-flex align-items-center">
              <h6 className="fw-bold mb-0 me-2">Politics</h6>
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
        {/* -----------horizontal-------------- */}

        <div className="col-lg-6 border-end ">
          {/* -----------1st-------------- */}
          <div className="border-bottom p-3 ">
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
          <div className="p-3 ">
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

        {/* ------------vertical------------ */}
        <div className="col-lg-6  p-3">
          {/* Top labels: Breaking + Title */}
          <p className="breacking d-inline-block  px-2 py-1 rounded-pill">
            Breaking
          </p>
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
      </div>
      <div className="divider"></div>

      {/* -----------------------------------------------------------------------------------5th--------------------------------- */}

      <div className="row   ">
        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          {/* Top labels: Breaking + Title */}
          <p className="breacking d-inline-block  px-2 py-1 rounded-pill">
            Breaking
          </p>
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
          <div className="border-bottom  p-3">
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
          <div className=" p-3">
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

      {/* -------------lower-------------- */}
      <div className="row ">
        {/* -----------1st-------------- */}
        <div className="col-lg-6 p-3  border-end">
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
        {/* -----------2nd-------------- */}
        <div className="col-lg-6">
          <div className="pt-2 ">
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

      {/* -----------====================================================-======================================----------------------================== */}

      {/* -----------------------------------------------------------------------------------------2nd reverse--------------------- */}
      <div className="row   ">
        {/* -----------horizontal-------------- */}

        <div className="col-lg-6  border-end ">
          {/* -----------1st-------------- */}
          <div className="border-bottom p-3">
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
          <div className="p-3 ">
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

        {/* ------------vertical------------ */}
        <div className="col-lg-6 p-3">
          {/* Top labels: Breaking + Title */}
          <p className="breacking d-inline-block  px-2 py-1 rounded-pill">
            Breaking
          </p>
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
      </div>
      <div className="divider"></div>
      {/* -------------lower-------------- */}
      <div className="row ">
        {/* -----------1st-------------- */}
        <div className="col-lg-6 p-3  border-end">
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
        {/* -----------2nd-------------- */}
        <div className="col-lg-6">
          <div className="pt-2 ">
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
          </div>{" "}
        </div>
      </div>
      <div className="divider"></div>

      {/* -----------------------------------------------------------------------------------3rd------------------- */}
      <div className="row   ">
        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          {/* Top labels: Breaking + Title */}
          <p className="breacking d-inline-block  px-2 py-1 rounded-pill">
            Breaking
          </p>
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
          <div className="p-3 ">
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

      {/* -----------------------------------------------------------------------------------------4th reverse--------------------- */}
      <div className="row   ">
        <Row className="mb-3 pt-5">
        {/* Title and Line */}
        <Col>
          <div className="d-flex align-items-center">
            <h6 className="fw-bold mb-0 me-2">Science</h6>
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
        {/* -----------horizontal-------------- */}

        <div className="col-lg-6  border-end">
          {/* -----------1st-------------- */}
          <div className="border-bottom p-3">
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
          <div className="p-3 ">
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

        <div className="col-lg-6  p-3">
          {/* Top labels: Breaking + Title */}
          <p className="breacking d-inline-block  px-2 py-1 rounded-pill">
            Breaking
          </p>
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
      </div>
      <div className="divider"></div>

      {/* -----------------------------------------------------------------------------------5th--------------------------------- */}

      <div className="row   ">
        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          {/* Top labels: Breaking + Title */}
          <p className="breacking d-inline-block  px-2 py-1 rounded-pill">
            Breaking
          </p>
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
          <div className="border-bottom p-3">
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
          <div className="p-3 ">
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
    </div>
  );
}

export default Last;
