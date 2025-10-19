import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Accordion, Row, Col } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import borderLine from "../assets/border.svg";
import Header from "../components/Header";


const RoomCard = ({ room }) => (
  <div className="roombox prelative rounded-1 border1 rounded-1">
    <div className="single-rooms-box transition rounded-1">
      <a href={room?.link || "#"} className="d-block prelative">
        <img
          src={room?.image || "/assets/placeholder-room.jpg"}
          alt={room?.name || "Room"}
          className="max transition objectfit"
        />
        <ul className="iconsdd">
          
          {Array.isArray(room?.amenities) &&
            room.amenities.map((amen, idx) => (
              <li key={idx}>
                <img
                  src={amen?.icon || "/assets/placeholder-icon.svg"}
                  width="20"
                  alt={amen?.title || "Amenity"}
                  title={amen?.title || "Amenity"}
                  className="max"
                />
              </li>
            ))}
        </ul>
      </a>
    </div>
    <div className="room-desc p-3 p-lg-4 bg-white9 prelative shadow1">
      <h3 className="m-0 h4 bodycolor">
        <a
          className="m-0 fw-500 bodycolor d-inline-block"
          href={room?.link || "#"}
        >
          {room?.name || "Room"}
        </a>
      </h3>
      <div className="row align-items-center">
        <div className="col-sm-8 py-1">
          <span className="bodycolor d-block">
            {room?.tagline || "Comfortable stay"}
          </span>
        </div>
        <div className="col-sm-4 py-1 text-end">
          <a
            href={room?.link || "#"}
            className="main-btn main-btn1 btn-sm lh-26"
          >
            View & Book
          </a>
        </div>
      </div>
    </div>
  </div>
);

const AmenityItem = ({ amenity }) => (
  <li
    className="col-6 col-md-4 col-lg-3 amen my-3 fadeInUp wow"
    data-wow-delay=".15s"
  >
    <div className="iconaaa">
      <img
        src={amenity?.icon || "/assets/placeholder-icon.svg"}
        width="22"
        height="22"
        className="max me-2"
        alt={amenity?.name || "Amenity"}
        title={amenity?.name || "Amenity"}
      />
      
      <span>{amenity?.name || "Amenity"}</span>
    </div>
  </li>
);

const CelebrateCard = ({ item }) => (
  <div className="shadow item h-100 bg-white v">
    <div className="d-flex flex-column h-100 prelative text-center prelative">
      <img src={item.image} alt={item.name} className="max" />
      <div className="con text-center p-4 pb-5 bg-white">
        <h5 className="h4 font1 mb-2 fadeInDown wow" data-wow-delay=".3s">
          <a href={item.link} className="d-inline-block fw-500">
            {item.name}
          </a>
        </h5>
        <p className="font15 mb-1 d-block fadeInDown wow" data-wow-delay=".6s">
          {item.tagline}
        </p>
        <p
          className="font16 text-center d-inline-block fw-500 fadeInDown wow"
          data-wow-delay=".5s"
        >
          {item.details}
        </p>
      </div>
      <div className="dhangra">
        <a
          href={item.link}
          className="d-inline-block font15 font1 fw-400 text-uppercase fadeInDown wow"
          data-wow-delay=".7s"
        >
          Discover More <i className="ms-3 bi bi-arrow-right-circle-fill"></i>
        </a>
      </div>
    </div>
  </div>
);

const LocationAccordion = ({ location }) => (
  <Accordion defaultActiveKey="0" className="faq-accordion">
    <Accordion.Item
      eventKey="0"
      className="border-0 rounded-0 fadeInUp wow"
      data-wow-delay=".1s"
    >
      <Accordion.Header className="rounded-0">
        <span className=" py-3 py-lg-4 transition text-uppercase font1 font20 font18-sm rounded-0 active">
          Getting to Hotel
        </span>
      </Accordion.Header>
      <Accordion.Body className="bg-white ttr p-3 rounded-0">
       
        <p className="font3 font18 font17-md mb-2 fadeInUp wow">
          {location?.address || "Address not available"}
        </p>
        <a
          href={location?.mapLink || "#"}
          className="font3 font17 font16-md ls1 undy d-inline-block th-color text-uppercase"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Google Map <i className="bi bi-chevron-right"></i>
        </a>
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item
      eventKey="1"
      className="border-0 rounded-0 fadeInUp wow"
      data-wow-delay=".2s"
    >
      <Accordion.Header className="rounded-0">
        <span className=" py-3 py-lg-4 transition text-uppercase font1 font20 font18-sm rounded-0 collapsed">
          Airport Access
        </span>
      </Accordion.Header>
      <Accordion.Body className="bg-white ttr p-3 rounded-0">
        
        <p>
          {location?.airportText || "Airport access information not available."}
        </p>
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item
      eventKey="2"
      className="border-0 rounded-0 fadeInUp wow"
      data-wow-delay=".3s"
    >
      <Accordion.Header className="rounded-0">
        <span className=" py-3 py-lg-4 transition text-uppercase font1 font20 font18-sm rounded-0 collapsed">
          Transport
        </span>
      </Accordion.Header>
      <Accordion.Body className="bg-white ttr p-3 rounded-0">
        
        <p>
          {location?.transportText || "Transport information not available."}
        </p>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

const FAQAccordion = ({ faqs }) => (
  <Accordion defaultActiveKey="0" className="faq-accordion">
    {faqs.map((faq, idx) => (
      <Accordion.Item
        key={idx}
        eventKey={idx.toString()}
        className="border-0 rounded-0 mb-3 mb-lg-4 fadeInUp wow "
        data-wow-delay={`.${idx + 1}s`}
      >
        <Accordion.Header className="rounded-0 ">
          <span
            className={` p-3 transition font3 font17 font16-sm rounded-0  ${
              idx === 0 ? "active" : "collapsed"
            }`}
          >
            {faq.question}
          </span>
        </Accordion.Header>
        <Accordion.Body className="bg-white ttr p-3 rounded-0">
          <p>{faq.answer}</p>
        </Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
);

function HotelPage() {
  const { slug } = useParams();
  const [hotel, setHotel] = useState(null);
  const [terms, setTerms] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryOffset, setGalleryOffset] = useState(0);
  const [hasMoreGallery, setHasMoreGallery] = useState(true);
  const [isLoadingGallery, setIsLoadingGallery] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [activeSection, setActiveSection] = useState("about"); 
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/hotels/${slug}`);
        const data = res.data;

        setHotel(data);

        setTerms(data.terms || null);

        if (data.gallery) {
          setGalleryImages(data.gallery.slice(0, 9));
          setHasMoreGallery(data.gallery.length > 9);
        }
      } catch (err) {
        console.error("Error fetching hotel:", err);
        setError("Hotel not found (404)");
      }
    };
    fetchData();
  }, [slug]);

  
  const loadMoreGallery = useCallback(async () => {
    if (isLoadingGallery || !hasMoreGallery) return;
    setIsLoadingGallery(true);
    try {
      const res = await axios.get(
        `http://localhost:8080/api/hotels/${slug}/gallery?offset=${galleryOffset}&limit=9`
      );
      const { images, hasMore } = res.data;
      setGalleryImages((prev) => [...prev, ...images]);
      setGalleryOffset((prev) => prev + images.length);
      setHasMoreGallery(hasMore);
    } catch (err) {
      console.error("Error loading gallery:", err);
    }
    setIsLoadingGallery(false);
  }, [slug, galleryOffset, hasMoreGallery, isLoadingGallery]);

  
  useEffect(() => {
    const sections = [
      "about",
      "rooms",
      "amenities",
      "celebrate",
      "photogal",
      "location",
      "terms",
      "faqs",
    ];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  const openLightbox = (index) => {
    setModalImage(galleryImages[index]);
    setShowModal(true);
  };
  const closeLightbox = () => setShowModal(false);

  if (error)
    return (
      <div className="container py-5 text-center">
        <h2>{error}</h2>
        <p>
          <a href="/hotels">Back to Hotels</a>
        </p>
      </div>
    );
  if (!hotel)
    return (
      <div className="container py-5 text-center">
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <h5 className="mt-3">Loading hotel details...</h5>
      </div>
    );

  const sections = [
    { id: "about", label: "Overview" },
    { id: "rooms", label: "Rooms & Suits" },
    { id: "amenities", label: "Amenities" },
    { id: "celebrate", label: "Celebrate" },
    { id: "photogal", label: "Gallery" },
    { id: "location", label: "Direction" },
    { id: "terms", label: "Terms" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <>
      <Header activeSlug={slug} />
      {/* Hero Banner */}
      <div
        className="banner-header inner valignend bg-img bg-center prelative"
        style={{ backgroundImage: `url(${hotel.overview.image})` }}
      >
        <div className="container-fluid py-5 prelative zindex3 ofhidden">
          <div className="caption">
            <h1 className="text-uppercase white m-0 fadeInUp wow animated">
              {hotel.name}
            </h1>
          </div>
        </div>
      </div>
      {/* Sticky Nav */}
      <section className="sticky-top bg-white zindex3">
        <div className="container-fluid">
          <div className="vallery text-center">
            <ul className="m-0 p-0 sscroll font3 font18 font17-md font16-sm">
              {sections.map((section) => (
                <li
                  key={section.id}
                  className={activeSection === section.id ? "active-list" : ""}
                >
                  <a href={`#${section.id}`}>{section.label}</a>
                </li>
              ))}
              <li>
                <a href={`booking?hotelname=${encodeURIComponent(hotel.name)}`}>
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
  
      <nav aria-label="breadcrumb" className="py-3 py-lg-4 bg-white">
        <div className="container-fluid">
          <ol className="breadcrumb m-0 font3 font17 font16-sm">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/hotels">Hotels</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {hotel.name}
            </li>
          </ol>
        </div>
      </nav>
     
      <section id="about" className="py-4 py-lg-5 obg m-5">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-6 col-xl-5 col-xxl-4 my-3">
              <h2
                className="h1 mb-3 mb-lg-4 fw-400 withhr fadeInUp wow"
                data-wow-delay=".1s"
              >
                <span>{hotel?.overview?.title || "Overview"}</span>
              </h2>
              <div
                className="pjustify font17 font16-md font15-sm fadeInUp wow"
                data-wow-delay=".15s"
                dangerouslySetInnerHTML={{
                  __html:
                    hotel?.overview?.description ||
                    "<p>No description available</p>",
                }}
              />
            </div>
            <div className="col-12 col-lg-6 col-xl-7 my-3 ps-xl-5">
              <img
                src={
                  hotel?.overview?.coverImage ||
                  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                }
                alt={hotel?.name || "Hotel"}
                className="max img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="rooms" className="py-4 py-lg-5">
        <div className="container-fluid">
          <div className="row justify-content-center text-center ">
            <div className="col-lg-8 ">
              <h2
                className="h1 mb-3 mb-lg-4 fw-400 withhr fadeInUp wow "
                data-wow-delay=".1s"
              >
                <span className="d-inline-block ">Rooms & Suits</span>
              </h2>

              <img
                src={borderLine}
                alt="Frame"
                class="max  fadeInUp wow animated mb-3"
                data-wow-delay=".1s"
                width="150"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              ></img>
            </div>
          </div>
          {hotel?.rooms &&
          Array.isArray(hotel.rooms) &&
          hotel.rooms.length > 0 ? (
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              className="mySwiper fadeInUp wow"
            >
              {hotel.rooms.map((room, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <RoomCard room={room} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <p className="text-center">No rooms available.</p>
          )}
        </div>
      </section>
    
      <section id="amenities" className="py-4 py-lg-5">
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="h1 withhr mb-4">
                <span className="d-inline-block">Amenities</span>
              </h2>
              <hr className="my-4" />
            </div>
          </div>

          {hotel?.amenities &&
          Array.isArray(hotel.amenities) &&
          hotel.amenities.length > 0 ? (
            <ul className="lh-22 row m-0 p-0">
              {hotel.amenities.map((amenity, idx) => {
                return <AmenityItem key={idx} amenity={amenity} />;
              })}
            </ul>
          ) : (
            <p className="text-center">No amenities listed.</p>
          )}
        </div>
      </section>
     
      <section id="celebrate" className="py-4 py-lg-5 m-5">
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="h1 withhr mb-4">
                <span className="d-inline-block">Celebrate</span>
              </h2>
              <img src={borderLine} alt="Border" className="mb-4 w-25" />
            </div>
          </div>

          {hotel?.celebrate &&
          Array.isArray(hotel.celebrate) &&
          hotel.celebrate.length > 0 ? (
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              className="mySwiper fadeInUp wow"
            >
              {hotel.celebrate.map((item, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <CelebrateCard item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <p className="text-center">No celebrate options available.</p>
          )}
        </div>
      </section>
      
      <section id="photogal" className="py-4 py-lg-5">
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="h1 withhr mb-4">
                <span className="d-inline-block">Gallery</span>
              </h2>
              <img src={borderLine} alt="Border" className="mb-4 w-25" />
            </div>
          </div>
          <div className="row gx-2 ilight">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="col-6 col-md-4 col-lg-4 fadeInUp wow"
                data-wow-delay={`.${(idx % 3) + 1}s`}
              >
                <a
                  href="#"
                  className="zoomer d-block"
                  onClick={(e) => {
                    e.preventDefault();
                    openLightbox(idx);
                  }}
                >
                  <img src={image} alt="Gallery Image" className="max" />
                </a>
              </div>
            ))}
          </div>
          {hasMoreGallery && (
            <div className="text-center mt-4 w-50">
              <button
                className="main-btn main-btn1"
                onClick={loadMoreGallery}
                disabled={isLoadingGallery}
              >
                {isLoadingGallery ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </div>
      </section>

      
      <section id="location" className="py-4 py-lg-5 ">
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="h1 withhr mb-4">
                <span className="d-inline-block">Direction</span>
              </h2>
              <img src={borderLine} alt="Border" className="mb-4 w-25" />
            </div>
          </div>
          <div className="row align-items-stretch">
            <div className="col-lg-6">
              {hotel?.location ? (
                <LocationAccordion location={hotel.location} />
              ) : (
                <p className="text-center">
                  Location information not available.
                </p>
              )}
            </div>
            <div className="col-lg-6">
              <div className="map-wrapper">
                <iframe
                  src={hotel?.location?.mapEmbed || "about:blank"}
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="Hotel Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section id="terms" className="py-4 py-lg-5">
        <div className="container">
          <div className="p-4  bb5">
            <div className="text-center mb-3">
              <h3
                className="h2 fw-400 text-uppercase fadeInDown wow animated"
                data-wow-delay=".15s"
              >
                <span>Hotel Policies</span>
              </h3>
              <img
                src={borderLine}
                alt="Frame"
                className="max fadeInUp wow animated mb-4"
                data-wow-delay=".1s"
                width="150"
              />
            </div>
            <div className="prelative hbjk my-4 angle">
              <p>
                To ensure a comfortable and seamless experience for all our
                guests, we kindly request you to review our standard hotel
                policies applicable across all Castor Retreat properties.
              </p>

              <p>
                <strong>Check-In & Check-Out</strong>
              </p>
              <ul>
                <li>
                  <strong>Check-In Time:</strong> 12:00 PM
                </li>
                <li>
                  <strong>Check-Out Time:</strong> 11:00 AM
                </li>
                <li>
                  Early check-in or late check-out is subject to availability
                  and may incur additional charges.
                </li>
              </ul>

              <p>
                <strong>Booking & Payments</strong>
              </p>
              <ul>
                <li>
                  Reservations are confirmed upon full/partial advance payment.
                </li>
                <li>
                  Valid government-issued photo ID is mandatory for all guests
                  at check-in.
                </li>
                <li>
                  We accept major credit/debit cards, UPI, and net banking.
                </li>
              </ul>

              <p>
                <strong>Cancellation & Refund</strong>
              </p>
              <ul>
                <li>
                  Cancellations must be made at least 48 hours before the
                  check-in date to avoid charges.
                </li>
                <li>
                  Peak season and group booking policies may vary. Please refer
                  to our <strong>Cancellation Policy</strong> for full details.
                </li>
              </ul>

              <p>
                <strong>Children & Extra Bed Policy</strong>
              </p>
              <ul>
                <li>
                  Children under 5 years of age stay complimentary with parents
                  (without extra bed).
                </li>
                <li>
                  Extra bed or mattress is available on request at applicable
                  charges.
                </li>
              </ul>

              <p>
                <strong>Guest Conduct</strong>
              </p>
              <ul>
                <li>
                  Guests are expected to maintain decorum and respect property
                  rules and staff.
                </li>
                <li>
                  Smoking is strictly prohibited in non-smoking rooms and indoor
                  public areas.
                </li>
                <li>Any damage caused to hotel property will be chargeable.</li>
                <li>Hotel reserves the right of admission for all guests.</li>
              </ul>

              <p>
                <strong>Pet Policy</strong>
              </p>
              <ul>
                <li>Pets are not allowed at any Castor Retreat property.</li>
              </ul>

              <p>
                <strong>Visitors Policy</strong>
              </p>
              <ul>
                <li>
                  Outside guests are permitted in rooms only upon prior approval
                  from the front desk.
                </li>
                <li>
                  All visitors must register at the reception and present valid
                  identification.
                </li>
              </ul>

              <p>
                <strong>The Above mentioned TERMS are NON-NEGOTIABLE.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs  */}
      <section id="faqs" className="py-4 py-lg-5">
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="h1 withhr mb-4">
                <span className="d-inline-block">
                  Frequently Asked Questions
                </span>
              </h2>
              <img src={borderLine} alt="Border" className="mb-4 w-25" />
            </div>
          </div>
          {hotel.faqs && hotel.faqs.length > 0 ? (
            <FAQAccordion faqs={hotel.faqs} />
          ) : (
            <p className="text-center">No FAQs available.</p>
          )}
        </div>
      </section>
      
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.8)", zIndex: 1055 }}
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content bg-transparent border-0">
              <div className="modal-body p-0 position-relative">
                <img
                  src={modalImage}
                  alt="Gallery Image"
                  className="img-fluid w-100"
                  style={{ maxHeight: "90vh", objectFit: "contain" }}
                />
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 m-3"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HotelPage;
