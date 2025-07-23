"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/examiner-head.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed-top py-2 ${isScrolled ? "shadow-sm" : ""}`}
    >
      <div className={`px-3 ${isScrolled ? "container-fluid" : "container"}`}>
        <div className="row align-items-center">
          {/* LEFT SECTION */}
          <div className="col-2 col-md-4 d-flex align-items-center gap-3">
            <i className="bi bi-list fs-4 d-md-none"></i>

            <div className="d-none d-md-flex align-items-center gap-3">
              <i className="bi bi-list fs-4"></i>
              <i className="bi bi-search fs-5"></i>
            </div>
          </div>

          {/* CENTER LOGO */}
          <div className="col-8 col-md-4 d-flex justify-content-center">
            <Image
              src={logo}
              alt="Examiner Logo"
              width={180}
              height={40}
              className="img-fluid"
              priority
            />
          </div>

          {/* RIGHT SECTION */}
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

           <span className="text-black fw-semibold small">Log In</span>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
