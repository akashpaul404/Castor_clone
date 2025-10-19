import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import borderLine from "../assets/border.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
   
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "/api/contact",
        formData
      );
      console.log("Success:", response.data);
      navigate("/thank-you");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <div
        className="banner-header inner valignend bg-img bg-center prelative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg')",
        }}
      >
        <div className="container-fluid py-5 prelative zindex3 ofhidden">
          <div className="caption prelative zindex3">
            <div className="prelative d-inline-block">
              <h1 className="text-uppercase white m-0 fadeInUp wow animated">
                <span>Contact Us</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-4 py-lg-5 prelative">
        <div className="container prelative">
          <p className="mb-4 text-center col-12 col-lg-8 m-auto font18 font17-md font16-sm fw-400 fadeInDown wow animated">
            We're here to assist you with bookings, enquiries, or any
            information you need. Reach out to our team across Siliguri,
            Bagdogra, or Gangtok for prompt support.
          </p>

          <div className="text-center mb-3">
            <h3 className="h1 fw-400 text-uppercase fadeInDown wow animated">
              <span>Get in Touch</span>
            </h3>
            <img
              src={borderLine}
              alt="Frame"
              className="max fadeInUp wow animated"
              width="150"
            />
          </div>

          <div className="row justify-content-between font17">
            {/* Contact Info */}
            <div className="col-md-12 col-lg-6 my-3">
              <div className="p-3 p-lg-4 bg-white border1 height100 reservations prelative">
                <div className="text d-flex flex-column flex-sm-row align-items-start mb-2">
                  <div
                    className="iconm"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "#fff",
                      borderRadius: "3px",
                      textAlign: "center",
                      lineHeight: "44px",
                      fontSize: "26px",
                      marginRight: "15px",
                    }}
                  >
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <p className="th-color font18 font17-md fw-500 font2 mb-0">
                      Our Location
                    </p>
                    <p className="m-0">
                      Nanak Plaza, Sevoke Road, Siliguri - 734001
                    </p>
                  </div>
                </div>
                <hr className="op1 my-3" style={{ opacity: "0.1" }} />

                <div className="text d-flex flex-column flex-sm-row align-items-start mb-2">
                  <div
                    className="iconm"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "#fff",
                      borderRadius: "3px",
                      textAlign: "center",
                      lineHeight: "44px",
                      fontSize: "26px",
                      marginRight: "15px",
                    }}
                  >
                    <i className="bi bi-phone"></i>
                  </div>
                  <div>
                    <p className="th-color font18 font17-md fw-500 font2 mb-0">
                      Phone
                    </p>
                    <p className="mb-0">
                      <a href="tel:+919144401072" style={{ color: "#333" }}>
                        +91 91444 01072
                      </a>
                    </p>
                  </div>
                </div>
                <hr className="op1 my-3" style={{ opacity: "0.1" }} />

                <div className="text d-flex flex-column flex-sm-row align-items-start mb-2">
                  <div
                    className="iconm"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "#fff",
                      borderRadius: "3px",
                      textAlign: "center",
                      lineHeight: "44px",
                      fontSize: "26px",
                      marginRight: "15px",
                    }}
                  >
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <p className="th-color font18 font17-md fw-500 font2 mb-0">
                      WhatsApp
                    </p>
                    <p className="m-0">
                      <a
                        href="https://api.whatsapp.com/send/?phone=919144401072"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#333" }}
                      >
                        919144401072
                      </a>
                    </p>
                  </div>
                </div>
                <hr className="op1 my-3" style={{ opacity: "0.1" }} />

                <div className="text d-flex flex-column flex-sm-row align-items-start mb-2">
                  <div
                    className="iconm"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "#fff",
                      borderRadius: "3px",
                      textAlign: "center",
                      lineHeight: "44px",
                      fontSize: "26px",
                      marginRight: "15px",
                    }}
                  >
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <p className="th-color font18 font17-md fw-500 font2 mb-0">
                      Email
                    </p>
                    <p className="m-0">
                      <a
                        href="mailto:castorretreat@gmail.com"
                        style={{ color: "#333" }}
                      >
                        castorretreat@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <hr className="op1 my-3" style={{ opacity: "0.1" }} />

                <div className="text d-flex flex-column flex-sm-row align-items-start">
                  <div
                    className="iconm"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "#fff",
                      borderRadius: "3px",
                      textAlign: "center",
                      lineHeight: "44px",
                      fontSize: "26px",
                      marginRight: "15px",
                    }}
                  >
                    <i className="bi bi-share"></i>
                  </div>
                  <div>
                    <p className="th-color font18 font17-md fw-500 font1 mb-2">
                      Follow Us
                    </p>
                    <p className="m-0 soca">
                      <a
                        href="https://www.facebook.com/metaindia"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: "#3b5998",
                          display: "inline-block",
                          margin: "2px 10px 2px 0",
                          color: "white",
                          lineHeight: "36px",
                          fontSize: "15px",
                          width: "36px",
                          height: "36px",
                          borderRadius: "4px",
                          textAlign: "center",
                        }}
                      >
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/metaindia"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: "#e4405f",
                          display: "inline-block",
                          margin: "2px 10px 2px 0",
                          color: "white",
                          lineHeight: "36px",
                          fontSize: "15px",
                          width: "36px",
                          height: "36px",
                          borderRadius: "4px",
                          textAlign: "center",
                        }}
                      >
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: "#000",
                          display: "inline-block",
                          margin: "2px 10px 2px 0",
                          color: "white",
                          lineHeight: "36px",
                          fontSize: "15px",
                          width: "36px",
                          height: "36px",
                          borderRadius: "4px",
                          textAlign: "center",
                        }}
                      >
                        <i className="bi bi-twitter-x"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-5 col-lg-6 col-xl-6 my-3">
              <div className="height100 p-3 p-lg-4 bg-white border1">
                <p className="h3 font1 text-uppercase text-center fadeInUp wow">
                  Send Us A Message
                </p>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-md-6 my-2">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ borderColor: errors.name ? "red" : "" }}
                      />
                      {errors.name && (
                        <small className="text-danger">{errors.name}</small>
                      )}
                    </div>
                    <div className="col-md-6 my-2">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone No."
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength="10"
                        style={{ borderColor: errors.phone ? "red" : "" }}
                      />
                      {errors.phone && (
                        <small className="text-danger">{errors.phone}</small>
                      )}
                    </div>
                    <div className="col-md-6 my-2">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ borderColor: errors.email ? "red" : "" }}
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
                    </div>
                    <div className="col-md-6 my-2">
                      <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="form-control"
                        value={formData.address}
                        onChange={handleChange}
                        style={{ borderColor: errors.address ? "red" : "" }}
                      />
                      {errors.address && (
                        <small className="text-danger">{errors.address}</small>
                      )}
                    </div>
                    <div className="col-md-12 my-2">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        style={{ borderColor: errors.subject ? "red" : "" }}
                      />
                      {errors.subject && (
                        <small className="text-danger">{errors.subject}</small>
                      )}
                    </div>
                    <div className="col-12 my-2">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        className="form-control"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        style={{
                          borderColor: errors.message ? "red" : "",
                          resize: "none",
                        }}
                      />
                      {errors.message && (
                        <small className="text-danger">{errors.message}</small>
                      )}
                    </div>
                    <div className="col-12 my-2">
                      <button
                        type="submit"
                        className="d-block w-100 main-btn main-btn1"
                        disabled={loading}
                        style={{ lineHeight: "34px" }}
                      >
                        {loading ? "Sending..." : "Send Enquiry"}
                      </button>
                    </div>
                    <div className="mt-3 font14">
                      <i className="bi bi-check-square-fill font18 me-1"></i>
                      By submitting this form you agree to Castor Retreat's{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        className="fw-500"
                        style={{ color: "var(--main-color)" }}
                      >
                        privacy policy
                      </a>
                      .
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section
        className="py-4 py-lg-5 prelative"
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="container prelative">
          <div className="text-center mb-3">
            <h3 className="h1 fw-400 text-uppercase fadeInDown wow animated">
              <span>Our Locations</span>
            </h3>
            <img
              src={borderLine}
              alt="Frame"
              className="max fadeInUp wow animated"
              width="150"
            />
          </div>

          <div className="row">
            
            <div className="col-12 col-lg-4 my-3">
              <div className="border1 height100 bg-white p-4">
                <h4
                  className="h4 fw-500"
                  style={{ color: "var(--main-color)" }}
                >
                  Surya Grand By Castor Siliguri
                </h4>
                <p className="font16">Stylish Stays in Vibrant Siliguri</p>
                <hr className="op1 my-3" style={{ opacity: "0.1" }} />
                <p className="fw-500">
                  <i className="bi bi-geo-alt"></i> Nanak Plaza, Sevoke Road,
                  Siliguri 734001
                </p>
                <p className="fw-500">
                  <i className="bi bi-phone"></i> +91 91444 01072
                </p>
                <p className="m-0 fw-500">
                  <i className="bi bi-envelope"></i> sales@hotelsuryagrand.in
                </p>
                <a
                  href="https://maps.app.goo.gl/pRXM8ouQDG69o5zb8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 d-inline-block fw-600"
                >
                  Locate on Map{" "}
                  <i className="bi bi-chevron-double-right ms-3"></i>
                </a>
              </div>
            </div>

            
            <div className="col-12 col-lg-4 my-3">
              <div className="border1 height100 bg-white p-4">
                <h4
                  className="h4 fw-500"
                  style={{ color: "var(--main-color)" }}
                >
                  Surya Eco Retreat By Castor Bagdogra
                </h4>
                <p className="font16">Nature Meets Comfort in Bagdogra</p>
                <hr className="op1 my-3" style={{ opacity: "0.1" }} />
                <p className="fw-500">
                  <i className="bi bi-geo-alt"></i> Near Bagdogra International
                  Airport, Bagdogra 734014
                </p>
                <p className="fw-500">
                  <i className="bi bi-phone"></i> +91 91444 01072
                </p>
                <p className="m-0 fw-500">
                  <i className="bi bi-envelope"></i> castorretreat@gmail.com
                </p>
                <a
                  href="https://maps.app.goo.gl/M4ZPj8MksVYBquem6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 d-inline-block fw-600"
                >
                  Locate on Map{" "}
                  <i className="bi bi-chevron-double-right ms-3"></i>
                </a>
              </div>
            </div>

           
            <div className="col-12 col-lg-4 my-3">
              <div className="border1 height100 bg-white p-4">
                <h4
                  className="h4 fw-500"
                  style={{ color: "var(--main-color)" }}
                >
                  Surya Dzongkar Residency By Castor Gangtok
                </h4>
                <p className="font16">
                  Hillside Comfort in the Heart of Gangtok
                </p>
                <hr className="op1 my-3" style={{ opacity: "0.1" }} />
                <p className="fw-500">
                  <i className="bi bi-geo-alt"></i> MG Marg, Gangtok, Sikkim
                  737101
                </p>
                <p className="fw-500">
                  <i className="bi bi-phone"></i> +91 91444 01072
                </p>
                <p className="m-0 fw-500">
                  <i className="bi bi-envelope"></i> castorretreat@gmail.com
                </p>
                <a
                  href="https://maps.app.goo.gl/PfiAqiG9o3BnYA4b6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 d-inline-block fw-600"
                >
                  Locate on Map{" "}
                  <i className="bi bi-chevron-double-right ms-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-2 bready">
        <div className="container">
          <ol className="font14 breadcrumb justify-content-center dark mb-0 text-uppercase">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="/contact">Contact</a>
            </li>
          </ol>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
