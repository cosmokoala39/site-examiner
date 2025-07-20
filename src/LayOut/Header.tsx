"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../public/images/examiner-head.svg";

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

  return (
    <div className="container">
      {/* ✅ Mobile Header */}
      <div className="d-md-none border-1 border-bottom bg-white">
        {/* Top Row */}
        <div className="d-flex align-items-center px-3 border-bottom">
          <i
            className="bi bi-list fs-2"
            onClick={() => setIsMobileNavOpen(true)}
            style={{ cursor: "pointer" }}
          ></i>
          <Link href="/" className="ms-4">
            <Image
              src={logo}
              alt="Logo"
              width={200}
              height={50}
              priority
            />
          </Link>
        </div>

        {/* Weather */}
        <div className="px-3 py-1 d-flex justify-content-between border-1 border-bottom">
          <p className="mb-0 text-muted">
            <small>Friday July 18</small>
          </p>
          <div className="d-flex gap-2">
            <p className="text-danger fw-semibold mb-0">subscribe</p>
            <p className="border-start ps-3 mb-0">login</p>
          </div>
        </div>

        {/* Location */}
        <div className="d-flex justify-content-between py-1 px-3">
          <div>
            <p className="text-black fw-semibold mb-0">kochi</p>
            <p className="mb-0 text-muted">Raining</p>
          </div>
          <div>
            <p className="mb-0">weather</p>
          </div>
        </div>

        {/* Blue banner */}
        <div className="text-center py-2" style={{ backgroundColor: "#DEF0FC", height: "50px" }}>
          <span className="text-primary">
            <a href="#" className="text-decoration-underline text-black">
              The Examiner’s complete view of property
            </a>
          </span>
        </div>

        {/* ✅ Slide-in Mobile Menu */}
        {isMobileNavOpen && (
          <>
            {/* Sidebar */}
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

            {/* Backdrop */}
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

      {/* ✅ Desktop Header */}
      <div className="d-none d-md-block mobile-hd">
        {/* Top Header */}
        <div className="bg-white border-bottom py-4 px-3 d-flex align-items-center justify-content-between flex-wrap">
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-list fs-4"></i>
            <i className="bi bi-search fs-4"></i>
          </div>

          <div className="text-center flex-grow-1">
            <Link href="/">
              <Image
                src={logo}
                alt="The Examiner Logo"
                width={320}
                height={70}
                className="mx-auto"
              />
            </Link>
          </div>

          <div className="d-flex flex-column align-items-center gap-2">
            <div className="d-flex align-items-center gap-3">
              <Button variant="danger" className="px-2 subscribe-btn">
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

        {/* Date and Navigation */}
        <Container fluid className="border-bottom py-0 px-2 bg-white">
          <Row className="align-items-center">
            <Col xs={12} md={8}>
              <Navbar expand="md" className="justify-content-md-end text-black" style={{ fontSize: "0.75rem" }}>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                  <Nav className="ms-md-auto text-center fw-bold gap-3">
                    {navItems.map((item, index) => (
                      <Nav.Link
                        key={index}
                        href={`/${item.slug}`}
                        className="px-2 py-0 text-black fw-normal"
                      >
                        {item.label}
                      </Nav.Link>
                    ))}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>

        {/* Utility Info Section */}
        <Container fluid className="border-top border-bottom border-black py-2 bg-white">
          <Row className="text-center text-md-start">
            <Col xs={12} md={3} className="d-flex align-items-center gap-2 mb-1">
              <i className="bi bi-newspaper fs-2 mb-1"></i>
              <div>
                <p className="mb-0 fw-semibold text-black" style={{ fontSize: "0.75rem" }}>
                  Today’s news highlights
                </p>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                  Read the latest edition online
                </span>
              </div>
            </Col>
            <Col xs={12} md={3} className="d-flex align-items-center gap-2 mb-2">
              <i className="bi bi-grid-3x3-gap-fill fs-2 mb-2"></i>
              <div>
                <strong className="d-block mb-0 text-black" style={{ fontSize: "0.75rem" }}>
                  Puzzle
                </strong>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                  Sign up to stay updated
                </span>
              </div>
            </Col>
            <Col xs={12} md={3} className="d-flex align-items-center gap-2 mb-2">
              <i className="bi bi-envelope fs-2 mb-0"></i>
              <div>
                <strong className="d-block mb-0 text-black" style={{ fontSize: "0.75rem" }}>
                  Newsletters
                </strong>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                  Sign up to stay updated
                </span>
              </div>
            </Col>
            <Col xs={12} md={3} className="d-flex align-items-center gap-2 mb-2">
              <i className="bi bi-fingerprint fs-2 mb-0 text-warning"></i>
              <div>
                <strong className="d-block mb-0 text-black" style={{ fontSize: "0.75rem" }}>
                  ViewJobs
                </strong>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                  Best job opportunities across Australia
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Property Banner */}
        <div className="text-center py-3" style={{ backgroundColor: "#DEF0FC" }}>
          <span className="fw-bold text-primary">
            🏠{" "}
            <a href="#" className="text-decoration-underline text-black">
              The Examiner’s complete view of property
            </a>
          </span>
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
