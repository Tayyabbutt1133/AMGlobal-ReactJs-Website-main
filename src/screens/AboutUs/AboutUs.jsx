import React from "react";
import { FaLinkedin } from "react-icons/fa";
import about_pattern from "../../assests/about_pattern.svg";
import our_vision from "../../assests/our_vision.svg";
import strategies from "../../assests/strategies_bg.svg";
import startegy_picture from "../../assests/strategy_picture.svg";
import our_mission from "../../assests/our_mission.svg";
import our_value from "../../assests/our_value.svg";
import horizontal_line from "../../assests/Horizontal-Line.svg";
import person1 from "../../assests/person1.svg";
import person2 from "../../assests/person2.svg";
import person3 from "../../assests/person3.svg";
import person4 from "../../assests/person4.svg";
import poster_1 from "../../assests/meet_poster_1.svg";
import poster_2 from "../../assests/meet_poster_2.svg";
import testimonial from "../../assests/testimonial.svg";
import testimonial_star from "../../assests/testimonial_stars.svg";
import avatar1 from "../../assests/testimonial_Avatar_1.svg";
import avatar2 from "../../assests/testimonial_Avatar_2.png";
import Footer from "../../components/Footer";
import AboutUsNavbar from "../../components/AboutUsNavbar";

function AboutUs() {
  return (
    <div className="w-full h-screen">
      <AboutUsNavbar blackColor={true} activeAboutUs={true} />
      <div
        className=" h-1/2 w-full"
        style={{
          background: "linear-gradient(180deg, #28261E 0%, #96792A 100%)",
        }}
      >
        <div
          className=" h-full w-full"
          style={{
            backgroundImage: `url(${about_pattern})`,
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-4xl text-white font-semibold">About Us</h1>
          </div>
        </div>
      </div>
      <div className="bg-[#1E1E1E] h-auto">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url(${our_vision})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundPositionY: "10px",
          }}
        >
          <div className="w-full py-10 px-10 md:px-20 lg:px-40">
            <div className="flex flex-col md:flex-row md:justify-between items-center justify-center mt-16">
              <div className="text-2xl md:text-4xl text-white font-semibold">
                Our Vision
              </div>
              <div className="w-full md:w-2/5 text-[10px] text-center pt-5 md:pt-0 md:text-justify text-[#B6B6B6]">
                To revolutionize human resources by delivering innovative,
                efficient, and personalized HR solutions that empower businesses
                to thrive, foster inclusive and dynamic workplaces, and enable
                employees to reach their full potential.
              </div>
            </div>

            <div className="grid grid-cols-12 gap-3 mt-14">
              <div
                className="group col-span-12 md:col-span-4 border border-[#EDD569] p-5 md:p-5 lg:p-10
                bg-custom-gradient-black hover:bg-custom-gradient-yellow"
              >
                <h1 className="text-lg text-start text-white text-semibold">
                  Innovation in HR Solutions
                </h1>
                <p className="text-xs text-start mt-3 group-hover:text-white text-[#B6B6B6]">
                  Embrace cutting-edge technology and best practices to
                  streamline HR processes. Develop and integrate AI and machine
                  learning tools to enhance recruitment, performance management,
                  and employee engagement.
                </p>
              </div>
              <div className="group col-span-12 md:col-span-4 border border-[#EDD569] p-5 md:p-5 lg:p-10 bg-custom-gradient-black hover:bg-custom-gradient-yellow">
                <h1 className="text-lg text-start text-white text-semibold">
                  Innovation in HR Solutions
                </h1>
                <p className="text-xs text-start mt-3 group-hover:text-white text-[#B6B6B6]">
                  Embrace cutting-edge technology and best practices to
                  streamline HR processes. Develop and integrate AI and machine
                  learning tools to enhance recruitment, performance management,
                  and employee engagement.
                </p>
              </div>
              <div className="group col-span-12 md:col-span-4 border border-[#EDD569] p-5 md:p-5 lg:p-10 bg-custom-gradient-black hover:bg-custom-gradient-yellow">
                <h1 className="text-lg text-start text-white text-semibold">
                  Innovation in HR Solutions
                </h1>
                <p className="text-xs text-start mt-3 group-hover:text-white text-[#B6B6B6]">
                  Embrace cutting-edge technology and best practices to
                  streamline HR processes. Develop and integrate AI and machine
                  learning tools to enhance recruitment, performance management,
                  and employee engagement.
                </p>
              </div>
              <div className="group col-span-12 bg-custom-gradient-black hover:bg-custom-gradient-yellow md:col-span-6 border border-[#EDD569] p-5 md:p-5 lg:p-10">
                <h1 className="text-lg text-start text-white text-semibold">
                  Innovation in HR Solutions
                </h1>
                <p className="text-xs text-start mt-3 group-hover:text-white text-white">
                  Embrace cutting-edge technology and best practices to
                  streamline HR processes. Develop and integrate AI and machine
                  learning tools to enhance recruitment, performance management,
                  and employee engagement.
                </p>
              </div>
              <div
                className="group col-span-12 md:col-span-6 border border-[#EDD569] p-5 md:p-5 lg:p-10
                bg-custom-gradient-black hover:bg-custom-gradient-yellow"
              >
                <h1 className="text-lg text-start text-white text-semibold">
                  Innovation in HR Solutions
                </h1>
                <p className="text-xs text-start mt-3 group-hover:text-white text-[#B6B6B6]">
                  Embrace cutting-edge technology and best practices to
                  streamline HR processes. Develop and integrate AI and machine
                  learning tools to enhance recruitment, performance management,
                  and employee engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#212121] h-auto">
        <div
          style={{
            backgroundImage: `url(${strategies})`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-2xl md:text-4xl font-semibold text-white pt-20">
            Strategic Objectives
          </h1>

          <div className="w-full flex gap-10">
            <div className="md:w-3/5 grid grid-cols-12 gap-3 p-10 md:p-0 md:pl-20 lg:pl-40  pt-20 md:pt-20 mb-20">
              <div
                style={{
                  borderImage:
                    "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
                }}
                className="col-span-12 md:col-span-6 border p-5 bg-[#171717] hover:bg-custom-gradient-yellow"
              >
                <h1 className="text-white font-bold text-base text-start pb-3 xxl:text-2xl">
                  Technology Integration
                </h1>
                <p className="text-white text-xs text-start xxl:text-xl">
                  Invest in state-of-the-art HR software and platforms. Provide
                  seamless integration with clients’ existing systems for a
                  unified experience.
                </p>
              </div>
              <div
                style={{
                  borderImage:
                    "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
                }}
                className="col-span-12 md:col-span-6 border p-5 bg-[#171717] hover:bg-custom-gradient-yellow"
              >
                <h1 className="text-white font-bold text-base text-start pb-3 xxl:text-2xl">
                  Client-Centric Approach
                </h1>
                <p className="text-white text-xs text-start xxl:text-xl">
                  Develop strong relationships with clients to understand their
                  needs and challenges. Offer customizable service packages and
                  flexible pricing models.
                </p>
              </div>
              <div
                style={{
                  borderImage:
                    "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
                }}
                className="col-span-12 md:col-span-6 border p-5 bg-[#171717] hover:bg-custom-gradient-yellow"
              >
                <h1 className="text-white font-bold text-base text-start pb-3 xxl:text-2xl">
                  Talent Acquisition and Management
                </h1>
                <p className="text-white text-xs text-start xxl:text-xl">
                  Use data-driven recruitment strategies to attract top talent.
                  Implement effective onboarding and training programs to ensure
                  employee success from day one.
                </p>
              </div>
              <div
                style={{
                  borderImage:
                    "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
                }}
                className="col-span-12 md:col-span-6 border p-5 bg-[#171717] hover:bg-custom-gradient-yellow"
              >
                <h1 className="text-white font-bold text-base text-start pb-3  xxl:text-2xl">
                  Compliance and Risk Management
                </h1>
                <p className="text-white text-xs text-start xxl:text-xl">
                  Stay updated with the latest labor laws and regulations to
                  ensure compliance. Provide expert guidance on risk management
                  and HR-related legal issues.
                </p>
              </div>
              <div className="hidden md:block md:col-span-3"></div>
              <div
                style={{
                  borderImage:
                    "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
                }}
                className="col-span-12 md:col-span-6 border p-5 bg-[#171717] hover:bg-custom-gradient-yellow"
              >
                <h1 className="text-white font-bold text-base text-start pb-3 xxl:text-2xl">
                  Continuous Improvement
                </h1>
                <p className="text-white text-xs text-start xxl:text-xl">
                  Regularly gather feedback from clients and employees to
                  improve services. Conduct market research to stay ahead of
                  industry trends and innovations.
                </p>
              </div>
              <div className="md:col-span-3"></div>
            </div>
            <div className="hidden md:block w-2/5">
              <div className="h-full relative -bottom-24">
                <img src={startegy_picture} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1E1E1E] w-full ">
        <div
          style={{
            background: `url(${our_mission})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-[500px] md:h-[900px] bg-center"
        >
          <div className="text-2xl md:text-4xl font-semibold text-white pt-20 md:pt-40">
            Our Mission
          </div>
          <div className="text-[9px] md:text-xs md:w-1/2 px-10 md:px-0 m-auto pt-5 md:pt-10 text-[#D9D9D9]">
            Our mission is to deliver comprehensive, efficient, and tailored HR
            solutions that enhance organizational performance, foster a culture
            of inclusion and excellence, and empower employees to achieve their
            full potential. We are committed to partnering with businesses to
            navigate HR complexities, ensuring compliance, and driving strategic
            growth through innovative and responsive HR services.
          </div>
        </div>
      </div>
      <div className="bg-[#1E1E1E]">
        <div className="text-center w-full py-10 md:py-0 md:pt-20">
          <h1 className="flex justify-center text-2xl md:text-4xl font-semibold text-white">
            Our <p className="bg-[#EDD569]">Core values</p>
          </h1>
        </div>
        <div className="w-full h-2/5 grid grid-cols-10 gap-3 px-10 md:px-10 lg:px-20 md:pt-10 relative md:-bottom-20">
          <div
            style={{
              borderImage:
                "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
            }}
            className="col-span-10 sm:col-span-5 md:col-span-2 border p-5 bg-[#171717] hover:bg-custom-gradient-yellow"
          >
            <h1 className="text-white font-bold text-sm md:text-base text-center pb-3">
              Technology Integration
            </h1>
            <p className="text-white text-[10px] md:text-[10px] lg:text-xs text-center">
              Invest in state-of-the-art HR software and platforms. Provide
              seamless integration with clients’ existing systems for a unified
              experience.
            </p>
          </div>
          <div
            style={{
              borderImage:
                "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
            }}
            className="col-span-10 sm:col-span-5 md:col-span-2 border p-5 bg-[#171717] hover:bg-custom-gradient-yellow"
          >
            <h1 className="text-white font-bold text-sm md:text-base text-center pb-3">
              Technology Integration
            </h1>
            <p className="text-white text-[10px] md:text-[10px] lg:text-xs text-center">
              Invest in state-of-the-art HR software and platforms. Provide
              seamless integration with clients’ existing systems for a unified
              experience.
            </p>
          </div>
          <div
            style={{
              borderImage:
                "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
            }}
            className="col-span-10 sm:col-span-5 md:col-span-2 border p-5 bg-[#171717] hover:bg-custom-gradient-yellow"
          >
            <h1 className="text-white font-bold text-sm md:text-base text-center pb-3">
              Technology Integration
            </h1>
            <p className="text-white text-[10px] md:text-[10px] lg:text-xs text-center">
              Invest in state-of-the-art HR software and platforms. Provide
              seamless integration with clients’ existing systems for a unified
              experience.
            </p>
          </div>
          <div
            style={{
              borderImage:
                "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
            }}
            className="col-span-10 sm:col-span-5 md:col-span-2 border p-5 bg-[#171717] hover:bg-custom-gradient-yellow"
          >
            <h1 className="text-white font-bold text-sm md:text-base text-center pb-3">
              Technology Integration
            </h1>
            <p className="text-white text-[10px] md:text-[10px] lg:text-xs text-center">
              Invest in state-of-the-art HR software and platforms. Provide
              seamless integration with clients’ existing systems for a unified
              experience.
            </p>
          </div>
          <div className="col-span-2 block md:hidden"></div>
          <div
            style={{
              borderImage:
                "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
            }}
            className="col-span-10 sm:col-span-6 md:col-span-2 border p-5 bg-[#171717] hover:bg-custom-gradient-yellow"
          >
            <h1 className="text-white font-bold text-sm md:text-base text-center pb-3">
              Technology Integration
            </h1>
            <p className="text-white text-[10px] md:text-[10px] lg:text-xs text-center">
              Invest in state-of-the-art HR software and platforms. Provide
              seamless integration with clients’ existing systems for a unified
              experience.
            </p>
          </div>
          <div className="col-span-2 block md:hidden"></div>
        </div>
        <div className="w-full hidden md:block">
          <img src={our_value} alt="" />
        </div>
      </div>

      <div className="bg-[#1E1E1E] w-full m">
        <div className="text-xl md:text-4xl font-semibold text-white py-10 md:py-20 text-center ">
          Meet Our Team
        </div>
        <div
          style={{
            background: `url(${horizontal_line})`,
            backgroundRepeat: "no-repeat",
          }}
          className="h-full w-full mb-14"
        >
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 px-5 md:px-20">
            <div className="flex flex-col items-center text-start">
              <div className="flex flex-col items-start">
                <div className="w-24 sm:w-40">
                  <img src={person1} alt="" className="w-full h-auto" />
                </div>
                <div className="text-white text-[13px] md:text-base font-semibold pt-3">
                  Hendrik Kolvenbach
                </div>
                <p className="text-[#D1D5DB] text-[10px] md:text-xs">
                  CEO & Co-Founder
                </p>
                <FaLinkedin className="text-white" />
              </div>
            </div>
            <div className="flex flex-col items-center text-start">
              <div className="flex flex-col items-start">
                <div className="w-24 sm:w-40">
                  <img src={person2} alt="" className="w-full h-auto" />
                </div>
                <div className="text-white text-[13px] md:text-base font-semibold pt-3">
                  Hendrik Kolvenbach
                </div>
                <p className="text-[#D1D5DB] text-[10px] md:text-xs">
                  CEO & Co-Founder
                </p>
                <FaLinkedin className="text-white" />
              </div>
            </div>
            <div className="flex flex-col items-center text-start">
              <div className="flex flex-col items-start">
                <div className="w-24 sm:w-40">
                  <img src={person3} alt="" className="w-full h-auto" />
                </div>
                <div className="text-white text-[13px] md:text-base font-semibold pt-3">
                  Hendrik Kolvenbach
                </div>
                <p className="text-[#D1D5DB] text-[10px] md:text-xs">
                  CEO & Co-Founder
                </p>
                <FaLinkedin className="text-white" />
              </div>
            </div>
            <div className="flex flex-col items-center text-start">
              <div className="flex flex-col items-start">
                <div className="w-24 sm:w-40">
                  <img src={person4} alt="" className="w-full h-auto" />
                </div>
                <div className="text-white text-[13px] md:text-base font-semibold pt-3">
                  Hendrik Kolvenbach
                </div>
                <p className="text-[#D1D5DB] text-[10px] md:text-xs">
                  CEO & Co-Founder
                </p>
                <FaLinkedin className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t border-[#EDD569] w-[81%] m-auto" />
        <div className="w-full  flex-col md:flex-row flex justify-center pb-5 md:pb-0 px-10 md:px-20">
          <div className="md:w-1/2 pt-5 md:p-10">
            <img src={poster_1} alt="" />
          </div>
          <div className="md:w-1/2 pt-5 md:p-10">
            <img src={poster_2} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-[#212121] w-full h-auto">
        <div
          className="bg-cover bg-center h-full w-full"
          style={{
            backgroundImage: `url(${testimonial})`,
          }}
        >
          <div className="px-5 md:px-20 lg:px-28 pt-16 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-start">
                <div className="text-[#D5BB54] text-[15px] md:text-xl">
                  TESTIMONIALS
                </div>
                <div className="text-[20px] md:text-4xl font-semiobold text-white">
                  What our clients say about us...
                </div>
              </div>
              <div>
                <button className="px-3 md:px-5 py-1 text-[10px] md:text-base text-white bg-[#D5BB54]">
                  Contact us
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row py-10 gap-10">
              <div className="md:w-1/2 bg-[#171717] hover:bg-custom-gradient-yellow py-5 px-10 rounded-l-xl border-l-2 border-[#D5BB54]">
                <div className="w-40 py-5">
                  <img src={testimonial_star} alt="" />
                </div>
                <div className="text-white text-[9px] md:text-[10px] text-start pb-5">
                  Estamos en el mejor momento para aprovechar la caída de las
                  agencias tradicionales. Me siento agradecida con FLYWAY TODAY
                  porque, como agente independiente, he logrado ganar dinero y
                  tener control de mi tiempo. ¡Mi mejor decisión hasta hoy!
                </div>
                <div className="flex gap-2 md:gap-5 items-center">
                  <div className="w-16">
                    <img src={avatar1} alt="" />
                  </div>
                  <div className="text-white text-start">
                    <h1 className="text-xs md:text-base">Saul Ramirez</h1>
                    <p className="text-[10px]">New York</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-[#171717] hover:bg-custom-gradient-yellow py-5 px-10 rounded-l-xl border-l-2 border-[#D5BB54]">
                <div className="w-40 py-5">
                  <img src={testimonial_star} alt="" />
                </div>
                <div className="text-white text-[9px] md:text-[10px] text-start pb-5">
                  Estamos en el mejor momento para aprovechar la caída de las
                  agencias tradicionales. Me siento agradecida con FLYWAY TODAY
                  porque, como agente independiente, he logrado ganar dinero y
                  tener control de mi tiempo. ¡Mi mejor decisión hasta hoy!
                </div>
                <div className="flex gap-2 md:gap-5 items-center">
                  <div className="w-16">
                    <img src={avatar2} alt="" />
                  </div>
                  <div className="text-white text-start">
                    <h1 className="text-xs md:text-base">Saul Ramirez</h1>
                    <p className="text-[10px]">New York</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
