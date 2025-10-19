import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logoWhite from "../assets/logo-white.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="mobile-topbar d-md-none">
        <div className="fw-400 text-uppercase d-flex w-100">
          <a
            href="tel:+919144401072"
            className="d-block w-50 rounded-0 text-center py-2 mobile-call-btn"
          >
            <i className="bi bi-telephone-fill me-2"></i>
            +91 91444 01072
          </a>
          <Link
            to="/booking"
            className="d-block w-50 rounded-0 text-center py-2 mobile-booking-btn"
          >
            <i className="bi bi-bell me-2"></i>
            Reservation
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`navbar navbar-expand-xl mainnav zindex3 ${
          scrolled ? "scrolled" : ""
        }`}
        // style={{ background: "transparent" }}
      >
        <div className="container-fluid flex-row align-items-center justify-content-around px-5">
          <NavLink to="/" className="navbar-brand">
            <img src={logoWhite} alt="Logo" width="200" className="logo-one" />
          </NavLink>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler border-0 d-xl-none bf bg"
            style={{ backgroundColor: "#00575a" }}
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
          >
            <div className="hamburger-toggle">
              <div className={`hamburger ${mobileMenuOpen ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </button>

          {/* Navigation Menu */}
          <div
            className={`navbar-collapse ${mobileMenuOpen ? "show" : ""}`}
            id="navbar-content"
          >
            <ul className="navbar-nav mx-auto align-items-xl-center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  HOTELS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/hotels/surya-grand-by-castor-siliguri"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Surya Grand By Castor Siliguri
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/hotels/surya-eco-retreat-by-castor-bagdogra"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Surya Eco Retreat By Castor Bagdogra
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/hotels/surya-dzongkar-residency-by-castor-gangtok"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Surya Dzongkar Residency By Castor Gangtok
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/restaurants"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  DINING
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/meetings"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  MEETINGS
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/offers"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  OFFERS
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  EXPLORE
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/explore/siliguri"
                      className="dropdown-item"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Siliguri
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/explore/gangtok"
                      className="dropdown-item"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Gangtok
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item d-lg-none">
                <NavLink
                  to="/testimonials"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  TESTIMONIALS
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  ABOUT
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/about"
                      className="dropdown-item"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Castor Retreat
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      className="dropdown-item"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/career"
                      className="dropdown-item"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Career
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/faq"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQS
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Reservation Button */}
          <div className="ms-3 d-none d-xl-flex align-items-center prelative">
            <Link
              to="/booking"
              className="isbook bookingbtn text-center lh-22 font1 fw-400 white font18"
            >
              {" "}
              Reservation
              <br />
              Enquiry
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
