"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/examiner-head.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { label: "Home", href: "/" },
    { label: "Politics", href: "/politics" },
    { label: "Health", href: "/health" },
    { label: "Sports", href: "/sports" },
    { label: "Science", href: "/science" },
    { label: "Business", href: "/business" },
    { label: "Technology", href: "/technology" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className={`bg-white fixed-top py-2 ${isScrolled ? "shadow-sm" : ""}`}>
        <div className={`px-3 ${isScrolled ? "container-fluid" : "container"}`}>
          <div className="row align-items-center">
            {/* LEFT SECTION */}
            <div className="col-2 col-md-4 d-flex align-items-center gap-3">
              {/* MOBILE MENU BUTTON */}
              <i
                className="bi bi-list fs-4 d-md-none"
                onClick={() => setIsDrawerOpen(true)}
                style={{ cursor: "pointer" }}
              ></i>

              {/* DESKTOP ICONS */}
              <div className="d-none d-md-flex align-items-center gap-3">
                <i className="bi bi-list fs-4"></i>
                <i className="bi bi-search fs-5"></i>
              </div>
            </div>

            {/* CENTER LOGO */}
            <div className="col-8 col-md-4 d-flex justify-content-center">
              <Link href="/" className="d-inline-block">
                <Image
                  src={logo}
                  alt="Examiner Logo"
                  width={180}
                  height={40}
                  className="img-fluid"
                  priority
                />
              </Link>
            </div>

            {/* RIGHT SECTION (DESKTOP ONLY) */}
            <div className="col-2 col-md-4 d-none d-md-flex justify-content-end align-items-center gap-3">
              <button
                className="btn btn-danger px-2 fw-normal"
                style={{
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  fontSize: "0.75rem",
                }}
              >
                SUBSCRIBE
              </button>
              <span className="text-muted">Log In</span>
            </div>
          </div>
        </div>
      </header>

      {/* SLIDE-IN DRAWER FOR MOBILE */}
      <div
        className="position-fixed top-0 start-0 h-100 bg-white shadow d-md-none"
        style={{
          width: "260px",
          zIndex: 1050,
          transform: isDrawerOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* Drawer Header */}
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
          <i
            className="bi bi-x fs-4"
            style={{ cursor: "pointer" }}
            onClick={() => setIsDrawerOpen(false)}
          ></i>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Search"
            style={{ width: "70%" }}
          />
          <i className="bi bi-search ms-2"></i>
        </div>

        {/* Drawer Links */}
        <ul className="list-unstyled px-3 mt-3">
          {items.map((item, index) => (
            <li key={index} className="mb-3 fw-semibold small">
              <Link
                href={item.href}
                className="text-dark text-decoration-none"
                onClick={() => setIsDrawerOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* OVERLAY / BACKDROP */}
      {isDrawerOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1040,
          }}
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
