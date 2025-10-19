import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/succ.png"

function ThankYou() {
return (
<div className="py-5 height100v d-flex align-items-center justify-content-center obg">
    <div className="container text-center">
        <img src={icon} alt="Success Icon" className="max mb-3"
            width="100" height="100" />
        <h1 className="h1 fw-500 text-uppercase color2">Thank You</h1>
        <p className="font17">
            We've received your enquiry and we will get back to you soon.
        </p>
        <Link to="/" className="mt-3 main-btn main-btn1">
        Go to Homepage
        </Link>
    </div>
</div>
);
}

export default ThankYou;