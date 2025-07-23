// components/Footer.tsx

"use client";

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <Container>
        {/* Top 4 Columns */}
        <Row className="gy-4">
          {/* Logo & Section 1 */}
          <Col xs={12} md={3}>
            <h5 className="fw-bold mb-3">THE EXAMINER</h5>
            <p className="small text-muted">© 2025</p>
          </Col>

          {/* Section 2 */}
          <Col xs={6} md={3}>
            <h6 className="fw-bold mb-3">AUSTRALIAN COMMUNITY MEDIA</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-light text-decoration-none">ACM Websites</a></li>
              <li><a href="#" className="text-light text-decoration-none">Conditions of Use</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy</a></li>
              <li><a href="#" className="text-light text-decoration-none">Newspaper Subscription</a></li>
              <li><a href="#" className="text-light text-decoration-none">Digital Subscription</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms and Conditions</a></li>
            </ul>
          </Col>

          {/* Section 3 */}
          <Col xs={6} md={3}>
            <h6 className="fw-bold mb-3">THE EXAMINER</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Working With Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Today’s Paper</a></li>
              <li><a href="#" className="text-light text-decoration-none">Help Centre</a></li>
              <li><a href="#" className="text-light text-decoration-none">New Property Edition</a></li>
            </ul>
          </Col>

          {/* Section 4 */}
          <Col xs={12} md={3}>
            <h6 className="fw-bold mb-3">OUR SITES</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-light text-decoration-none">View Insurance</a></li>
              <li><a href="#" className="text-light text-decoration-none">Buy Search</a></li>
              <li><a href="#" className="text-light text-decoration-none">Real Estate</a></li>
              <li><a href="#" className="text-light text-decoration-none">Classifieds</a></li>
              <li><a href="#" className="text-light text-decoration-none">Tributes</a></li>
              <li><a href="#" className="text-light text-decoration-none">Obituaries</a></li>
            </ul>
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
