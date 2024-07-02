import React, { useEffect, useState } from "react";
import NavbarNext from "../../components/NavbarNext";
import applyHeaderBg from "../../assests/applyDirectlyHeaderImg.png";
import { FaLocationDot } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { FaPlus } from "react-icons/fa";
import AboutUsNavbar from "../../components/AboutUsNavbar";
import applyProfile from "../../assests/applyDirectlyProfileImg.png";
import applyDirectlyBgImg from "../../assests/applyDirectlyBgImg.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Card from "../../components/card/Card";
import Footer from "../../components/Footer";
import developer from "../../assests/Developer.jpg";
import worker from "../../assests/Worker.jpg";
import sale from "../../assests/sales.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ApplyDirectly() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);

  const [fileAddress, setFileAddress] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileAddress(file.name);
    }
  };
  return (
    <div className="bg-[#212121] text-white">
      {/* <NavbarNext /> */}
      <AboutUsNavbar blackColor={true} />

      <div
        style={{ background: `url(${applyHeaderBg})` }}
        className="w-full h-[500px]  bg-cover bg-center"
      >
        <div className="w-full h-full  bg-black bg-opacity-70">
          <div className=" md:w-[90%] lg:w-4/5 px-5 md:px-0 md:ml-auto md:mr-auto flex flex-col md:flex-row md:justify-between md:items-center pt-28">
            <div className="md:w-2/5">
              <h1 className="text-xl md:text-4xl font-semibold text-white text-start leading-snug">
                Junior System Engineer
              </h1>
              <div className="flex justify-start items-center text-[10px] md:text-base gap-5 my-2 md:my-5">
                <div className="cursor-pointer flex justify-center items-center gap-2  bg-[#B8A147] px-2 md:px-5 pt-3 pb-3 text-white rounded-lg md:text-[10px] lg:text-base">
                  {" "}
                  {/* <SlBadge fill="#171717" /> */}
                  <svg
                    id="Group_976"
                    data-name="Group 976"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.978"
                    height="22.708"
                    viewBox="0 0 16.978 22.708"
                  >
                    <path
                      id="Path_1187"
                      data-name="Path 1187"
                      d="M841.492,50.845a6.426,6.426,0,0,0-.032,3.028,1.8,1.8,0,0,1-.628,1.625,2.928,2.928,0,0,0-.915,1.6,1.922,1.922,0,0,1-1.5,1.547,3.537,3.537,0,0,0-1.56.869,1.689,1.689,0,0,1-2.032.311,2.3,2.3,0,0,0-2.179,0,1.684,1.684,0,0,1-2.087-.365,2.7,2.7,0,0,0-1.352-.754,2.144,2.144,0,0,1-1.726-1.822,2.044,2.044,0,0,0-.678-1.207,2.342,2.342,0,0,1-.72-2.5,3.619,3.619,0,0,0,0-1.708,2.141,2.141,0,0,1,.673-2.348,2.744,2.744,0,0,0,.8-1.5,2.01,2.01,0,0,1,1.563-1.582,2.865,2.865,0,0,0,1.639-.984,1.7,1.7,0,0,1,1.857-.545,3.684,3.684,0,0,0,2.229,0,1.744,1.744,0,0,1,1.916.59,2.6,2.6,0,0,0,1.5.911,2.069,2.069,0,0,1,1.667,1.674,3.015,3.015,0,0,0,.939,1.6A1.774,1.774,0,0,1,841.492,50.845ZM837.85,52.27a4.242,4.242,0,0,0-4.075-4.279,4.4,4.4,0,0,0-4.2,4.2,4.275,4.275,0,0,0,4.117,4.249A4.062,4.062,0,0,0,837.85,52.27Z"
                      transform="translate(-825.251 -44.427)"
                      fill="#171717"
                    ></path>
                    <path
                      id="Path_1188"
                      data-name="Path 1188"
                      d="M878.469,141.933a3.43,3.43,0,0,0,3.784-.73,6.448,6.448,0,0,1,1.928-.82c.275-.1.341.184.417.366.577,1.4,1.16,2.8,1.711,4.217.269.689-.141,1.183-.888,1.129-.026,0-.051-.013-.077-.017a3.046,3.046,0,0,0-3.232,1.14c-.843,1.087-1.292.933-1.817-.367-.578-1.431-1.17-2.856-1.753-4.284A.694.694,0,0,1,878.469,141.933Z"
                      transform="translate(-869.414 -125.232)"
                      fill="#171717"
                    ></path>
                    <path
                      id="Path_1189"
                      data-name="Path 1189"
                      d="M829.427,142.244c-.663,1.617-1.243,3.036-1.826,4.454a12.139,12.139,0,0,1-.5,1.151.623.623,0,0,1-1.088.2,2.478,2.478,0,0,1-.5-.5c-.738-1.186-1.855-1.272-3.079-1.126-1.008.12-1.353-.367-.966-1.305.519-1.257,1.053-2.509,1.536-3.779.2-.513.346-.675.944-.427a11.149,11.149,0,0,1,2.33,1.235A3.187,3.187,0,0,0,829.427,142.244Z"
                      transform="translate(-821.317 -125.599)"
                      fill="#171717"
                    ></path>
                  </svg>
                  MBO/ HBO
                </div>
                <div className="cursor-pointer flex justify-center items-center gap-2  bg-[#B8A147] pl-5 pr-5 pt-3 pb-3 text-white rounded-lg md:text-[10px] lg:text-base">
                  <svg
                    id="pin"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.869"
                    height="23.078"
                    viewBox="0 0 15.869 23.078"
                  >
                    <path
                      id="Path_1190"
                      data-name="Path 1190"
                      d="M94.734,3.951A7.831,7.831,0,0,0,88.08,0c-.118,0-.237,0-.355,0a7.832,7.832,0,0,0-6.655,3.95,8.034,8.034,0,0,0-.1,7.938l5.723,10.475.008.014a1.391,1.391,0,0,0,2.413,0l.008-.014L94.839,11.89a8.034,8.034,0,0,0-.1-7.938ZM87.9,10.457a3.245,3.245,0,1,1,3.245-3.245A3.249,3.249,0,0,1,87.9,10.457Z"
                      transform="translate(-79.968 0)"
                      fill="#171717"
                    ></path>
                  </svg>
                  {/* <FaLocationDot fill="#171717" />  */}
                  Location
                </div>
              </div>
              <p className="text-white text-[10px] md:text-sm text-start">
                Geplaatst op 27 november 2020 - Sluit op 27 december 2020
              </p>
            </div>

            <div data-aos="zoom-in-up" className="lg:w-2/5 relative">
              <div className="mt-5 md:mt-0 flex justify-start items-start gap-2 md:gap-9 w-full rounded-lg border border-white h-72 bg-custom-gradient-yellow pl-5 md:pl-10 pt-10">
                <div className="cursor-pointer flex justify-center items-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black text-xl  font-extrabold">
                  <FaPlus />
                </div>
                <div>
                  <h1 className="text-lg md:text-3xl font-bold text-white mb-2">
                    Lorem, ipsum.
                  </h1>
                  <p className="text-white text-[15px] md:text-base text-start">
                    Deel jouw cv
                  </p>
                </div>
              </div>

              <div className="bg-white px-8 py-6 rounded-lg w-[270px] md:w-[420px] absolute top-2/4 -left-4 md:-left-16">
                <div className="flex justify-between items-center gap-2 md:gap-7 ">
                  <div className="w-3/4 text-[10px] md:text-base text-gray-500 text-start">
                    Als je op verstuur klikt, ga je akkoord met de voorwaarden
                  </div>
                  <div className="cursor-pointer text-[10px] md:text-base bg-[#B8A147] px-4 md:px-4 pt-2 pb-2 rounded-lg text-white">
                    Verstuur
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-col-reverse md:flex-row items-center gap-14 w-4/5 mx-auto mt-24 ">
        <div data-aos="zoom-in-right" className="md:w-2/3">
          <div className="flex justify-start items-center gap-5">
            <div className="hidden md:block w-8 rounded-lg md:h-8 bg-[#B8A147] transform rotate-45"></div>

            <h1 className="text-[#B8A147] font-bold text-lg md:text-2xl">
              More about the company
            </h1>
          </div>

          <p className="text-start md:ml-[53px] mt-2 md:mt-5 text-sm">
            Location: Rotterdam
          </p>
          <p className="text-xs md:text-base text-start md:ml-[53px] mt-2 md:mt-5  mb-6">
            region This leading machine builder is responsible for designing,
            developing, building and installing high-quality machines all over
            the world. With their expertise in the food industry, they are able
            to respond seamlessly to the needs of their customers. Within this
            young progressive company there is an open culture and a lot of
            investment in the employees.
          </p>
          <div className="flex justify-start items-center gap-5">
            <div className="hidden md:block w-8 rounded-lg md:h-8 bg-[#B8A147] transform rotate-45"></div>

            <h1 className="text-[#B8A147] font-bold text-lg md:text-2xl">
              Job Description
            </h1>
          </div>
          <p className="text-xs md:text-base text-start md:ml-[53px] mt-2 md:mt-5  mb-6">
            A completed HBO or WO degree in Mechanical Engineering or related
            You have (internship) experience in a similar position to System
            Engineer You have experience in the mechanical engineering industry
            preferably as a System Engineer
          </p>
          <p className="text-xs md:text-base text-start md:ml-[53px] mt-2 md:mt-5  mb-6">
            region This leading machine builder is responsible for designing,
            developing, building and installing high-quality machines all over
            the world. With their expertise in the food industry, they are able
            to respond seamlessly to the needs of their customers. Within this
            young progressive company there is an open culture and a lot of
            investment in the employees.
          </p>
        </div>

        <div data-aos="zoom-in-left">
          <div className="flex justify-center items-center gap-2 mb-9">
            <div className="text-[15px] md:text-base text-start">
              Advisor Mechanical Engineers
            </div>
            <div>
              {" "}
              <img src={applyProfile} alt="" />
            </div>
          </div>

          <div className="flex justify-start items-center gap-2 md:gap-5 mb-2 md:mb-5">
            <MdEmail fill="#B8A147" size={25} />
            <div>
              {" "}
              <div>abcd@gmail.com</div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 md:gap-5 mb-2 md:mb-5">
            <FaPhoneAlt fill="#B8A147" size={25} />
            <div>
              {" "}
              <div>3454564564554</div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 md:gap-5 mb-2 md:mb-5">
            <IoLogoWhatsapp fill="#B8A147" size={25} />
            <div>
              {" "}
              <div>WhatsApp</div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 md:gap-5">
            <FaLinkedin fill="#B8A147" size={25} />
            <div>
              {" "}
              <div>Linkedin</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative md:pl-40 -bottom-20 px-5 md:px-0">
        <div
          data-aos="fade-up"
          style={{
            borderImage:
              "linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 30",
          }}
          className="p-4 md:p-8 border rounded-lg bg-[#171717] md:w-[65%] flex flex-col justify-start"
        >
          <h1 className="text-white text-[15px] md:text-2xl font-bold text-start">
            Job Requirement
          </h1>
          <p className="text-white text-[10px] md:text-base text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially.Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially.
          </p>
        </div>
      </div>
      <div
        style={{ background: `url(${applyDirectlyBgImg})` }}
        className="w-full h-auto md:h-[800px]  bg-cover bg-center "
      >
        <div className="w-full h-auto md:h-full  bg-[#B8A147] px-5 md:px-20 bg-opacity-70 flex flex-col md:flex-row justify-center items-center md:gap-20 md:pb-0 pb-10">
          <div
            data-aos="fade-right"
            className="md:w-1/2 text-start pt-[120px] md:pt-20"
          >
            <p className="text-[13px] md:text-2xl">Apply now</p>
            <h1 className="text-[15px] md:text-4xl font-semibold py-1 md:py-3">
              Junior System Engineer Mechanical Engineering
            </h1>
            <div className="flex">
              <div className="h-auto border-l"></div>
              <div className="text-[13px] md:text-lg font-semibold mt-5">
                <div className="flex items-center gap-2 pb-5">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40.5"
                      height="19"
                      viewBox="0 0 40.5 19"
                    >
                      <line
                        id="Line_8"
                        data-name="Line 8"
                        x2="23"
                        transform="translate(0 10.5)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1"
                      ></line>
                      <circle
                        id="Ellipse_10"
                        data-name="Ellipse 10"
                        cx="9.5"
                        cy="9.5"
                        r="9.5"
                        transform="translate(21.5)"
                        fill="#fff"
                      ></circle>
                    </svg>
                  </p>
                  <p className="">Your resume</p>
                </div>
                <div className="flex items-center gap-2 pb-5">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40.5"
                      height="19"
                      viewBox="0 0 40.5 19"
                    >
                      <line
                        id="Line_8"
                        data-name="Line 8"
                        x2="23"
                        transform="translate(0 10.5)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1"
                      ></line>
                      <circle
                        id="Ellipse_10"
                        data-name="Ellipse 10"
                        cx="9.5"
                        cy="9.5"
                        r="9.5"
                        transform="translate(21.5)"
                        fill="#fff"
                      ></circle>
                    </svg>
                  </p>
                  <p className="">Your ambitions</p>
                </div>
                <div className="flex items-center gap-2 pb-5">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40.5"
                      height="19"
                      viewBox="0 0 40.5 19"
                    >
                      <line
                        id="Line_8"
                        data-name="Line 8"
                        x2="23"
                        transform="translate(0 10.5)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1"
                      ></line>
                      <circle
                        id="Ellipse_10"
                        data-name="Ellipse 10"
                        cx="9.5"
                        cy="9.5"
                        r="9.5"
                        transform="translate(21.5)"
                        fill="#fff"
                      ></circle>
                    </svg>
                  </p>
                  <p className="">Your selection of conversations</p>
                </div>
                <div className="flex items-center gap-2 pb-5">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40.5"
                      height="19"
                      viewBox="0 0 40.5 19"
                    >
                      <line
                        id="Line_8"
                        data-name="Line 8"
                        x2="23"
                        transform="translate(0 10.5)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1"
                      ></line>
                      <circle
                        id="Ellipse_10"
                        data-name="Ellipse 10"
                        cx="9.5"
                        cy="9.5"
                        r="9.5"
                        transform="translate(21.5)"
                        fill="#fff"
                      ></circle>
                    </svg>
                  </p>
                  <p className="">Your job choice</p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="md:w-auto flex flex-col mt-28 px-4 md:px-5 justify-center items-center bg-white rounded-lg"
          >
            <div className="flex w-56 md:w-80 justify-between py-5 md:py-10 items-center">
              <label
                htmlFor="upload"
                className="cursor-pointer flex bg-[#B8A147] justify-center items-center w-12 h-12 md:w-16 md:h-16 rounded-full text-black text-xl font-extrabold"
                aria-label="Upload CV"
              >
                <FaPlus color="white" />
              </label>
              <div className="text-[#B8A147] font-semibold text-[15px] md:text-2xl">
                Upload Your CV
              </div>
              <input
                id="upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
            <input
              className="text-[12px] md:text-base py-2 px-5 w-52 md:w-72 lg:w-80 mb-5 text-gray-700 outline-none focus:outline-none bg-[#E3E3E3] rounded-lg"
              type="text"
              placeholder="Upload CV"
              value={fileAddress}
              readOnly
              aria-label="File address"
            />
            <input
              className="text-[12px] md:text-base py-2 px-5 w-52 md:w-72 lg:w-80 mb-5  text-gray-700 outline-none focus:outline-none bg-[#E3E3E3] rounded-lg"
              type="text"
              placeholder="Surname"
            />
            <input
              className="text-[12px] md:text-base py-2 px-5 w-52 md:w-72 lg:w-80 mb-5  text-gray-700 outline-none focus:outline-none bg-[#E3E3E3] rounded-lg"
              type="email"
              placeholder="Email"
              name=""
              id=""
            />
            <input
              className="text-[12px] md:text-base py-2 px-5 w-52 md:w-72 lg:w-80 mb-5  text-gray-700 outline-none focus:outline-none bg-[#E3E3E3] rounded-lg"
              type="tel"
              placeholder="Phone"
              name=""
              id=""
            />
            <textarea
              className="text-[12px] md:text-base py-2 px-5 w-52 md:w-72 lg:w-80 mb-5  text-gray-700 outline-none focus:outline-none bg-[#E3E3E3] rounded-lg"
              placeholder="Message"
              name=""
              id=""
            ></textarea>
            <button
              className="md:px-10  bg-[#B8A147] text-[10px] md:text-base w-20 md:w-32 py-2 rounded-lg"
              type="submit"
            >
              Submit
            </button>
            <div className="relative -bottom-4 bg-white flex border border-[#B8A147] rounded-lg p-1 px-2 justify-between items-center w-[80%]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.21"
                  height="16.28"
                  viewBox="0 0 12.21 16.28"
                >
                  <path
                    id="padlock"
                    d="M13.684,6.1h-.509V4.07a4.07,4.07,0,0,0-8.14,0V6.1H4.526A1.528,1.528,0,0,0,3,7.631v7.122A1.528,1.528,0,0,0,4.526,16.28h9.157a1.528,1.528,0,0,0,1.526-1.526V7.631A1.528,1.528,0,0,0,13.684,6.1ZM6.392,4.07a2.713,2.713,0,1,1,5.427,0V6.1H6.392Zm3.392,7.273v1.545a.678.678,0,1,1-1.357,0V11.343a1.357,1.357,0,1,1,1.357,0Z"
                    transform="translate(-3)"
                    fill="#B8A147"
                  ></path>
                </svg>
              </div>
              <div className="text-[#B8A147] text-[8px] md:text-sm">
                We handle your data confidentially
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-[13px] md:text-3xl w-full text-start p-10 pb-0">
          See all similar jobs
        </div>
        <div
          // data-aos="flip-up"
          className="flex justify-center  gap-12 p-10 flex-col md:flex-row"
        >
          <div className="md:w-[30%] flex justify-center">
            {" "}
            <Card bgImage={worker} heading={"Engineering"} />
          </div>
          <div className="md:w-[30%] flex justify-center">
            {" "}
            <Card bgImage={developer} heading={"Development"} />
          </div>
          <div className="md:w-[30%] flex justify-center">
            {" "}
            <Card bgImage={sale} heading={"Sales"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
