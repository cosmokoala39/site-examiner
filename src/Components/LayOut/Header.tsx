"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../../public/images/examiner-head.svg";

const navItems = [
  { label: "Business", slug: "business" },
  { label: "Technology", slug: "technology" },
  { label: "Sports", slug: "sports" },
  { label: "Health", slug: "health" },
  { label: "Science", slug: "science" },
  { label: "Politics", slug: "politics" },
];

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const currentDate = new Date().toLocaleDateString("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="container">
      {/* ✅-------------------------------------------------------- Mobile Header------------------------ */}
      <div className="d-md-none border-bottom bg-white">
        {/* Top Row: Menu, Logo */}
        <div className="d-flex justify-content-between align-items-center px-3 py-2">
          <i
            className="bi bi-list fs-2"
            onClick={() => setIsMobileNavOpen(true)}
            style={{ cursor: "pointer" }}
          ></i>
          <Link href="/" className="text-center">
            <Image src={logo} alt="Logo" width={180} height={40} priority />
          </Link>
          <div style={{ width: "32px" }} /> 
        </div>

        {/*----------- Date + Subscribe + Login -----------*/}
        <div className="d-flex justify-content-between align-items-center px-3 py-1 border-top border-bottom">
          <div className="text-muted" style={{ fontSize: "0.8rem" }}>
            {currentDate}
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="text-danger fw-semibold" style={{ fontSize: "0.8rem" }}>
              Subscribe
            </span>
            <span className="text-dark" style={{ fontSize: "0.8rem" }}>
              Log in
            </span>
          </div>
        </div>

        {/*----------- Weather Info -----------*/}
        <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
          <div>
            <p className="mb-0 fw-semibold text-dark" style={{ fontSize: "0.9rem" }}>
              Launceston
            </p>
            <p className="mb-0 text-muted" style={{ fontSize: "0.8rem" }}>
              Mostly cloudy
            </p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-cloud fs-4 text-secondary"></i>
            <div className="text-end">
              <div className="fw-semibold text-dark" style={{ fontSize: "1rem" }}>
                11.9°
              </div>
              <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                2° / 15°
              </div>
            </div>
          </div>
        </div>

        {/*--------------- Double Line + Blue Banner -----------*/}
        <div style={{ borderTop: "3px double #000" }}>
          <div className="d-flex align-items-center gap-2 px-3 py-2" style={{ backgroundColor: "#DEF0FC" }}>
            <i className="bi bi-house-door-fill fs-4 text-primary"></i>
            <a href="#" className="text-decoration-underline text-black fw-semibold" style={{ fontSize: "0.85rem" }}>
              The Examiner's complete view of property
            </a>
          </div>
        </div>

        {/* ------------------------------------------------------------------Slide-in Mobile Menu ------------------*/}
        {isMobileNavOpen && (
          <>
            <div
              className="mobile-nav-sidebar"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "250px",
                height: "100vh",
                backgroundColor: "#fff",
                boxShadow: "2px 0 5px rgba(0,0,0,0.3)",
                zIndex: 1050,
                padding: "1rem",
                animation: "slideIn 0.3s ease-out forwards",
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0">Menu</h5>
                <i
                  className="bi bi-x-lg fs-5"
                  onClick={() => setIsMobileNavOpen(false)}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.slug}`}
                  className="d-block py-2 text-dark fw-semibold border-bottom text-decoration-none"
                  style={{ fontSize: "0.95rem" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div
              className="mobile-nav-backdrop"
              onClick={() => setIsMobileNavOpen(false)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.4)",
                zIndex: 1040,
              }}
            ></div>
          </>
        )}
      </div>

      {/* ✅--------------------------------------------------------------- Desktop Header----------------------- */}
      <div className="d-none d-md-block mobile-hd">
        {/* -----------Top Header------------ */}
        <div className="bg-white border-bottom py-4 px-3 d-flex align-items-center justify-content-between flex-wrap">
          <div className="d-flex flex-column align-items-start gap-1">
            <div className="d-flex align-items-center gap-3">
              <i className="bi bi-list fs-4"></i>
              <i className="bi bi-search fs-4"></i>
            </div>
            <div>
              <small className=" fw-bold text-small">{currentDate}</small>
            </div>
          </div>

          <div className="text-center flex-grow-1">
            <Link href="/">
              <Image src={logo} alt="The Examiner Logo" width={320} height={70} className="mx-auto" />
            </Link>
          </div>

          <div className="d-flex flex-column align-items-center gap-2">
            <div className="d-flex align-items-center gap-3">
              <Button variant="danger" className="px-2 py-1" style={{ fontSize: "0.75rem" }}>
                SUBSCRIBE
              </Button>
              <a href="#" className="text-dark text-decoration-none fw-bold">
                Log In
              </a>
            </div>
            <div className="text-center">
              <div className="fs-6">☀️ 11.1° 2° / 13°</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
       
 <div className="row">
  <div className="col-lg">
    <ul className="nav-link02 d-flex gap-4 list-unstyled">
      {navItems.map((item, index) => (
        <li key={index}>
          <a
            href={`/${item.slug}`}
            className="text-decoration-none"
            style={{ color: '#333', fontSize: '0.8rem', fontWeight: '500' }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>



        {/* Utility Info Section */}
        <Container fluid className="border-top  border-black py-1 bg-white">
          <Row className="text-center text-md-start">
            <Col xs={12} md={3} className="d-flex align-items-center gap-2  border-end">
              <i className="bi bi-newspaper fs-2 mb-1"></i>
              <div className="info">
                <p className="mb-0 fw-semibold text-black" style={{ fontSize: "0.75rem" }}>
                  Today’s news highlights
                </p>
                <span className="text-muted" style={{ fontSize: "0.7rem" }}>
                  Read the latest edition online
                </span>
              </div>
            </Col>
            <Col xs={12} md={3} className="d-flex align-items-center gap-2  border-end">
              <i className="bi bi-grid-3x3-gap-fill fs-2 mb-2"></i>
              <div className="info">
                <strong className="d-block mb-0 text-black" style={{ fontSize: "0.70rem" }}>
                  Puzzle
                </strong>
                <span className="text-muted" style={{ fontSize: "0.7rem" }}>
                  Test your skills with crossword, Sudoku and ultimate Trivia
                </span>
              </div>
            </Col>
            <Col xs={12} md={3} className="d-flex align-items-center gap-2  border-end">
              <i className="bi bi-envelope fs-2 mb-0"></i>
              <div className="info">
                <strong className="d-block mb-0 text-black" style={{ fontSize: "0.75rem" }}>
                  Newsletters
                </strong>
                <span className="text-muted" style={{ fontSize: "0.7rem" }}>
                  Sign up to newsletters tailored to your intrests
                </span>
              </div>
            </Col>
            <Col xs={12} md={3} className="d-flex align-items-center gap-2  ">
              <i className="bi bi-fingerprint fs-2 mb-0 text-warning"></i>
              <div className="info">
                <strong className="d-block mb-0 text-black" style={{ fontSize: "0.75rem" }}>
                  ViewJobs 
                </strong>
                <span className="text-muted" style={{ fontSize: "0.7rem" }}>
                  ViewJobs Brings you the best job oppertunities across Australia
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Double Line + Blue Banner */}
        <div style={{ borderTop: "4px double #000" }}>
          <div className="text-center py-3" style={{ backgroundColor: "#DEF0FC" }}>
            <span className="fw-normal text-primary">
              🏠{" "}
              <a href="#" className="text-decoration-underline text-black">
                The Examiner’s complete view of property
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* ✅ Animation */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
