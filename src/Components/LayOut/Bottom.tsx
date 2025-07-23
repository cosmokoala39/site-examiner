'use client';
import React from 'react';

const Bottom = () => {
  const navItems = [
    'News',
    'Sport',
    'Noticeboard',
    'Classifieds',
    'Explore Travel',
    'Entertainment',
    'Lifestyle',
  ];

  return (
    <>
      {/* Desktop View */}
      <section className="d-none d-md-block mt-5 pt-3">
        <div className="container px-4">

          {/* Date and Weather Row */}
          <div className="d-flex justify-content-between align-items-center py-1">
            <div className="fw-semibold small">Wednesday 23 July 2025</div>
            <div className="d-flex align-items-center gap-2 small text-secondary">
              <i className="bi bi-cloud-rain fs-5 text-muted"></i>
              <span className="fw-semibold text-dark">11.6°</span>
              <span>5° / 17°</span>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav
            className="d-flex justify-content-center border-top border-bottom pt-2 pb-2 gap-4 fw-semibold text-uppercase"
            style={{ fontSize: '0.72rem' }}
          >
            {navItems.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </nav>

          {/* Feature Grid */}
          <div className="row text-center text-md-start align-items-center py-1 gx-4 small">
            {/* Today's Paper */}
            <div className="col-md-3 d-flex align-items-center gap-2">
              <i className="bi bi-newspaper fs-4"></i>
              <div>
                <div className="fw-semibold">Today’s Paper</div>
                <div className="small">Read the latest edition online</div>
              </div>
            </div>

            {/* Puzzles */}
            <div className="col-md-3 d-flex align-items-center gap-2 border-start ps-3">
              <i className="bi bi-grid-3x3-gap fs-4"></i>
              <div>
                <div className="fw-semibold">Puzzles</div>
                <div className="small">
                  Test your skills with Crossword, Sudoku and Ultimate Trivia
                </div>
              </div>
            </div>

            {/* Newsletters */}
            <div className="col-md-3 d-flex align-items-center gap-2 border-start ps-3">
              <i className="bi bi-envelope fs-4"></i>
              <div>
                <div className="fw-semibold">Newsletters</div>
                <div className="small">
                  Sign up to newsletters tailored to your interests
                </div>
              </div>
            </div>

            {/* ViewJobs */}
            <div className="col-md-3 d-flex align-items-center gap-2 border-start ps-3">
              <div className="bg-warning rounded p-1">
                <i className="bi bi-fingerprint fs-5"></i>
              </div>
              <div>
                <div className="fw-semibold">ViewJobs</div>
                <div className="small">
                  ViewJobs brings you the best job opportunities across Australia.
                </div>
              </div>
            </div>
          </div>

          {/* Property Banner */}
          <div
            className="bg-primary bg-opacity-10 py-3 px-3 d-flex justify-content-center align-items-center gap-2 text-center"
            style={{
              borderTop: '3px double #000',
            }}
          >
            <i className="bi bi-house-door-fill text-primary fs-5"></i>
            <span className="text-primary fw-semibold">view</span>
            <span className="ms-2 small">
              The Examiner&apos;s complete view of property
            </span>
          </div>
        </div>
      </section>

      {/* ✅ Mobile View */}
     <section className="d-block pt-5 d-md-none mt-3">
  <div className="container px-3">
    {/* Weather Card */}
    <div className="d-flex justify-content-between align-items-center mb-2">
      <div>
        <div className="fw-semibold small">Launceston</div>
        <div className="small text-muted">Rain</div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <i className="bi bi-cloud-rain text-muted fs-5"></i>
        <div className="text-end">
          <div className="fw-semibold small text-dark">11.6°</div>
          <div className="small text-muted">5° / 17°</div>
        </div>
      </div>
    </div>
  </div>

  {/* Full-Width Property Banner */}
  <div className="w-100 bg-primary bg-opacity-10">
    <div className="d-flex align-items-center gap-2 py-2 px-3">
      <i className="bi bi-house-door-fill text-primary fs-5"></i>
      <span className="text-primary fw-semibold">view</span>
      <a
        href="#"
        className="ms-2 small text-decoration-none text-dark"
        style={{ whiteSpace: 'nowrap' }}
      >
        The Examiner&apos;s complete view of property
      </a>
    </div>
  </div>
</section>

    </>
  );
};

export default Bottom;
