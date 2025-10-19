import React from "react";
import logoWhite from "../assets/border.svg";

function Meetings() {
  return (
    <>
      {/* Hero Banner */}
      <div
        className="banner-header inner valignend bg-img bg-center prelative"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg')" }}
      >
        <div className="container-fluid py-5 prelative zindex3 ofhidden">
          <div className="caption prelative zindex3">
            <div className="prelative d-inline-block">
              <h1 className="text-uppercase white m-0 fadeInUp wow animated">
                <span>Meetings & Events</span>
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
              <span className="">Versatile Spaces for Every Occasion</span>
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
            From corporate meetings to grand celebrations, Castor Retreat offers
            thoughtfully designed banquet halls and event spaces across
            Siliguri, Bagdogra, and Gangtok. Whether you're planning an intimate
            conference, a lavish wedding, or a social gathering, our venues
            adapt to your vision - backed by professional service, modern
            amenities, and curated hospitality.
          </p>

          <p className="text-center">
            <a
              href="#resula"
              className="clicky d-inline-block font1 text-uppercase th-color fw-600"
            >
              Explore Our Banquets <i className="bi bi-arrow-right"></i>
            </a>
          </p>

          <hr className="op1" />

         
          <div className="row"   style={{ padding: '0 12%' }}>
            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div className="item my-3">
                <div className="">
                  <img
                    src="https://images.pexels.com/photos/13834522/pexels-photo-13834522.jpeg"
                    alt="Banquet Halls"
                    className="max mb-3"
                  />
                  <h4 className="mb-2 bodycolor withhr">
                    Multiple Banquet Halls
                  </h4>
                  <p className="m-0">
                    Spacious and flexible venues with custom seating layouts to
                    suit events of all scales.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div className="item my-3">
                <div className="">
                  <img
                    src="https://images.pexels.com/photos/2487438/pexels-photo-2487438.jpeg"
                    alt="Amenities"
                    className="max mb-3"
                  />
                  <h4 className="mb-2 bodycolor withhr">Modern Amenities</h4>
                  <p className="m-0">
                    Audio-visual setups, high-speed Wi-Fi, stage lighting, and
                    on-demand tech support for seamless execution.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div className="item my-3">
                <div className="">
                  <img
                    src="https://images.pexels.com/photos/7648239/pexels-photo-7648239.jpeg"
                    alt="Event Coordination"
                    className="max mb-3"
                  />
                  <h4 className="mb-2 bodycolor withhr">
                    Expert Event Coordination
                  </h4>
                  <p className="m-0">
                    From decor to logistics, our team ensures every detail is
                    handled with precision and care.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div className="item my-3">
                <div className="">
                  <img
                    src="https://images.pexels.com/photos/3217157/pexels-photo-3217157.jpeg"
                    alt="Catering Excellence"
                    className="max mb-3"
                  />
                  <h4 className="mb-2 bodycolor withhr">Catering Excellence</h4>
                  <p className="m-0">
                    Choose from Indian, Oriental, and Continental menus -
                    tailored to your event style and guest preferences.
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
              <span className="">Explore Our Banquet Halls</span>
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
                    src="https://images.pexels.com/photos/257385/pexels-photo-257385.jpeg"
                    alt="Sunshine Hall"
                    className="max rounded-top"
                  />
                  <div className="con p-4 butna prelative">
                    <h5 className="h5 font1 text-uppercase mb-2">
                      <a
                        href="/hotels/surya-dzongkar-residency-by-castor-gangtok/banquet/sunshine-hall"
                        className="d-inline-block fw-500 withhr"
                      >
                        Sunshine Hall
                      </a>
                    </h5>
                    <p className="font14 mb-2 mb-md-2 d-inline-block fw-400">
                      Elegant Events in the Heart of Gangtok
                    </p>
                    <p className="font16 mb-3 mb-md-1 d-inline-block fw-400">
                      <i className="bi bi-geo-alt"></i> Surya Dzongkar Residency
                      By Castor Gangtok
                    </p>
                    <a
                      href="/hotels/surya-dzongkar-residency-by-castor-gangtok/banquet/sunshine-hall"
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
                    src="https://images.pexels.com/photos/316080/pexels-photo-316080.jpeg"
                    alt="Uday Hall"
                    className="max rounded-top"
                  />
                  <div className="con p-4 butna prelative">
                    <h5 className="h5 font1 text-uppercase mb-2">
                      <a
                        href="/hotels/surya-eco-retreat-by-castor-bagdogra/banquet/uday-hall"
                        className="d-inline-block fw-500 withhr"
                      >
                        Uday Hall
                      </a>
                    </h5>
                    <p className="font14 mb-2 mb-md-2 d-inline-block fw-400">
                      Nature-Inspired Celebrations & Gatherings
                    </p>
                    <p className="font16 mb-3 mb-md-1 d-inline-block fw-400">
                      <i className="bi bi-geo-alt"></i> Surya Eco Retreat By
                      Castor Bagdogra
                    </p>
                    <a
                      href="/hotels/surya-eco-retreat-by-castor-bagdogra/banquet/uday-hall"
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
                    src="https://images.pexels.com/photos/2504913/pexels-photo-2504913.jpeg"
                    alt="Multifunctional Banquet Halls"
                    className="max rounded-top"
                  />
                  <div className="con p-4 butna prelative">
                    <h5 className="h5 font1 text-uppercase mb-2">
                      <a
                        href="/hotels/surya-grand-by-castor-siliguri/banquet/multifunctional-banquet-halls"
                        className="d-inline-block fw-500 withhr"
                      >
                        Multifunctional Banquet Halls
                      </a>
                    </h5>
                    <p className="font14 mb-2 mb-md-2 d-inline-block fw-400">
                      Sunshine, Uday, Spectrum & Sunset Hall
                    </p>
                    <p className="font16 mb-3 mb-md-1 d-inline-block fw-400">
                      <i className="bi bi-geo-alt"></i> Surya Grand By Castor
                      Siliguri
                    </p>
                    <a
                      href="/hotels/surya-grand-by-castor-siliguri/banquet/multifunctional-banquet-halls"
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
              <a href="/meetings">Meetings</a>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

export default Meetings;
