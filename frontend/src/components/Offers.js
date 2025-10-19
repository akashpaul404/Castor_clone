import React from "react";
import borderLine from "../assets/border.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Offers() {
  const offers = [
    {
      id: 1,
      title: "Celebration Stay - Book for Events & Earn More",
      image:
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
      validTill: "15 September 2025",
      link: "/offers/celebration-stay-book-for-events-earn-more",
    },
    {
      id: 2,
      title: "Drive & Dine - Travel Smart, Eat Well",
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      validTill: "30 September 2025",
      link: "/offers/drive-dine-travel-smart-eat-well",
    },
    {
      id: 3,
      title: "Hillside Bliss - Couple's Getaway Package",
      image:
        "https://images.pexels.com/photos/16908973/pexels-photo-16908973.jpeg",
      validTill: "31 July 2025",
      link: "/offers/hillside-bliss-couples-getaway-package",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <div
        className="banner-header inner valignend bg-img bg-center prelative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg')",
        }}
      >
        <div className="container-fluid py-5 prelative zindex3 ofhidden">
          <div className="caption prelative zindex3">
            <div className="prelative d-inline-block">
              <h1 className="text-uppercase white m-0 fadeInUp wow animated">
                <span>Offers & Promotions</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section
        className="py-4 py-lg-5 prelative"
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="container-fluid prelative">
          <p className="mb-2 text-center col-12 col-lg-8 m-auto font18 font17-md font16-sm fw-400 fadeInDown wow animated">
            Discover special deals designed to make your stay even more
            rewarding. From seasonal discounts and early-bird rates to curated
            holiday packages, each offer is tailored to enhance your Castor
            Retreat experience - whether you're traveling for work, leisure, or
            celebration.
          </p>
          <p className="mb-4 text-center col-12 col-lg-8 m-auto font18 font17-md font16-sm fw-400 fadeInDown wow animated">
            Book directly with us to unlock the best rates, extra perks, and
            limited-time privileges across all our properties.
          </p>
        </div>
      </section>

      
      <section className="py-4 py-lg-5 prelative">
        <div className="container-fluid prelative">
          <div className="text-center mb-3">
            <h3 className="h1 fw-400 text-uppercase fadeInDown wow animated">
              <span>Explore Promotional Offers</span>
            </h3>
            <img
              src={borderLine}
              alt="Frame"
              className="max fadeInUp wow animated"
              width="150"
            />
          </div>

          <div className="mt-4 row">
            {offers.map((offer) => (
              <div key={offer.id} className="col-12 col-md-6 col-lg-4 my-3">
                <div className="height100">
                  <div className="bg-white b1 p-4 shadow1 prelative height100 offer-card">
                    <a href={offer.link}>
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="max mb-3"
                        style={{
                          borderRadius: "10px",
                          aspectRatio: "16 / 9",
                          objectFit: "cover",
                          width: "100%",
                        }}
                      />
                    </a>
                    <h6 className="h5 font2 my-2 px-2 text-center">
                      <a
                        href={offer.link}
                        className="d-block"
                        style={{ color: "#333", textDecoration: "none" }}
                      >
                        {offer.title}
                      </a>
                    </h6>
                    <p className="text-center mb-2 fw-600 font14">
                      Valid Till {offer.validTill}
                    </p>
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: "10px",
                        width: "100%",
                      }}
                    >
                      <div className="prelative text-center">
                        <a
                          href={offer.link}
                          className="main-btn main-btn2 btn-sm d-inline-block transition"
                        >
                          More Detail{" "}
                          <i className="ms-3 bi bi-arrow-right-circle-fill"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-2 bready">
        <div className="container">
          <ol className="font14 breadcrumb justify-content-center dark mb-0 text-uppercase fadeInUp wow animated">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="/offers">Offers</a>
            </li>
          </ol>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Offers;
