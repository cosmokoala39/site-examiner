// components/Footer.tsx

"use client";

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <Container>
        {/* Top 4 Columns */}
           <Row className="gy-4 text-light">
      {/* Logo & Section 1 */}
      <Col xs={12} md={3}>
        <h5 className="fw-bold mb-3">
          THE <span className="text-uppercase">EXAMINER</span>
        </h5>
        <p className="small text-muted">© 2025</p>
      </Col>

      {/* AUSTRALIAN COMMUNITY MEDIA */}
      <Col xs={6} md={3}>
        <h6 className="fw-bold mb-3">AUSTRALIAN COMMUNITY MEDIA</h6>
        <ul className="list-unstyled small">
          <li><a href="#" className="text-light text-decoration-none">ACM Website</a></li>
          <li><a href="#" className="text-light text-decoration-none">Conditions of Use</a></li>
          <li><a href="#" className="text-light text-decoration-none">Privacy</a></li>
          <li><a href="#" className="text-light text-decoration-none">Terms and Conditions - Digital Subscription</a></li>
          <li><a href="#" className="text-light text-decoration-none">Terms and Conditions - Newspaper Subscription</a></li>
        </ul>
      </Col>

      {/* THE EXAMINER */}
      <Col xs={6} md={3}>
        <h6 className="fw-bold mb-3">THE EXAMINER</h6>
        <ul className="list-unstyled small">
          <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
          <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
          <li><a href="#" className="text-light text-decoration-none">Working With Us</a></li>
          <li><a href="#" className="text-light text-decoration-none">Today’s Paper</a></li>
          <li><a href="#" className="text-light text-decoration-none">Commenting Guidelines</a></li>
          <li><a href="#" className="text-light text-decoration-none">View Property Edition</a></li>
          <li><a href="#" className="text-light text-decoration-none">Help Centre</a></li>
        </ul>
      </Col>

      {/* OUR SITES */}
      <Col xs={12} md={3}>
        <h6 className="fw-bold mb-3">OUR SITES</h6>
        <ul className="list-unstyled small">
          <li><a href="#" className="text-light text-decoration-none">View</a></li>
          <li><a href="#" className="text-light text-decoration-none">Explore</a></li>
          <li><a href="#" className="text-light text-decoration-none">View Insurance</a></li>
          <li><a href="#" className="text-light text-decoration-none">Beevo</a></li>
          <li><a href="#" className="text-light text-decoration-none">Place an Ad</a></li>
          <li><a href="#" className="text-light text-decoration-none">Local Business Directory</a></li>
          <li><a href="#" className="text-light text-decoration-none">Classifieds</a></li>
          <li><a href="#" className="text-light text-decoration-none">Cars</a></li>
          <li><a href="#" className="text-light text-decoration-none">Tributes & Funerals</a></li>
          <li><a href="#" className="text-light text-decoration-none">Celebrations</a></li>
          <li><a href="#" className="text-light text-decoration-none">Promo Codes</a></li>
          <li><a href="#" className="text-light text-decoration-none">AgTrader</a></li>
          <li><a href="#" className="text-light text-decoration-none">MeHelp</a></li>
          <li><a href="#" className="text-light text-decoration-none">Farmer's Finance</a></li>
          <li><a href="#" className="text-light text-decoration-none">Garage Sales</a></li>
        </ul>
      </Col>
      {/* SUBMIT Section */}
      <Col xs={12} className="mt-4">
        <h6 className="fw-bold mb-2">SUBMIT</h6>
        <a href="#" className="text-light text-decoration-none small">Send a letter to the Editor</a>
      </Col>

      
    </Row>

        {/* Divider */}
        <hr className="border-secondary my-4" />

        {/* Subscribe Section */}
        <Row className="align-items-center gy-3">
          <Col xs={12} md={9}>
            <p className="mb-0 small">
              <strong>SUBSCRIBE TO THE EXAMINER</strong><br />
              Stay updated with the latest news, sports, and community events in Launceston and around Tasmania. Dive into in-depth analysis and storytelling from The Examiner.
            </p>
          </Col>
          <Col xs={12} md={3} className="text-md-end">
            <Button variant="danger" size="sm">Subscribe</Button>
          </Col>
        </Row>

        {/* Disclaimer */}
        <Row className="pt-3">
          <Col>
            <p className="text-muted small mb-0">
              We collect information about the content (including advertisements) you use across this site and use it to make both advertising and content more relevant to you on our network and other sites. Sometimes our articles will try to help you find the right product at the right price. We may receive compensation from affiliates if you choose to purchase through our site.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
