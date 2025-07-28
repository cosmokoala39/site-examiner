"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/examiner-head.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScreen);
    checkScreen();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "auto";
  }, [isDrawerOpen]);

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
            {/* LEFT */}
            <div className="col-2 col-md-4 d-flex align-items-center gap-3">
              <i
                className="bi bi-list fs-4 d-md-none"
                onClick={() => setIsDrawerOpen(true)}
                style={{ cursor: "pointer" }}
              ></i>
              <div className="d-none d-md-flex align-items-center gap-3">
                <i
                  className="bi bi-list fs-4"
                  onClick={() => setIsDrawerOpen(true)}
                  style={{ cursor: "pointer" }}
                ></i>
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

            {/* RIGHT */}
            <div className="col-2 col-md-4 d-none d-md-flex justify-content-end align-items-center gap-3">
              <button
                className="btn btn-danger px-2 fw-normal"
                style={{ paddingTop: "6px", paddingBottom: "6px", fontSize: "0.75rem" }}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SLIDE-IN DRAWER */}
      <div
        className="position-fixed top-0 start-0 h-100 bg-white shadow"
        style={{
          width: isDesktop ? "320px" : "100%",
          zIndex: 1050,
          transform: isDrawerOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          maxWidth: "100vw",
          overflowY: "scroll",
          maxHeight: "100vh",

          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Drawer Header */}
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
          <i
            className="bi bi-x fs-4"
            style={{ cursor: "pointer" }}
            onClick={() => setIsDrawerOpen(false)}
          ></i>
        </div>

        {/* Categories */}
        <ul className="list-unstyled px-4 mt-4">
          {items.map((item, index) => (
            <li key={index} className="mb-3">
              <Link
                href={item.href}
                className="d-block text-dark text-decoration-none fw-semibold fs-5"
                onClick={() => setIsDrawerOpen(false)}
                style={{ padding: "4px 0", transition: "color 0.2s ease" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <hr className="mx-4 my-3" />

        {/* Social Links */}
        <div className="px-4 d-flex flex-column gap-3 mb-4">
          <a href="https://facebook.com" target="_blank" className="text-dark d-flex align-items-center gap-2 text-decoration-none">
            <i className="bi bi-facebook fs-5"></i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" className="text-dark d-flex align-items-center gap-2 text-decoration-none">
            <i className="bi bi-twitter-x fs-5"></i> Twitter
          </a>
          <a href="https://instagram.com" target="_blank" className="text-dark d-flex align-items-center gap-2 text-decoration-none">
            <i className="bi bi-instagram fs-5"></i> Instagram
          </a>
          <a href="https://youtube.com" target="_blank" className="text-dark d-flex align-items-center gap-2 text-decoration-none">
            <i className="bi bi-youtube fs-5"></i> YouTube
          </a>
        </div>
      </div>

      {/* OVERLAY */}
      {isDrawerOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", zIndex: 1040 }}
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
