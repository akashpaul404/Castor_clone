import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HotelDetail from "./components/HotelDetail";
import Restaurants from "./components/Restaurants";
import Meetings from "./components/Meetings";
import Offers from "./components/Offers";
import Explore from "./components/Explore";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Career from "./components/Career";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import "./App.css";
import { WOW } from "wowjs";
import Booking from "./components/Booking";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels/:slug" element={<HotelDetail />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/dining" element={<Restaurants />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/explore/:city" element={<Explore />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/career" element={<Career />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
