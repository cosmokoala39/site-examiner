// components/header/DesktopTopHeader.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import logo from "../../../public/images/examiner-head.svg";

const DesktopTopHeader = ({ currentDate }: { currentDate: string }) => {
  return (
    <div
      className="bg-white   border-bottom py-4 px-3 d-flex align-items-center justify-content-between flex-wrap"
      
    >
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
  );
};

export default DesktopTopHeader;
