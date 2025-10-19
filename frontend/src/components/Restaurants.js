import React from "react";
import logoWhite from "../assets/border.svg";

function Restaurants() {
  return (
    <>
      {/* Hero Banner */}
      <div
        className="banner-header inner valignend bg-img bg-center prelative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/262882/pexels-photo-262882.jpeg')",
        }}
      >
        <div className="container-fluid py-5 prelative zindex3 ofhidden">
          <div className="caption prelative zindex3">
            <div className="prelative d-inline-block">
              <h1 className="text-uppercase white m-0 fadeInUp wow animated">
                <span>Dining at Castor Retreat</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-4 py-lg-5">
        <div className="container-fluid my-lg-3">
          <div className="text-center mb-3">
            <h2
              className="h1 fw-400 text-uppercase fadeInDown wow animated"
              data-wow-delay=".15s"
            >
              <span className="">
                A Culinary Journey Across Every Destination
              </span>
            </h2>
            <img
              src={logoWhite}
              alt="Frame"
              className="max fadeInUp wow animated"
              data-wow-delay=".1s"
              width="150"
            />
          </div>

          <p
            className="mb-4 text-center col-12 col-lg-8 m-auto font18 font17-md font16-sm fw-400 fadeInDown wow animated"
            data-wow-delay=".1s"
          >
            At Castor Retreat, every meal is an experience. Across all our
            hotels, our in-house multicuisine restaurants serve a thoughtfully
            curated menu that brings together the best of Indian, Oriental, and
            Continental flavours. Whether you're dining in Siliguri, Bagdogra,
            or Gangtok, our culinary spaces combine warm hospitality, ambient
            decor, and impeccable taste.
          </p>

          <p className="text-center">
            <a
              href="#resula"
              className="clicky d-inline-block font1 text-uppercase th-color fw-600"
            >
              Explore Our Restaurants <i className="bi bi-arrow-right"></i>
            </a>
          </p>

          <hr className="op1" />

          
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div className="item my-3">
                <div className="">
                  <img
                    src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
                    alt="Multicuisine Mastery"
                    className="max mb-3"
                  />
                  <h4 className="mb-2 bodycolor withhr">
                    Multicuisine Mastery
                  </h4>
                  <p className="m-0">
                    Enjoy a versatile menu featuring Indian classics, spicy
                    Asian delicacies, and Continental favourites.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div className="item my-3">
                <div className="">
                  <img
                    src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
                    alt="Elegant Ambience"
                    className="max mb-3"
                  />
                  <h4 className="mb-2 bodycolor withhr">
                    Warm & Elegant Ambience
                  </h4>
                  <p className="m-0">
                    Our restaurants are designed to provide a refined yet
                    welcoming dining environment - perfect for families,
                    couples, or business meals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div className="item my-3">
                <div className="">
                  <img
                    src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
                    alt="Fresh, Locally Sourced Ingredients"
                    className="max mb-3"
                  />
                  <h4 className="mb-2 bodycolor withhr">
                    Fresh, Locally Sourced Ingredients
                  </h4>
                  <p className="m-0">
                    We prioritize freshness and flavour with ingredients sourced
                    from trusted local suppliers and farms.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div className="item my-3">
                <div className="">
                  <img
                    src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
                    alt="Room Service & Private Dining"
                    className="max mb-3"
                  />
                  <h4 className="mb-2 bodycolor withhr">
                    Room Service & Private Dining
                  </h4>
                  <p className="m-0">
                    Enjoy your favourite dishes in the comfort of your room or
                    in curated private setups on request.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="op1" />

          <div className="text-center mb-3 mt-4 mt-lg-5" id="resula">
            <h3
              className="h1 fw-400 text-uppercase fadeInDown wow animated"
              data-wow-delay=".15s"
            >
              <span className="">Explore Our Restaurants</span>
            </h3>
            <img
              src={logoWhite}
              alt="Frame"
              className="max fadeInUp wow animated"
              data-wow-delay=".1s"
              width="150"
            />
          </div>

          <div className="row" style={{ padding: "0 12%" }}>
            <div className="col-12 col-md-6 col-lg-4 my-4">
              <div className="border1 item prelative rounded-1 height100 shadow1">
                <div className="d-flex flex-column justify-content-center prelative height100">
                  <img
                    src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg"
                    alt="Castor Restaurant"
                    className="max rounded-top"
                  />
                  <div className="con p-4 butna prelative">
                    <h5 className="h5 font1 text-uppercase mb-2">
                      <a
                        href="/hotels/surya-dzongkar-residency-by-castor-gangtok/restaurant/castor-restaurant"
                        className="withhr d-inline-block fw-500"
                      >
                        Castor Restaurant
                      </a>
                    </h5>
                    <p className="font14 mb-2 mb-md-2 d-inline-block fw-400">
                      Authentic Flavours. Elevated Views.
                    </p>
                    <p className="font16 mb-3 mb-md-1 d-inline-block fw-400">
                      <i className="bi bi-geo-alt"></i> Surya Dzongkar Residency
                      By Castor Gangtok
                    </p>
                    <a
                      href="/hotels/surya-dzongkar-residency-by-castor-gangtok/restaurant/castor-restaurant"
                      className="prelative d-inline-block main-btn main-btn2 py-1 text-uppercase"
                    >
                      Discover More{" "}
                      <i className="ms-3 bi bi-arrow-right-circle-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 my-4">
              <div className="border1 item prelative rounded-1 height100 shadow1">
                <div className="d-flex flex-column justify-content-center prelative height100">
                  <img
                    src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg"
                    alt="Castor Restaurant"
                    className="max rounded-top"
                  />
                  <div className="con p-4 butna prelative">
                    <h5 className="h5 font1 text-uppercase mb-2">
                      <a
                        href="/hotels/surya-eco-retreat-by-castor-bagdogra/restaurant/castor-restaurant"
                        className="withhr d-inline-block fw-500"
                      >
                        Castor Restaurant
                      </a>
                    </h5>
                    <p className="font14 mb-2 mb-md-2 d-inline-block fw-400">
                      Naturally Nourishing Flavours
                    </p>
                    <p className="font16 mb-3 mb-md-1 d-inline-block fw-400">
                      <i className="bi bi-geo-alt"></i> Surya Eco Retreat By
                      Castor Bagdogra
                    </p>
                    <a
                      href="/hotels/surya-eco-retreat-by-castor-bagdogra/restaurant/castor-restaurant"
                      className="prelative d-inline-block main-btn main-btn2 py-1 text-uppercase"
                    >
                      Discover More{" "}
                      <i className="ms-3 bi bi-arrow-right-circle-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="col-12 col-md-6 col-lg-4 my-4">
              <div className="border1 item prelative rounded-1 height100 shadow1">
                <div className="d-flex flex-column justify-content-center prelative height100">
                  <img
                    src="https://images.pexels.com/photos/1383776/pexels-photo-1383776.jpeg"
                    alt="Castor Restaurant"
                    className="max rounded-top"
                  />
                  <div className="con p-4 butna prelative">
                    <h5 className="h5 font1 text-uppercase mb-2">
                      <a
                        href="/hotels/surya-grand-by-castor-siliguri/restaurant/castor-restaurant"
                        className="withhr d-inline-block fw-500"
                      >
                        Castor Restaurant
                      </a>
                    </h5>
                    <p className="font14 mb-2 mb-md-2 d-inline-block fw-400">
                      Delight in Every Bite, Right in Siliguri
                    </p>
                    <p className="font16 mb-3 mb-md-1 d-inline-block fw-400">
                      <i className="bi bi-geo-alt"></i> Surya Grand By Castor
                      Siliguri
                    </p>
                    <a
                      href="/hotels/surya-grand-by-castor-siliguri/restaurant/castor-restaurant"
                      className="prelative d-inline-block main-btn main-btn2 py-1 text-uppercase"
                    >
                      Discover More{" "}
                      <i className="ms-3 bi bi-arrow-right-circle-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-2 bready">
        <div className="container">
          <ol
            className="font14 breadcrumb justify-content-center dark mb-0 text-uppercase fadeInUp wow animated"
            data-wow-delay=".15s"
          >
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="/restaurants">Restaurants</a>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

export default Restaurants;
