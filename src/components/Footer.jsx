import React from "react";
import footerLogo from "../assests/Footer_logo.png";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLogoRss } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="footerMain" id="consulting">
      <div className="footerMainContainer">
        <div className="w-full md:w-3/4">
          <div className="w-full flex md:justify-start justify-center">
            <img className="w-32" src={footerLogo} alt="" srcset="" />
          </div>
        </div>
        <div className="w-full md:w-2/4 ">
          <div className="footerMainContainer2Child pb-5">
            <div className="footerMainContainer2Child1">
              <p>
                <strong> Dubai Address</strong> 735 B block business Village
                port saeed Deira
              </p>
              <br />
              <p>
                <strong>JAFZA Office:</strong> Jafza One, Tower B Office No:1102
              </p>
            </div>
            <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center w-full px-3 lg:px-8">
              <div className="footerMainContainer2Child2Number">
                info@amglobal.co
              </div>
              <div className="footerMainContainer2Child2Number">
                +971 4 5919100
              </div>
            </div>
          </div>

          <div className="footerMainContainer2Child3">
            <div className="footerMainContainer2Child3Text">Social Media :</div>
            <div className="w-auto">
              <IoLogoFacebook className="footerIcons1" />
            </div>
            <div className="w-auto">
              <FaTwitter className="footerIcons2" />
            </div>
            <div className="w-auto">
              <FaLinkedinIn className="footerIcons3" />
            </div>
            <div className="w-auto">
              <FaYoutube className="footerIcons4" />
            </div>
            <div className="w-auto">
              <FaInstagram className="footerIcons5" />
            </div>
            <div className="w-auto">
              <FaGooglePlusG className="footerIcons6" />
            </div>
            <div className="w-auto">
              <FaPinterest className="footerIcons7" />
            </div>
            <div>
              <IoLogoRss className="footerIcons8" />
            </div>
          </div>
        </div>
      </div>
      <div className="footerMainBottom flex flex-col  lg:flex-row justify-between">
        <div className="pb-5 lg:pb-0 w-full lg:w-1/2 flex justify-center text-center sm:justify-between gap-2 md:gap-5 text-white md:text-sm text-[8px]">
          <div>About us</div>
          <div>Contact us</div>
          <div>Help</div>
          <div>Privacy Policy</div>
          <div>Disclaimer</div>
        </div>
        <div className="footerMainBottomChild2">
          Copyright © 2024 • AM GLOBAL
        </div>
      </div>
    </div>
  );
}
