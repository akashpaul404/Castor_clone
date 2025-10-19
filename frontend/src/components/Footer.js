import React, { useState, useEffect } from "react";
import logoWhite from "../assets/logo-white.png";

function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;

      setCurrentTime(`${displayHours}:${minutes}:${seconds} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer style={{ backgroundColor: "#222222", color: "white" }}>
      <div className="footer-top py-4">
        <div className="container">
          <div className="row justify-content-between mt-4 font1">
            <div className="col-12 col-md-12 col-lg-4 my-3">
              <div className="footer-column footer-contact">
                <img
                  src={logoWhite}
                  alt="Logo"
                  className="max mb-3"
                  width="180"
                />
                <div className="footer-contact-info font3 font15">
                  <p>
                    <b
                      className="white fw-400"
                      style={{ color: "var(--main-color)" }}
                    >
                      Surya Grand By Castor Siliguri :{" "}
                    </b>
                    Nanak Plaza, Sevoke Road - Church Road Crossing, Siliguri
                    734001
                  </p>
                  <p>
                    <b
                      className="white fw-400"
                      style={{ color: "var(--main-color)" }}
                    >
                      Surya Eco Retreat By Castor Bagdogra :{" "}
                    </b>
                    Near Bagdogra International Airport, Bagdogra 734014
                  </p>
                  <p>
                    <b
                      className="white fw-400"
                      style={{ color: "var(--main-color)" }}
                    >
                      Surya Dzongkar Residency By Castor Gangtok :{" "}
                    </b>
                    MG Marg, Gangtok, Sikkim, India 737101
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xxl-4 my-3">
              <div className="footer-column footer-explore clearfix">
                <h5
                  className="mb-4 font1 font20 fw-400 text-uppercase fadeInUp wow animated"
                  style={{ color: "var(--main-color)" }}
                  data-wow-delay=".1s"
                >
                  Quick Links
                </h5>
                <ul className="footer-explore-list list-unstyled half-xs three-sm half">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/career">Career</a>
                  </li>
                  <li>
                    <a href="/faq">FAQs</a>
                  </li>
                  <li>
                    <a href="/blog" target="_blank" rel="noopener noreferrer">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/testimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/cancellation-and-refund">Cancellation & Refund</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xxl-4 my-3">
              <h5
                className="mb-4 font1 font20 fw-400 text-uppercase fadeInUp wow animated"
                style={{ color: "var(--main-color)" }}
                data-wow-delay=".1s"
              >
                Experience Castor Retreat
              </h5>
              <ul className="footer-explore-list list-unstyled half-xs three-sm half">
                <li>
                  <a href="/hotels">Our Hotels</a>
                </li>
                <li>
                  <a href="/booking">Reservation Enquiry</a>
                </li>
                <li>
                  <a href="/restaurants">Dining in Castor</a>
                </li>
                <li>
                  <a href="/meetings">Meetings in Castor</a>
                </li>
                <li>
                  <a href="/gallery">Explore Gallery</a>
                </li>
                <li>
                  <a href="/offers">Promotional Offers</a>
                </li>
                <li>
                  <a href="/explore/siliguri">Siliguri</a>
                </li>
                <li>
                  <a href="/explore/gangtok">Gangtok</a>
                </li>
              </ul>
            </div>
          </div>

          <hr
            style={{ opacity: "0.1", borderColor: "rgba(255,255,255,0.3)" }}
          />

          <div className="row align-items-center">
            <div className="col-12 col-md-6 my-2">
              <p className="mb-1">
                <i className="bi bi-phone white font18"></i>{" "}
                <a
                  href="tel:+919144401072"
                  className="white font22"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  +91 91444 01072
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="mailto:castorretreat@gmail.com"
                  className="white"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <i className="bi bi-envelope"></i> castorretreat@gmail.com
                </a>
              </p>
            </div>

            <div className="col-12 col-md-6 my-2 d-flex align-items-center justify-content-between">
              <div className="footer-about-social-list d-inline-flex align-items-center gap-2">
                <a
                  href="https://www.facebook.com/metaindia"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#3b5998",
                    color: "white",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/metaindia"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#e4405f",
                    color: "white",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  aria-label="X.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#000000",
                    color: "white",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a
                  aria-label="WhatsApp"
                  href="https://api.whatsapp.com/send/?phone=919144401072"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#198754",
                    color: "white",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>

              <div
                className="time prelative ms-auto mb-0 d-inline-flex white font18"
                style={{
                  position: "relative",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                <i
                  className="bi bi-clock font14 me-1 prelative"
                  style={{
                    fontSize: "14px",
                    marginRight: "4px",
                    position: "relative",
                    top: "2px",
                  }}
                ></i>
                <span className="d-block lh-22" style={{ lineHeight: "22px" }}>
                  {currentTime}
                </span>
              </div>
            </div>
          </div>

          <hr
            style={{ opacity: "0.1", borderColor: "rgba(255,255,255,0.3)" }}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
