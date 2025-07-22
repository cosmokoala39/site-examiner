// components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5 pb-4 mt-5">
      <div className="container">
        
        <div className="row align-items-start">

         

          {/* ACM Section */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-3 small">AUSTRALIAN COMMUNITY MEDIA</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white-50 text-decoration-none">ACM Website</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Conditions of Use</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Privacy</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Terms and Conditions - Digital Subscription</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Terms and Conditions - Newspaper Subscription</a></li>
            </ul>
          </div>

          {/* Examiner Section */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-3 small">THE EXAMINER</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white-50 text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Working With Us</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Today’s Paper</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Commenting Guidelines</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">View Property Edition</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Help Centre</a></li>
            </ul>
          </div>

          {/* Our Sites Section */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3 small">OUR SITES</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white-50 text-decoration-none">View</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Explore</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">View Insurance</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Beevo</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Place an Ad</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Classifieds</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Cars</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Tributes & Funerals</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Celebrations</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Promo Codes</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">AgTrader</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">MeHelp</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Farmer’s Finance</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Garage Sales</a></li>
            </ul>
          </div>

          {/* Submit + Social */}
          <div className="col-md-2 mb-4 d-flex flex-column align-items-end">
            <div className="mb-3">
              <h6 className="text-uppercase fw-bold mb-2 small">SUBMIT</h6>
              <a href="#" className="text-white-50 text-decoration-none small">Send a letter to the Editor</a>
            </div>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <hr className="border-secondary my-4" />
        <div className="row align-items-center">
          <div className="col-md-10">
            <h6 className="text-uppercase fw-bold small">SUBSCRIBE TO THE EXAMINER</h6>
            <p className="small text-white-50 mb-0">
              Stay updated with the latest news, sports, and community events in Launceston and around Tasmania.
              Dive into in-depth analysis and storytelling from The Examiner.
            </p>
          </div>
          <div className="col-md-2 text-end mt-3 mt-md-0">
            <button className="btn btn-danger">Subscribe</button>
          </div>
        </div>

        {/* Disclaimer */}
        <hr className="border-secondary my-4" />
        <div className="text-white-50 small">
          <p className="mb-0">
            We collect information about the content (including advertisements) you interact with across this site.
            This helps us make advertising and content more relevant for you across the ACM network.
            You can find out more about our <a href="#" className="text-primary text-decoration-none">conditions of use here</a>.
            Sometimes articles you engage with will help you find a product and make your shopping experience easier.
            We may receive compensation from affiliate partners if you choose to make a purchase through the links on our site.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
