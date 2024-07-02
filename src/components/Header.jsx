import React, { useEffect } from "react";
import jobSeekerImg from "../assests/jobSeekerImg.svg";
import companiesImg from "../assests/companiesImg.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate("");
  const handleGetInTouch = () => {
    const getInTouchSection = document.getElementById("our__services");
    if (getInTouchSection) {
      const topOffset = getInTouchSection.offsetTop - 90;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };
  const handleGetInTouchTwo = () => {
    navigate("/startappling");
    // const getInTouchSection = document.getElementById("industries");
    // if (getInTouchSection) {
    //   const topOffset = getInTouchSection.offsetTop + 850;
    //   window.scrollTo({
    //     top: topOffset,
    //     behavior: "smooth",
    //   });
    // }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 500,
    });
  }, []);
  return (
    <div className="headerMain" id="home">
      <div className="headerMainContainer1">
        <div className="headerMainContainer1Inner">
          <div data-aos="fade-up" className="headerMainChild1">
            <div className="jobSeekerImg">
              {/* <img src={jobSeekerImg} alt="" /> */}
              <p className="bg-zinc-900 w-24  lg:w-36 text-center content-center -rotate-[22deg] h-10 text-white text-sm lg:text-base">
                Job seeker
              </p>
            </div>

            <h1 className="headerMainChild1Head ">
              We help candidates find their perfect job
            </h1>
            <p className="headerMainChild1Para">
              Concise talent management solutions that matches with a particular
              industry, geography, or business requirement.
            </p>

            <button
              onClick={handleGetInTouchTwo}
              className="headerMainChild1Button"
            >
              Start Applying
            </button>
          </div>
        </div>
      </div>
      <div className="headerMainContainer2">
        <div data-aos="fade-up" className="headerMainChild2">
          <div className="companiesImg">
            {/* <img src={companiesImg} alt="" /> */}
            <p className="bg-yellow-300 w-24  lg:w-36 text-center content-center rotate-[23deg] h-10 text-white text-sm lg:text-base">
              Companies
            </p>
          </div>
          <h1 className="headerMainChild2Head ">
            We provide staffing Solution to our clients
          </h1>

          <p className="headerMainChild2Para">
            {" "}
            Concise talent management solutions that matches with a particular
            industry, geography, or business requirement.
          </p>

          <button onClick={handleGetInTouch} className="headerMainChild2Button">
            View services
          </button>
        </div>
      </div>
    </div>
  );
}
