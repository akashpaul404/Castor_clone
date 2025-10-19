import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import logoWhite from "../assets/logo-white.png";
import borderLine from "../assets/border.svg";

function Booking() {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    checkin: null,
    checkout: null,
    hotelname: "",
    roomtype: "",
    rooms: "",
    adult: "",
    child: "",
    message: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    captcha: "",
  });


  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [captchaCode, setCaptchaCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  
  useEffect(() => {
    generateCaptcha();
    fetchHotels();
  }, []);

  const generateCaptcha = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setCaptchaCode(code);
  };

  const fetchHotels = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/hotels");
      setHotels(response.data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };


  const handleHotelChange = (e) => {
    const selectedHotel = e.target.value;
    setFormData({ ...formData, hotelname: selectedHotel, roomtype: "" });

    const hotel = hotels.find((h) => h.name === selectedHotel);
    if (hotel && hotel.rooms) {
      setRooms(hotel.rooms);
    } else {
      setRooms([]);
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };


  const handleDateChange = (name, date) => {
    setFormData({ ...formData, [name]: date });
    setErrors({ ...errors, [name]: "" });
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.checkin) newErrors.checkin = "Check-in date is required";
    if (!formData.checkout) newErrors.checkout = "Check-out date is required";
    if (!formData.hotelname) newErrors.hotelname = "Please select a hotel";
    if (!formData.roomtype) newErrors.roomtype = "Please select a room";
    if (!formData.rooms) newErrors.rooms = "Please select number of rooms";
    if (!formData.adult) newErrors.adult = "Please select number of adults";
    if (!formData.child) newErrors.child = "Please select number of children";
    if (!formData.name) newErrors.name = "Full name is required";

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.address) newErrors.address = "Address is required";

    if (!formData.captcha) {
      newErrors.captcha = "Please enter captcha";
    } else if (formData.captcha !== captchaCode) {
      newErrors.captcha = "Captcha is incorrect";
    }

    if (formData.checkin && formData.checkout) {
      if (formData.checkout <= formData.checkin) {
        newErrors.checkout = "Check-out must be after check-in";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const bookingData = {
        ...formData,
        checkin: formData.checkin.toISOString().split("T")[0],
        checkout: formData.checkout.toISOString().split("T")[0],
        rooms: parseInt(formData.rooms),
        adult: parseInt(formData.adult),
        child: parseInt(formData.child),
        submittedAt: new Date().toISOString(),
      };

      await axios.post(
        "http://localhost:8080/api/booking-inquiry",
        bookingData
      );
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section
        className="py-4 py-lg-5 obg"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1920x800/f5f5f5/cccccc?text=Background')",
        }}
      >
        <div className="container py-3 py-lg-4">
          <div className="text-center mb-3">
            <h3 className="h1 fw-400 text-uppercase">
              <span>Reservation Enquiry</span>
            </h3>
            <img src={borderLine} alt="Frame" className="max" width="150" />
            <p className="mb-4 mt-3 text-center col-12 col-lg-8 m-auto font18 fw-400">
              Planning your stay with us is just a step away. Fill out the form
              below to book or enquire about room availability, events, or
              special requests across our properties.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="booking-wrapper2">
            <div className="row gx-3">
              {/* Booking Details */}
              <div className="col-12 col-lg-6 my-3">
                <div className="p-3 p-lg-4 p-xl-5 bb5 shadow1 height100 bg-white prelative">
                  <div className="font2 mb-3 h5 text-uppercase color2">
                    Booking Detail
                  </div>

                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group prelative">
                        <label className="fw-500">Check-in</label>
                        <DatePicker
                          selected={formData.checkin}
                          onChange={(date) => handleDateChange("checkin", date)}
                          minDate={new Date()}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Check-in"
                          className="form-control"
                        />
                        {errors.checkin && (
                          <small className="text-danger">
                            {errors.checkin}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group prelative">
                        <label className="fw-500">Check-out</label>
                        <DatePicker
                          selected={formData.checkout}
                          onChange={(date) =>
                            handleDateChange("checkout", date)
                          }
                          minDate={formData.checkin || new Date()}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Check-out"
                          className="form-control"
                        />
                        {errors.checkout && (
                          <small className="text-danger">
                            {errors.checkout}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group prelative">
                        <label className="fw-500">Select Hotel</label>
                        <select
                          className="form-control"
                          name="hotelname"
                          value={formData.hotelname}
                          onChange={handleHotelChange}
                        >
                          <option value="">Select A Hotel</option>
                          {hotels.map((hotel, index) => (
                            <option key={index} value={hotel.name}>
                              {hotel.name}
                            </option>
                          ))}
                        </select>
                        {errors.hotelname && (
                          <small className="text-danger">
                            {errors.hotelname}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group prelative">
                        <label className="fw-500">Select A Room</label>
                        <select
                          className="form-control"
                          name="roomtype"
                          value={formData.roomtype}
                          onChange={handleChange}
                          disabled={!formData.hotelname}
                        >
                          <option value="">Select A Room</option>
                          {rooms.map((room, index) => (
                            <option key={index} value={room.name}>
                              {room.name}
                            </option>
                          ))}
                        </select>
                        {errors.roomtype && (
                          <small className="text-danger">
                            {errors.roomtype}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="form-group prelative">
                        <label className="fw-500">Rooms</label>
                        <select
                          className="form-control"
                          name="rooms"
                          value={formData.rooms}
                          onChange={handleChange}
                        >
                          <option value="">Room</option>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        {errors.rooms && (
                          <small className="text-danger">{errors.rooms}</small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="form-group prelative">
                        <label className="fw-500">
                          Adult <small>(+12 yrs)</small>
                        </label>
                        <select
                          className="form-control"
                          name="adult"
                          value={formData.adult}
                          onChange={handleChange}
                        >
                          <option value="">Adult</option>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        {errors.adult && (
                          <small className="text-danger">{errors.adult}</small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="form-group prelative">
                        <label className="fw-500">
                          Child <small>(+2 yrs)</small>
                        </label>
                        <select
                          className="form-control"
                          name="child"
                          value={formData.child}
                          onChange={handleChange}
                        >
                          <option value="">Child</option>
                          {[0, 1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        {errors.child && (
                          <small className="text-danger">{errors.child}</small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group prelative">
                        <label className="fw-500">Message / Requirements</label>
                        <textarea
                          className="form-control"
                          name="message"
                          rows="2"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="col-12 col-lg-6 my-3">
                <div className="p-3 p-lg-4 p-xl-5 bb5 shadow1 height100 bg-white prelative">
                  <div className="font2 mb-3 h5 text-uppercase color2">
                    Personal Detail
                  </div>

                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group prelative">
                        <label className="fw-500">Full Name</label>
                        <input
                          className="form-control"
                          name="name"
                          type="text"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <small className="text-danger">{errors.name}</small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group prelative">
                        <label className="fw-500">Phone No</label>
                        <input
                          className="form-control"
                          name="phone"
                          type="tel"
                          maxLength="10"
                          placeholder="Phone No"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && (
                          <small className="text-danger">{errors.phone}</small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group prelative">
                        <label className="fw-500">Email ID</label>
                        <input
                          className="form-control"
                          name="email"
                          type="text"
                          placeholder="Email ID"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <small className="text-danger">{errors.email}</small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group prelative">
                        <label className="fw-500">Address</label>
                        <input
                          className="form-control"
                          name="address"
                          type="text"
                          placeholder="Address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                        {errors.address && (
                          <small className="text-danger">
                            {errors.address}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group prelative">
                        <label className="fw-500">Enter Captcha</label>
                        <div className="d-flex align-items-center mb-2">
                          <div
                            className="bg-light border p-2 me-2"
                            style={{
                              letterSpacing: "5px",
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          >
                            {captchaCode}
                          </div>
                          <button
                            type="button"
                            onClick={generateCaptcha}
                            className="btn btn-sm btn-secondary"
                          >
                            <i className="bi bi-arrow-clockwise"></i>
                          </button>
                        </div>
                        <input
                          className="form-control"
                          name="captcha"
                          type="text"
                          placeholder="Enter Captcha"
                          value={formData.captcha}
                          onChange={handleChange}
                        />
                        {errors.captcha && (
                          <small className="text-danger">
                            {errors.captcha}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-3 mt-lg-0">
                      <div
                        className="form-group prelative"
                        style={{ marginTop: "32px" }}
                      >
                        <button
                          type="submit"
                          className="main-btn main-btn1 rounded-1 lh-34 full"
                          disabled={loading}
                        >
                          {loading ? "Submitting..." : "Send Enquiry"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 mt-lg-4 mt-xl-5 font14">
                    <i className="bi bi-check-square font18 me-1 prelative top2"></i>
                    By submitting this form you agree to Castor Retreat's
                    privacy policy.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      
      <section className="py-2 bready">
        <div className="container">
          <ol className="font14 breadcrumb justify-content-center dark mb-0 text-uppercase">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Booking</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Booking;
