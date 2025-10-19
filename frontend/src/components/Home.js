import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import home1 from "../assets/home-1.jpg";
import home2 from "../assets/home-2.jpg";
import home3 from "../assets/home-3.jpg";
import icon1 from "../assets/icon-32.png";
import borderLine from "../assets/border.svg";
import Flv_IMG_1 from "../assets/flv_Img1.jpg";
import Flv_IMG_2 from "../assets/flv_Img2.jpg";
import Flv_IMG_3 from "../assets/flv_Img3.jpg";
import Banquet_Banner from "../assets/home-celebration.jpg";
import Banquet_IMG_1 from "../assets/banquet-img-1.jpg";
import Banquet_IMG_2 from "../assets/banquet-img-2.jpg";
import Banquet_IMG_3 from "../assets/banquet-img-3.jpg";
import Partnership_Icon from "../assets/icon.png";
import Growth_Icon from "../assets/growth.svg";
import Operation_Icon from "../assets/operation.svg";
import Brand_Icon from "../assets/brand.svg";
import Onboarding_Icon from "../assets/onboarding.svg";
import user from "../assets/user.svg";
import Blog_IMG_1 from "../assets/blog-1.jpg";
import Blog_IMG_2 from "../assets/blog-2.jpg";
import Blog_IMG_3 from "../assets/blog-3.jpg";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [offers, setOffers] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hotels")
      .then((res) => {
        setHotels(res.data || []);
      })
      .catch((err) => {
        setError("Failed to load hotels");
        setHotels([]);
      });

    axios
      .get("http://localhost:8080/api/offers")
      .then((res) => {
        setOffers(res.data || []);
      })
      .catch((err) => {
        setOffers([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {/* Hero Banner Carousel  */}
      <header
        className="header slider-fade  overflow-hidden position-relative "
        style={{ zIndex: 1 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: ".owl-prev",
            nextEl: ".owl-next",
          }}
          pagination={{
            el: ".owl-dots",
            clickable: true,
            renderBullet: function (index, className) {
              return `<button role="button" class="${className}"><span></span></button>`;
            },
          }}
          autoplay={{ delay: 8000 }}
          loop={true}
          className="hero-swiper owl-carousel dotta"
          style={{ height: "100vh" }}
          speed={1000}
        >
          <SwiperSlide>
            <div
              className="hero-slide item bg-center bg-cover position-relative"
              style={{ height: "100vh" }}
            >
              <img
                src={home1}
                alt="Banner"
                className="position-absolute w-100 h-100 object-fit-cover"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(0,0,0,0.2)" }}
              >
                <div className="container-fluid">
                  <div className="row">
                    <div
                      className="col-md-6 col-lg-5"
                      style={{ transform: "translate(9rem, 13rem)" }}
                    >
                      <div className="hero-content">
                        <p
                          className="heada display-6 text-white text-uppercase mb-2 citio"
                          style={{
                            fontFamily: "var(--font1)",
                          }}
                        >
                          RETREAT TO THE CALM
                          <br />
                          SIDE OF THE HILLS
                        </p>
                        <p
                          className="h5 text-white m-0 text-uppercase px-3 py-2 d-inline-block citio"
                          style={{
                            backgroundColor: "var(--main-color2)",
                            fontFamily: "var(--font2)",
                            letterSpacing: "1px",
                          }}
                        >
                          Restful stays, warm hospitality, and timeless moments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slide item bg-center bg-cover position-relative"
              style={{ height: "100vh" }}
            >
              <img
                src={home2}
                alt="Traveller"
                className="position-absolute w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(0,0,0,0.2)" }}
              >
                <div className="container-fluid">
                  <div className="row">
                    <div
                      className="col-md-6 col-lg-5"
                      style={{ transform: "translate(9rem, 13rem)" }}
                    >
                      <div className="hero-content">
                        <p
                          className="heada display-6 text-white text-uppercase mb-2 citio"
                          style={{
                            fontFamily: "var(--font1)",
                          }}
                        >
                          CRAFTED FOR THE
                          <br />
                          DISCERNING TRAVELLER
                        </p>
                        <p
                          className="h5 text-white m-0 text-uppercase px-3 py-2 d-inline-block citio"
                          style={{
                            backgroundColor: "var(--main-color2)",
                            fontFamily: "var(--font2)",
                            letterSpacing: "1px",
                          }}
                        >
                          Our stays invite you to experience travel the refined
                          way
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slide item bg-center bg-cover position-relative"
              style={{ height: "100vh" }}
            >
              <img
                src={home3}
                alt="Restaurant"
                className="position-absolute w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(0,0,0,0.2)" }}
              >
                <div className="container-fluid">
                  <div
                    className="row"
                    style={{ transform: "translate(9rem, 13rem)" }}
                  >
                    <div className="col-md-6 col-lg-5 ">
                      <div className="hero-content">
                        <p
                          className="heada display-6 text-white text-uppercase mb-2 citio "
                          style={{
                            fontFamily: "var(--font1)",
                          }}
                        >
                          CURATED WITH COMFORT,
                          <br />
                          CARE, AND QUIET LUXURY
                        </p>
                        <p
                          className="h5 text-white m-0 text-uppercase px-3 py-2 d-inline-block citio"
                          style={{
                            backgroundColor: "var(--main-color2)",
                            fontFamily: "var(--font2)",
                            letterSpacing: "1px",
                          }}
                        >
                          Elegant escapes across Siliguri & Gangtok
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Controls */}
        <div
          className="owl-nav position-absolute"
          style={{
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <button
            type="button"
            className="owl-prev btn btn-outline-light rounded-circle"
            style={{ width: "50px", height: "50px" }}
          >
            <i className="bi bi-arrow-left"></i>
          </button>
        </div>
        <div
          className="owl-nav position-absolute"
          style={{
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <button
            type="button"
            className="owl-next btn btn-outline-light rounded-circle"
            style={{ width: "50px", height: "50px" }}
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        <div
          className="owl-dots position-absolute w-100 text-center"
          style={{ bottom: "30px", zIndex: 10 }}
        ></div>
      </header>

      <div
        className="py-3 text-center d-none d-md-block"
        style={{ backgroundColor: "var(--main-color7)" }}
      >
        <div className="container-fluid">
          <div
            className="row text-uppercase fw-400 justify-content-center"
            style={{ fontSize: "13px", fontFamily: "var(--font2)" }}
          >
            <div className="col-6 col-md-3 col-lg-3 my-2">
              <div className="prelative c d-flex align-items-center justify-content-center">
                <img
                  src={icon1}
                  alt="Elegant Hilltop Escapes"
                  className="mx-1 max"
                  width="28"
                  height="28"
                />
                <span className="label">Elegant Hilltop Escapes</span>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 my-2">
              <div className="prelative c d-flex align-items-center justify-content-center">
                <img
                  src={icon1}
                  alt="Thoughtful Hospitality"
                  className="mx-1 max"
                  width="28"
                  height="28"
                />
                <span className="label">Thoughtful Hospitality</span>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 my-2">
              <div className="prelative c d-flex align-items-center justify-content-center">
                <img
                  src={icon1}
                  alt="Scenic Urban Comforts"
                  className="mx-1 max"
                  width="28"
                  height="28"
                />
                <span className="label">Scenic Urban Comforts</span>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 my-2">
              <div className="prelative c d-flex align-items-center justify-content-center">
                <img
                  src={icon1}
                  alt="Curated Local Discoveries"
                  className="mx-1 max"
                  width="28"
                  height="28"
                />
                <span className="label">Curated Local Discoveries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Welcome Section */}
      <section
        className="py-5 position-relative overflow-hidden"
        style={{
          backgroundColor: "#f8f9fa",
          backgroundImage:
            'url("https://via.placeholder.com/1200x400/f8f9fa/cccccc")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid py-4">
          <div className="text-center mb-4">
            <p
              className="h5 text-uppercase mb-3"
              style={{
                fontFamily: "var(--font1)",
                fontSize: "20px",
                letterSpacing: "1px",
                fontWeight: "400",
              }}
            >
              Welcome to Castor Retreat
            </p>
            <h3
              className="display-5 fw-500 text-uppercase mb-4"
              style={{ fontFamily: "var(--font1)", lineHeight: "1.2" }}
            >
              A Refined Expression of
              <br className="d-none d-lg-block" />
              Indian Hospitality
            </h3>
            <div className="mb-4">
              <img src={borderLine} alt="Frame" width="150" />
            </div>
          </div>
          <p
            className="mb-4 text-center col-12 col-lg-8 mx-auto"
            style={{
              fontSize: "18px",
              fontFamily: "var(--font2)",
              lineHeight: "1.6",
              color: "var(--paragraph-color)",
            }}
          >
            Step into a world where warmth meets elegance - where every stay
            unfolds with thoughtful detail, timeless charm, and immersive
            comfort. Discover our distinct hotels across Siliguri, Bagdogra, and
            Gangtok - each crafted to elevate your travel story.
          </p>

          <div className="position-relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={4}
              navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              className="experience-swiper"
            >
              <SwiperSlide>
                <div
                  className="position-relative bg-cover bg-center"
                  style={{
                    height: "300px",
                    backgroundImage:
                      'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop")',
                  }}
                >
                  <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white">
                    <h3
                      className="h4 mb-2"
                      style={{ fontFamily: "var(--font1)" }}
                    >
                      Serene
                    </h3>
                    <p className="mb-0 small">
                      Wake up to soft light, quiet landscapes, and a sense of
                      peace that lingers beyond your stay.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="position-relative bg-cover bg-center"
                  style={{
                    height: "300px",
                    backgroundImage:
                      'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop")',
                  }}
                >
                  <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white">
                    <h3
                      className="h4 mb-2"
                      style={{ fontFamily: "var(--font1)" }}
                    >
                      Sophisticated
                    </h3>
                    <p className="mb-0 small">
                      Enjoy refined interiors, elevated dining, and service
                      tailored to your pace - never hurried, always thoughtful.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="position-relative bg-cover bg-center"
                  style={{
                    height: "300px",
                    backgroundImage:
                      'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop")',
                  }}
                >
                  <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white">
                    <h3
                      className="h4 mb-2"
                      style={{ fontFamily: "var(--font1)" }}
                    >
                      Immersive
                    </h3>
                    <p className="mb-0 small">
                      Each destination offers a seamless blend of local culture
                      and curated comforts designed for deeper connection.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="position-relative bg-cover bg-center"
                  style={{
                    height: "300px",
                    backgroundImage:
                      'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop")',
                  }}
                >
                  <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white">
                    <h3
                      className="h4 mb-2"
                      style={{ fontFamily: "var(--font1)" }}
                    >
                      Seamless
                    </h3>
                    <p className="mb-0 small">
                      From effortless check-ins to intuitive service, every
                      detail flows in harmony with your journey.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div
              className="swiper-prev position-absolute top-50 start-0 translate-middle-y btn btn-outline-dark rounded-circle ms-3"
              style={{ width: "45px", height: "45px", zIndex: 10 }}
            >
              <i className="bi bi-arrow-left"></i>
            </div>
            <div
              className="swiper-next position-absolute top-50 end-0 translate-middle-y btn btn-outline-dark rounded-circle me-3"
              style={{ width: "45px", height: "45px", zIndex: 10 }}
            >
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>
      {/* Hotels Section */}
      <section
        className="py-5 position-relative overflow-hidden"
        style={{
          backgroundColor: "#fff",
          backgroundImage:
            'url("https://via.placeholder.com/1200x600/ffffff/eeeeee")',
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid py-4">
          <div className="row mb-5 align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <h3
                className="display-5 fw-500 text-uppercase mb-3"
                style={{ fontFamily: "var(--font1)", position: "relative" }}
              >
                Explore Castor Hotels
                <div
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    left: "0",
                    width: "80px",
                    height: "3px",
                    backgroundColor: "var(--main-color)",
                  }}
                ></div>
              </h3>
              <span
                className="d-inline-block h5 mb-3"
                style={{
                  fontFamily: "var(--font2)",
                  color: "var(--paragraph-color)",
                }}
              >
                Distinctive. Delightful. Discovered with Ease.
              </span>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <p
                className="mb-0"
                style={{
                  fontSize: "18px",
                  fontFamily: "var(--font2)",
                  color: "var(--paragraph-color)",
                  lineHeight: "1.6",
                }}
              >
                A collection of elegant stays across Siliguri, Bagdogra, and
                Gangtok - each crafted with comfort, character, and quiet charm.
              </p>
            </div>
          </div>

          <div className="row">
            {hotels.map((hotel, index) => (
              <div key={hotel.slug} className="col-12 col-md-6 col-lg-4 mb-4">
                <div
                  className="bg-white border-0 shadow h-100 position-relative"
                  style={{ transition: "var(--transition)" }}
                >
                  <div className="overflow-hidden">
                    <a className="d-block" href={`/hotels/${hotel.slug}`}>
                      <img
                        src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=250&fit=crop"
                        alt={hotel.name}
                        className="w-100"
                        style={{
                          height: "250px",
                          objectFit: "cover",
                          transition: "var(--transition)",
                        }}
                      />
                    </a>
                  </div>
                  <div className="p-4">
                    <h3
                      className="h4 fw-500 text-uppercase mb-2"
                      style={{ fontFamily: "var(--font1)" }}
                    >
                      <a
                        href={`/hotels/${hotel.slug}`}
                        className="text-decoration-none text-dark position-relative"
                      >
                        {hotel.name}
                        <div
                          style={{
                            position: "absolute",
                            bottom: "-5px",
                            left: "0",
                            width: "40px",
                            height: "2px",
                            backgroundColor: "var(--main-color)",
                          }}
                        ></div>
                      </a>
                    </h3>
                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "var(--font2)",
                        color: "var(--paragraph-color)",
                        fontSize: "16px",
                      }}
                    >
                      {hotel.description}
                    </p>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <p
                        className="mb-0 small"
                        style={{
                          fontFamily: "var(--font2)",
                          color: "var(--paragraph-color)",
                        }}
                      >
                        <i className="bi bi-geo-alt me-1"></i>
                        {hotel.location?.address ||
                          hotel.location ||
                          "Location not available"}
                      </p>
                      <a
                        href={`/hotels/${hotel.slug}`}
                        className="btn btn-outline-dark btn-sm text-uppercase"
                        style={{
                          borderColor: "var(--main-color)",
                          color: "var(--main-color)",
                          transition: "var(--transition)",
                          fontFamily: "var(--font2)",
                        }}
                      >
                        Explore & Book{" "}
                        <i className="ms-1 bi bi-arrow-right-circle-fill"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-5"
        style={{ backgroundColor: "var(--main-color2)" }}
      >
        <div className="container-fluid py-4">
          <div className="row mb-5 align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <h3
                className="display-5 fw-500 text-white text-uppercase mb-3"
                style={{
                  fontFamily: "var(--font1)",
                  position: "relative",
                }}
              >
                Promotional Offers
                <div
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    left: "0",
                    width: "80px",
                    height: "3px",
                    backgroundColor: "var(--main-color)",
                  }}
                ></div>
              </h3>
              <span
                className="d-inline-block text-white h5 mb-3"
                style={{ fontFamily: "var(--font2)" }}
              >
                Exclusive Deals, Thoughtful Privileges.
              </span>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <p
                className="text-white mb-0"
                style={{
                  fontSize: "18px",
                  fontFamily: "var(--font2)",
                  lineHeight: "1.6",
                }}
              >
                Unlock handpicked offers and curated benefits designed to
                elevate your stay across all Castor Retreat destinations.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <div className="bg-white p-4 shadow h-100">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop"
                  alt="Celebration Stay"
                  className="w-100 mb-3"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h4
                  className="h4 fw-500 mb-3 position-relative"
                  style={{ fontFamily: "var(--font1)" }}
                >
                  Celebration Stay - Book for Events & Earn More
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-5px",
                      left: "0",
                      width: "40px",
                      height: "2px",
                      backgroundColor: "var(--main-color)",
                    }}
                  ></div>
                </h4>
                <div className="d-flex align-items-center justify-content-between">
                  <p
                    className="mb-0 small fw-600"
                    style={{ fontFamily: "var(--font2)" }}
                  >
                    #Till 15 September 2025
                  </p>
                  <a href="#" className="btn btn-outline-dark btn-sm">
                    More <i className="ms-1 bi bi-arrow-right-circle-fill"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <div className="bg-white p-4 shadow h-100">
                <img
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=200&fit=crop"
                  alt="Drive & Dine"
                  className="w-100 mb-3"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h4
                  className="h4 fw-500 mb-3 position-relative"
                  style={{ fontFamily: "var(--font1)" }}
                >
                  Drive & Dine - Travel Smart, Eat Well
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-5px",
                      left: "0",
                      width: "40px",
                      height: "2px",
                      backgroundColor: "var(--main-color)",
                    }}
                  ></div>
                </h4>
                <div className="d-flex align-items-center justify-content-between">
                  <p
                    className="mb-0 small fw-600"
                    style={{ fontFamily: "var(--font2)" }}
                  >
                    #Till 30 September 2025
                  </p>
                  <a href="#" className="btn btn-outline-dark btn-sm">
                    More <i className="ms-1 bi bi-arrow-right-circle-fill"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <div className="bg-white p-4 shadow h-100">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop"
                  alt="Hillside Bliss"
                  className="w-100 mb-3"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h4
                  className="h4 fw-500 mb-3 position-relative"
                  style={{ fontFamily: "var(--font1)" }}
                >
                  Hillside Bliss - Couple's Getaway Package
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-5px",
                      left: "0",
                      width: "40px",
                      height: "2px",
                      backgroundColor: "var(--main-color)",
                    }}
                  ></div>
                </h4>
                <div className="d-flex align-items-center justify-content-between">
                  <p
                    className="mb-0 small fw-600"
                    style={{ fontFamily: "var(--font2)" }}
                  >
                    #Till 31 July 2025
                  </p>
                  <a href="#" className="btn btn-outline-dark btn-sm">
                    More <i className="ms-1 bi bi-arrow-right-circle-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 py-lg-5 bgfa ">
        <div className="container-fluid  " style={{ width: "80%" }}>
          <div className="row mb-lg-4 align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-lg-5">
              <h3
                className="h1 fw-500 withhr text-uppercase"
                style={{ fontFamily: "var(--font1)" }}
              >
                -Flavours with a Sense of Place
              </h3>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <p
                className="font18 font17-md font15-sm"
                style={{
                  fontFamily: "var(--font2)",
                  marginTop: "0",
                }}
              >
                Savor regional and global cuisine in refined dining spaces where
                every meal is a celebration of taste and hospitality.
              </p>
            </div>
          </div>

          <div className="offerowl owl-carousel sameheight navcenter mx-auto gap-5  color-">
            <div className="my-4 item prelative height100 bg-white2 ">
              <div className="d-flex flex-column justify-content-center prelative height100">
                <a
                  href="hotels/surya-dzongkar-residency-by-castor-gangtok/restaurant/castor-restaurant"
                  className="text-decoration-none"
                >
                  <img
                    src={Flv_IMG_1}
                    alt="Castor Restaurant"
                    className="max rounded-top "
                    style={{ width: "100%", height: "auto" }}
                  />
                  <h3
                    className="h4 text-uppercase mt-3 mb-2 fw-500 withhr"
                    style={{ fontFamily: "var(--font1)" }}
                  >
                    Castor Restaurant
                  </h3>
                  <div className="prelative ps-2 ps-md-3 ps-lg-4 ps-xl-5">
                    <p
                      className="mb-2 d-block fw-400"
                      style={{ fontFamily: "var(--font2)" }}
                    >
                      Authentic Flavours. Elevated Views.
                    </p>
                    <p
                      className="d-block full fw-400"
                      style={{ fontFamily: "var(--font2)" }}
                    >
                      <span>
                        <i className="bi bi-geo-alt"></i> Surya Dzongkar
                        Residency By Castor Gangtok{" "}
                      </span>
                      <i className="bi bi-arrow-right float-end px-2 py-1 bg5 "></i>
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="my-4 item prelative height100 bg-white2">
              <div className="d-flex flex-column justify-content-center prelative height100">
                <a
                  href="hotels/surya-eco-retreat-by-castor-bagdogra/restaurant/castor-restaurant"
                  className="text-decoration-none"
                >
                  <img
                    src={Flv_IMG_2}
                    alt="Castor Restaurant"
                    className="max rounded-top"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <h3
                    className="h4 text-uppercase mt-3 mb-2 fw-500 withhr"
                    style={{ fontFamily: "var(--font1)" }}
                  >
                    Castor Restaurant
                  </h3>
                  <div className="prelative ps-2 ps-md-3 ps-lg-4 ps-xl-5">
                    <p
                      className="mb-2 d-block fw-400"
                      style={{ fontFamily: "var(--font2)" }}
                    >
                      Naturally Nourishing Flavours
                    </p>
                    <p
                      className="d-block full fw-400"
                      style={{ fontFamily: "var(--font2)" }}
                    >
                      <span>
                        <i className="bi bi-geo-alt"></i> Surya Eco Retreat By
                        Castor Bagdogra{" "}
                      </span>
                      <i className="bi bi-arrow-right float-end px-2 py-1 bg5"></i>
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="my-4 item prelative height100 bg-white2">
              <div className="d-flex flex-column justify-content-center prelative height100">
                <a
                  href="hotels/surya-grand-by-castor-siliguri/restaurant/castor-restaurant"
                  className="text-decoration-none"
                >
                  <img
                    src={Flv_IMG_3}
                    alt="Castor Restaurant"
                    className="max rounded-top"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <h3
                    className="h4 text-uppercase mt-3 mb-2 fw-500 withhr"
                    style={{ fontFamily: "var(--font1)" }}
                  >
                    Castor Restaurant
                  </h3>
                  <div className="prelative ps-2 ps-md-3 ps-lg-4 ps-xl-5">
                    <p
                      className="mb-2 d-block fw-400"
                      style={{ fontFamily: "var(--font2)" }}
                    >
                      Delight in Every Bite, Right in Siliguri
                    </p>
                    <p
                      className="d-block full fw-400"
                      style={{ fontFamily: "var(--font2)" }}
                    >
                      <span>
                        <i className="bi bi-geo-alt"></i> Surya Grand By Castor
                        Siliguri{" "}
                      </span>
                      <i className="bi bi-arrow-right float-end px-2 py-1 bg5"></i>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4 pb-lg-5 prelative zindex1">
        <div
          className="position-relative overflow-hidden banquet-banner-wrapper"
          style={{
            height: "600px",
            width: "100%",
            backgroundImage: `url(${Banquet_Banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="container-fluid pb-3 pb-lg-4 jhingu banquet-carousel-container">
          {" "}
          <div className="offerowl owl-carousel sameheight navcenter">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              navigation={false}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="owl-carousel"
            >
              <SwiperSlide>
                <div className="item">
                  <div className="bg-white b1 p-4 ghgh shadow1 prelative height100">
                    <a
                      href="hotels/surya-dzongkar-residency-by-castor-gangtok/banquet/sunshine-hall"
                      className="text-decoration-none"
                    >
                      <img
                        src={Banquet_IMG_1}
                        alt="Sunshine Hall"
                        className="max mb-3"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </a>
                    <h4 className="h4 d-block fw-500">
                      <a
                        href="hotels/surya-dzongkar-residency-by-castor-gangtok/banquet/sunshine-hall"
                        className="text-decoration-none text-dark"
                      >
                        Sunshine Hall
                      </a>
                    </h4>
                    <div className="clearfix"></div>
                    <p
                      className="mb-0 fw-500 withhr"
                      style={{ fontFamily: "var(--font2)" }}
                    >
                      Elegant Events in the Heart of Gangtok
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <div className="bg-white b1 p-4 ghgh shadow1 prelative height100">
                    <a
                      href="hotels/surya-eco-retreat-by-castor-bagdogra/banquet/uday-hall"
                      className="text-decoration-none"
                    >
                      <img
                        src={Banquet_IMG_2}
                        alt="Uday Hall"
                        className="max mb-3"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </a>
                    <h4 className="h4 d-block fw-500">
                      <a
                        href="hotels/surya-eco-retreat-by-castor-bagdogra/banquet/uday-hall"
                        className="text-decoration-none text-dark"
                      >
                        Uday Hall
                      </a>
                    </h4>
                    <div className="clearfix"></div>
                    <p
                      className="mb-0 fw-500 withhr"
                      style={{ fontFamily: "var(--font2)" }}
                    >
                      Nature-Inspired Celebrations & Gatherings
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <div className="bg-white b1 p-4 ghgh shadow1 prelative height100">
                    <a
                      href="hotels/surya-grand-by-castor-siliguri/banquet/multifunctional-banquet-halls"
                      className="text-decoration-none"
                    >
                      <img
                        src={Banquet_IMG_3}
                        alt="Multifunctional Banquet Halls"
                        className="max mb-3"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </a>
                    <h4 className="h4 d-block fw-500">
                      <a
                        href="hotels/surya-grand-by-castor-siliguri/banquet/multifunctional-banquet-halls"
                        className="text-decoration-none text-dark"
                      >
                        Multifunctional Banquet Halls
                      </a>
                    </h4>
                    <div className="clearfix"></div>
                    <p
                      className="mb-0 fw-500 withhr"
                      style={{ fontFamily: "var(--font2)" }}
                    >
                      Sunshine, Uday, Spectrum & Sunset Hall
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="testimonials prelative py-4 py-lg-5">
        <div className="container-fluid pb-3 pt-2">
          <div className="text-center mb-3 mb-lg-4">
            <h3
              className="h1 fw-500 text-uppercase fadeInDown wow animated"
              data-wow-delay=".15s"
              style={{ visibility: "visible", animationDelay: "0.15s" }}
            >
              <span>Our Guestbook</span>
            </h3>
            <img
              src={borderLine}
              alt="Frame"
              className="max fadeInUp wow animated"
              data-wow-delay=".1s"
              width="150"
              style={{ visibility: "visible", animationDelay: "0.1s" }}
            />
          </div>

          <div className="testimonials-box">
            <div className="testi-owl owl-carousel navcenter sameheight owl-theme text-center mb-1 pt-3">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                navigation={{
                  prevEl: ".testi-prev",
                  nextEl: ".testi-next",
                }}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 10 },
                  768: { slidesPerView: 2, spaceBetween: 15 },
                  992: { slidesPerView: 3, spaceBetween: 20 },
                }}
                className="owl-carousel"
              >
                <SwiperSlide>
                  <div
                    className="item height100 px-2 bg-white prelative zoomIn wow animated"
                    data-wow-delay=".1s"
                    style={{ visibility: "visible", animationDelay: "0.1s" }}
                  >
                    <div className="prelative height100 p-5 boga text-center shadow1">
                      <p className="font17 fw-600 mb-2">
                        Travel Blogger & Reviewer
                      </p>
                      <p>
                        I stayed across all three Castor properties over a
                        week-long trip and I’m impressed by their consistency.
                        Each hotel had its own charm, but the service, comfort,
                        and food were excellent across the board. Castor Retreat
                        is doing something very right!
                      </p>
                      <div className="info px-4 d-flex align-items-center flex-column">
                        <div className="me-2">
                          <img
                            src={user}
                            alt="Chitra Menon"
                            width="50"
                            height="50"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="cont">
                          <p className="mb-0 font15 text-uppercase font2 fw-400">
                            Chitra Menon
                          </p>
                          <span className="font12 th-color d-block lh-20">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="item height100 px-2 bg-white prelative zoomIn wow animated"
                    data-wow-delay=".2s"
                    style={{ visibility: "visible", animationDelay: "0.2s" }}
                  >
                    <div className="prelative height100 p-5 boga text-center shadow1">
                      <p className="font17 fw-600 mb-2">
                        Wedding Guest at Surya Grand
                      </p>
                      <p>
                        I attended a wedding hosted at Surya Grand and was
                        honestly blown away. The banquet hall was beautifully
                        done, everything was perfectly timed, and the
                        hospitality stood out. It’s rare to see such polished
                        coordination.
                      </p>
                      <div className="info px-4 d-flex align-items-center flex-column">
                        <div className="me-2">
                          <img
                            src={user}
                            alt="Amitabh Kar"
                            width="50"
                            height="50"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="cont">
                          <p className="mb-0 font15 text-uppercase font2 fw-400">
                            Amitabh Kar
                          </p>
                          <span className="font12 th-color d-block lh-20">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="item height100 px-2 bg-white prelative zoomIn wow animated"
                    data-wow-delay=".3s"
                    style={{ visibility: "visible", animationDelay: "0.3s" }}
                  >
                    <div className="prelative height100 p-5 boga text-center shadow1">
                      <p className="font17 fw-600 mb-2">
                        Family Guest - Siliguri
                      </p>
                      <p>
                        Traveling with kids is always tricky, but Castor Retreat
                        made it easy. The rooms were clean, the staff was kind
                        and patient, and the food was just right for the whole
                        family. We’ll remember this trip for all the right
                        reasons.
                      </p>
                      <div className="info px-4 d-flex align-items-center flex-column">
                        <div className="me-2">
                          <img
                            src={user}
                            alt="Sohini Das"
                            width="50"
                            height="50"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="cont">
                          <p className="mb-0 font15 text-uppercase font2 fw-400">
                            Sohini Das
                          </p>
                          <span className="font12 th-color d-block lh-20">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="item height100 px-2 bg-white prelative zoomIn wow animated"
                    data-wow-delay=".4s"
                    style={{ visibility: "visible", animationDelay: "0.4s" }}
                  >
                    <div className="prelative height100 p-5 boga text-center shadow1">
                      <p className="font17 fw-600 mb-2">
                        Solo Explorer - Sikkim
                      </p>
                      <p>
                        Solo Explorer - Dzongkar felt like a home away from
                        home. The views from my room were absolutely stunning,
                        and the team helped me plan day trips around Gangtok. I
                        loved how quiet and comfortable the whole experience
                        was.
                      </p>
                      <div className="info px-4 d-flex align-items-center flex-column">
                        <div className="me-2">
                          <img
                            src={user}
                            alt="Sayan Mukherjee"
                            width="50"
                            height="50"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="cont">
                          <p className="mb-0 font15 text-uppercase font2 fw-400">
                            Sayan Mukherjee
                          </p>
                          <span className="font12 th-color d-block lh-20">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div
                className="testi-prev position-absolute top-50 start-0 translate-middle-y btn btn-outline-dark rounded-circle ms-3"
                style={{ width: "45px", height: "45px", zIndex: 10 }}
              >
                <i className="bi bi-arrow-left"></i>
              </div>
              <div
                className="testi-next position-absolute top-50 end-0 translate-middle-y btn btn-outline-dark rounded-circle me-3"
                style={{ width: "45px", height: "45px", zIndex: 10 }}
              >
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="clearfix"></div>
          <div className="text-center my-3 my-lg-4">
            <a
              href="testimonials"
              className="main-btn main-btn2 outline font15 fw-400 text-uppercase"
            >
              Explore More
            </a>
          </div>
        </div>
      </section>

      <section
        className="d-flex align-items-center"
        style={{ height: "35vh", overflow: "hidden" }}
      >
        <div className="container-fluid h-100 d-flex align-items-center">
          <div className="p-4 p-lg-5 bg2 w-100 h-100 d-flex align-items-center">
            <div className="row white align-items-center justify-content-between w-100">
              <div className="col-12 col-md-12 col-lg-3">
                <div className="d-flex align-items-center flex-column flex-lg-row">
                  <img
                    src={Partnership_Icon}
                    alt="Icon"
                    className="max mb-1 mb-lg-0 me-lg-3"
                    width="60"
                  />
                  <h3 className="h3 white font20-sm">
                    Castor <br className="d-none d-lg-block" /> Partnership
                    Program
                  </h3>
                </div>
              </div>

              <div className="col-12 col-md-9 col-lg-7 col-xl-6 mb-3 mb-lg-0">
                <div className="partnership-feature row g-0 text-center align-items-center flex-wrap justify-content-between">
                  <div className="col-6 col-md-3">
                    <div className="p-2 px-xl-3 my-2">
                      <img
                        src={Growth_Icon}
                        alt="Growth"
                        width="50"
                        height="50"
                      />
                      <p className="m-0 lh-22 font16 font17-lg white">
                        Scalable Growth Model
                      </p>
                    </div>
                  </div>

                  <div className="col-6 col-md-3">
                    <div className="p-2 px-xl-3 my-2">
                      <img
                        src={Operation_Icon}
                        alt="Operation"
                        width="50"
                        height="50"
                      />
                      <p className="m-0 lh-22 font16 font17-lg white">
                        Operational Expertise
                      </p>
                    </div>
                  </div>

                  <div className="col-6 col-md-3">
                    <div className="p-2 px-xl-3 my-2">
                      <img
                        src={Brand_Icon}
                        alt="Brand"
                        width="50"
                        height="50"
                      />
                      <p className="m-0 lh-22 font16 font17-lg white">
                        Brand & Visibility
                      </p>
                    </div>
                  </div>

                  <div className="col-6 col-md-3">
                    <div className="p-2 px-xl-3 my-2">
                      <img
                        src={Onboarding_Icon}
                        alt="Onboarding"
                        width="50"
                        height="50"
                      />
                      <p className="m-0 lh-22 font16 font17-lg white">
                        Seamless Onboarding
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-3 col-lg-2 text-center ps-lg-4 d-flex flex-column justify-content-center">
                <h4 className="h5 white text-uppercase mb-3">
                  Become A Partner
                </h4>
                <a
                  href="become-a-partner"
                  className="btn btn-warning rounded-0 font15 text-uppercase"
                >
                  Join Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prelative py-4 py-lg-5">
        <div className="container-fluid">
          <div className="text-center mb-3">
            <h3
              className="h1 fw-500 text-uppercase fadeInDown wow animated"
              data-wow-delay=".15s"
              style={{ visibility: "visible", animationDelay: "0.15s" }}
            >
              <span>Castor Travel Articles</span>
            </h3>
            <img
              src={borderLine}
              alt="Frame"
              className="max fadeInUp wow animated"
              data-wow-delay=".1s"
              width="150"
              style={{ visibility: "visible", animationDelay: "0.1s" }}
            />
          </div>

          <div className="row mt-4">
            <div className="col-12 col-md-6 col-lg-4 my-4">
              <div className="height100 bg-white shadow1 prelative">
                <div className="ofhidden">
                  <a
                    href="blog/siliguri-to-sikkim-the-ultimate-road-trip-itinerary"
                    className="text-decoration-none"
                  >
                    <img
                      src={Blog_IMG_1}
                      alt="Siliguri to Sikkim: The Ultimate Road Trip Itinerary"
                      className="max w-100"
                      style={{ height: "auto" }}
                    />
                  </a>
                </div>
                <div className="pt-1 bg6"></div>
                <div className="p-3 p-xl-4">
                  <p className="mb-2 font14 withhr op8">
                    # Published on 28-05-2025
                  </p>
                  <p className="h4 transition fw-500 text-uppercase mb-3">
                    <a
                      href="blog/siliguri-to-sikkim-the-ultimate-road-trip-itinerary"
                      className="text-decoration-none text-dark"
                    >
                      Siliguri to Sikkim: The Ultimate Road Trip Itinerary
                    </a>
                  </p>
                  <p className="op8 heighto">
                    Turn your drive from Siliguri to Sikkim into an
                    unforgettable journey with scenic stops, food trails, and
                    smart travel tips.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 my-4">
              <div className="height100 bg-white shadow1 prelative">
                <div className="ofhidden">
                  <a
                    href="blog/a-relaxing-weekend-in-bagdogra-hidden-gems-quick-escapes"
                    className="text-decoration-none"
                  >
                    <img
                      src={Blog_IMG_2}
                      alt="A Relaxing Weekend in Bagdogra: Hidden Gems & Quick Escapes"
                      className="max w-100"
                      style={{ height: "auto" }}
                    />
                  </a>
                </div>
                <div className="pt-1 bg6"></div>
                <div className="p-3 p-xl-4">
                  <p className="mb-2 font14 withhr op8">
                    # Published on 28-05-2025
                  </p>
                  <p className="h4 transition fw-500 text-uppercase mb-3">
                    <a
                      href="blog/a-relaxing-weekend-in-bagdogra-hidden-gems-quick-escapes"
                      className="text-decoration-none text-dark"
                    >
                      A Relaxing Weekend in Bagdogra: Hidden Gems & Quick
                      Escapes
                    </a>
                  </p>
                  <p className="op8 heighto">
                    Bagdogra is more than a transit town - uncover nature spots,
                    peaceful retreats, and the perfect staycation ideas for a
                    weekend escape.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 my-4">
              <div className="height100 bg-white shadow1 prelative">
                <div className="ofhidden">
                  <a
                    href="blog/top-10-things-to-do-in-gangtok-a-complete-travel-guide-for-2025"
                    className="text-decoration-none"
                  >
                    <img
                      src={Blog_IMG_3}
                      alt="Top 10 Things to Do in Gangtok: A Complete Travel Guide for 2025"
                      className="max w-100"
                      style={{ height: "auto" }}
                    />
                  </a>
                </div>
                <div className="pt-1 bg6"></div>
                <div className="p-3 p-xl-4">
                  <p className="mb-2 font14 withhr op8">
                    # Published on 28-05-2025
                  </p>
                  <p className="h4 transition fw-500 text-uppercase mb-3">
                    <a
                      href="blog/top-10-things-to-do-in-gangtok-a-complete-travel-guide-for-2025"
                      className="text-decoration-none text-dark"
                    >
                      Top 10 Things to Do in Gangtok: A Complete Travel Guide
                      for 2025
                    </a>
                  </p>
                  <p className="op8 heighto">
                    From monasteries to ropeways, discover the top 10 must-visit
                    attractions in Gangtok to make your 2025 holiday truly
                    unforgettable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix"></div>
          <div className="text-center mt-3 mt-lg-4">
            <a href="blog" className="main-btn main-btn2 fw-400 text-uppercase">
              Read More Article
            </a>
          </div>
        </div>
      </section>
      {/* Social Media Section */}
      <section
        className="py-5 text-center"
        style={{ backgroundColor: "var(--main-color7)" }}
      >
        <div className="container">
          <h3
            className="h2 text-uppercase mb-3"
            style={{ fontFamily: "var(--font1)" }}
          >
            Share Your Castor Social Moments
          </h3>
          <p className="h4 fw-600 mb-4" style={{ fontFamily: "var(--font2)" }}>
            Post Your Memories Using #CastorRetreat
          </p>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#3b5998",
                color: "white",
              }}
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#E4405F",
                color: "white",
              }}
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#000000",
                color: "white",
              }}
            >
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
