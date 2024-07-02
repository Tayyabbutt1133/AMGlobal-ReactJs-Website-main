import React, { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaCertificate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
function Card() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);
  const navigate = useNavigate("");
  return (
    <div data-aos="flip-down"
    // style={{
    //   background:
    //     "linear-gradient(180deg, rgba(213, 187, 84, 0.10) 0%, rgba(23, 23, 23, 0.00) 100%)",
    // }}  
    className="Card border border-[#EDD569]">
      <div className="CardHeading">Job Name Display Here</div>
      <div className="CardSection">
        <div className="CardDetail">
          <p style={{ display: "flex", justifyContent: "center" }}>
            <FaCertificate className="CardIcons" /> MBO / HBO
          </p>
          <p style={{ display: "flex", justifyContent: "center" }}>
            <FaMapMarkerAlt className="CardIcons" /> Location
          </p>
          <p style={{ display: "flex", justifyContent: "center" }}>
            <HiCurrencyDollar className="CardIcons" /> 4356.76
          </p>
        </div>
        <div className="ButtonGroup">
          <button className="CardButton_1">More Info</button>
          <button
            className="CardButton_2"
            onClick={() => {
              navigate("/apply-directly");
            }}
          >
            Apply Directly
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
