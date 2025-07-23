// 'use client';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// // import logo from '../../../public/images/examiner-head.svg'


// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`header ${scrolled ? 'scrolled sticky-top bg-white shadow-sm' : ''}`}>
//       {/* Top Section */}
//       {!scrolled && (
//         <div className="container-fluid py-2 border-bottom">
//           <div className="d-flex justify-content-between align-items-center">
//             <div className="d-flex align-items-center gap-3">
//               <i className="bi bi-list fs-4"></i>
//               <i className="bi bi-search fs-4"></i>
//             </div>
//             <img src="/images/examiner-head.svg" alt="dfdfdf" className="logo-img" />
//             <div className="d-flex align-items-center gap-3">
//               <button className="btn btn-danger btn-sm">SUBSCRIBE</button>
//               <span>Log In</span>
//             </div>
//           </div>
//           <div className="text-start mt-2 fw-bold">{new Date().toDateString()}</div>
//         </div>
//       )}

//       {/* Nav Section */}
//       <nav className="container-fluid border-top border-bottom py-2">
//         <div className="d-flex justify-content-between align-items-center flex-wrap">
//           <div className="d-flex gap-4 flex-wrap">
//             <Link href="#" className="text-dark text-decoration-none fw-bold">NEWS</Link>
//             <Link href="#" className="text-dark text-decoration-none fw-bold">SPORT</Link>
//             <Link href="#" className="text-dark text-decoration-none fw-bold">NOTICEBOARD</Link>
//             <Link href="#" className="text-dark text-decoration-none fw-bold">CLASSIFIEDS</Link>
//             <Link href="#" className="text-dark text-decoration-none fw-bold">EXPLORE TRAVEL</Link>
//             <Link href="#" className="text-dark text-decoration-none fw-bold">ENTERTAINMENT</Link>
//             <Link href="#" className="text-dark text-decoration-none fw-bold">LIFESTYLE</Link>
//           </div>
//           <div className="d-flex align-items-center gap-2">
//             <i className="bi bi-cloud fs-4"></i>
//             <span className="fw-bold">11.6°</span>
//             <small>5° / 17°</small>
//           </div>
//         </div>
//       </nav>

//       {/* Feature Grid */}
//       {!scrolled && (
//         <div className="container-fluid border-top border-bottom py-3">
//           <div className="row text-center">
//             <div className="col-md-3">
//               <i className="bi bi-newspaper fs-4"></i>
//               <div className="fw-bold">Today’s Paper</div>
//               <div>Read the latest edition online</div>
//             </div>
//             <div className="col-md-3">
//               <i className="bi bi-grid-3x3-gap-fill fs-4"></i>
//               <div className="fw-bold">Puzzles</div>
//               <div>Test your skills with Crossword, Sudoku and Trivia</div>
//             </div>
//             <div className="col-md-3">
//               <i className="bi bi-envelope fs-4"></i>
//               <div className="fw-bold">Newsletters</div>
//               <div>Sign up to tailored newsletters</div>
//             </div>
//             <div className="col-md-3">
//               <i className="bi bi-fingerprint fs-4 text-warning"></i>
//               <div className="fw-bold">ViewJobs</div>
//               <div>Best job opportunities in Australia</div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Property Blue Bar */}
//       {!scrolled && (
//         <div className="container-fluid bg-lightblue py-2 text-center">
//           <Link href="#" className="text-decoration-none fw-bold text-dark">
//             <i className="bi bi-house-door fs-5 me-2 text-primary"></i>
//             The Examiner's complete view of property
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }
// //