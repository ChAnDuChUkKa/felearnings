import React from "react";
import logo from "../assets/images/b2blogo.svg";
import question from "../assets/images/Question.svg";
import bell from "../assets/images/Bell.svg";
import profile from "../assets/images/profile.svg";
import down from "../assets/images/Down.svg";
import hamberger from "../assets/images/hamberger.svg";
import profileIcon from "../assets/images/profileIcon.svg";

export const Header = () => {
  return (
    <div className="sticky w-[100%] flex flex-row justify-between lg:justify-end px-[20px] py-[14px] lg:px-[40px] lg:py-[20px] border-b-[1px] border-b-[#E0E0E0]">
      <img src={logo} alt="logo" className="lg:hidden w-[6.75rem]" />
      <div className="hidden lg:flex flex-row items-center">
        <img src={question} alt="question" className="mr-[1rem]" />
        <img src={bell} alt="bell" className="mr-[1rem]" />
        <img src={profile} alt="profile" className="mr-[1rem]" />
        <p className="mr-[1rem]">Hi,Zara</p>
        <img src={down} alt="down" />
      </div>
      <div className="flex lg:hidden">
        <img src={profileIcon} alt="profile" className="mr-[1rem]" />
        <img src={hamberger} alt="hamberger" />
      </div>
    </div>
  );
};
