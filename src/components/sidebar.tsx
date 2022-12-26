import React, { useState } from "react";
import p from "../assets/images/P.svg";
import logo from "../assets/images/b2blogo.svg";
import invoice from "../assets/images/invoice.svg";
import reports from "../assets/images/reports.svg";
import payments from "../assets/images/payments.svg";
import requests from "../assets/images/requests.svg";
import dashboard from "../assets/images/dashboard.svg";
import owner from "../assets/images/owner.svg";
import announcements from "../assets/images/announcements.svg";
import arrowleft from "../assets/images/ArrowLeft.svg";
import arrowright from "../assets/images/ArrowRight.svg";
import tenant from "../assets/images/tenant.svg";
import property from "../assets/images/property.svg";
import down from "../assets/images/Down.svg";

import activeDashboard from "../assets/images/active-dashboard.svg";
import activeProperty from "../assets/images/active-property.svg";
import activeAnnouncements from "../assets/images/active-announcements.svg";
import activeInvoice from "../assets/images/active-invoice.svg";
import activeOwner from "../assets/images/active-owner.svg";
import activePayments from "../assets/images/active-payments.svg";
import activeReports from "../assets/images/active-reports.svg";
import activeRequests from "../assets/images/active-requests.svg";
import activeTenant from "../assets/images/active-tenant.svg";

import useToggle from "../hooks";

export const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [propertyManagement, setProperty] = useState(false);
  const [tenantManagement, setTenant] = useState(false);
  const [paymentManagement, setPayments] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const toggleSidebar = () => {
    setToggle(!toggle);
  };
  const toggleProperty = () => {
    setProperty(!propertyManagement);
  };
  const toggleTenant = () => {
    setTenant(!tenantManagement);
  };
  const togglePayments = () => {
    setPayments(!paymentManagement);
  };

  return (
    <div
      className={`${
        toggle ? "w-[29%]" : "w-[90px] items-center"
      } h-[100%] max-h-[693px] hidden lg:flex flex-col shadow-[2px_2px_12px_rgba(162,162,162,0.07)]
      rounded-[0px]`}
    >
      <div className="flex justify-center items-center h-[72px]">
        {!toggle ? (
          <img src={p} alt="p" className="py-[20px] w-[1rem]" />
        ) : (
          <img
            src={logo}
            alt="paymatrix"
            className="self-center px-[10px] w-[85%] py-[20px]"
          />
        )}
      </div>
      <div
        className={`flex flex-col ${
          toggle ? "items-start" : "items-center"
        } overflow-auto pr-[1rem] pl-[10px]`}
      >
        <div
          className={`w-[100%] flex px-[1rem] py-[14px] cursor-pointer ${
            activeTab === "dashboard"
              ? "bg-[#F6F6F9] rounded-[12px] text-[#565BBD] font-[500]"
              : "bg-transparent font-[400]"
          }`}
          onClick={() => setActiveTab("dashboard")}
        >
          <img
            src={activeTab === "dashboard" ? activeDashboard : dashboard}
            alt="dashboard"
            className="w-[24px]"
          />
          {toggle && (
            <div className="flex ml-[0.875rem]">
              {/* <img src={dashboard} alt="dashboard" /> */}
              <p> Dashboard</p>
            </div>
          )}
        </div>
        <div
          className={`w-[100%] flex px-[1rem] py-[14px] mt-[0.5rem] cursor-pointer ${
            activeTab === "property" ||
            activeTab === "properties" ||
            activeTab === "units"
              ? "bg-[#F6F6F9] rounded-[12px] text-[#565BBD] font-[500]"
              : "bg-transparent font-[400]"
          }`}
          onClick={() => setActiveTab("property")}
        >
          <img
            src={activeTab === "property" ? activeProperty : property}
            alt="property"
            className="w-[24px]"
          />
          {toggle && (
            <div className="w-[100%] flex justify-between items-center ml-[0.875rem]">
              {/* <img src={property} alt="properrty" /> */}
              <p>Property Management</p>
              <img
                src={down}
                alt="down"
                onClick={toggleProperty}
                className={`${propertyManagement ? "rotate-180" : "rotate-0"}`}
              />
            </div>
          )}
        </div>
        {toggle && propertyManagement && (
          <div className="flex flex-col justify-center ml-[4rem]">
            <p
              className={`mt-[1rem] cursor-pointer ${
                activeTab === "properties"
                  ? "text-[#565BBD] font-[500]"
                  : "bg-transparent font-[400]"
              }`}
              onClick={() => setActiveTab("properties")}
            >
              Properties
            </p>
            <p
              className={`mt-[1rem] cursor-pointer ${
                activeTab === "units"
                  ? "text-[#565BBD] font-[500]"
                  : "bg-transparent font-[400]"
              }`}
              onClick={() => setActiveTab("units")}
            >
              Units
            </p>
          </div>
        )}
        <div
          className={`w-[100%] flex px-[1rem] py-[14px] mt-[0.5rem] cursor-pointer ${
            activeTab === "tenant" ||
            activeTab === "onboarding" ||
            activeTab === "offboarding"
              ? "bg-[#F6F6F9] rounded-[12px] text-[#565BBD] font-[500]"
              : "bg-transparent font-[400]"
          }`}
          onClick={() => setActiveTab("tenant")}
        >
          <img
            src={activeTab === "tenant" ? activeTenant : tenant}
            alt="tenant"
            className="w-[24px]"
          />
          {toggle && (
            <div className="w-[100%] flex flex-row justify-between items-center ml-[0.875rem]">
              {/* <img src={tenant} alt="tenant" /> */}
              <p>Tenant Management</p>
              <img
                src={down}
                alt="down"
                onClick={toggleTenant}
                className={`${tenantManagement ? "rotate-180" : "rotate-0"}`}
              />
            </div>
          )}
        </div>
        {toggle && tenantManagement && (
          <div className="flex flex-col justify-center ml-[4rem]">
            <p
              className={`mt-[1rem] cursor-pointer ${
                activeTab === "onboarding"
                  ? "text-[#565BBD] font-[500]"
                  : "bg-transparent font-[400]"
              }`}
              onClick={() => setActiveTab("onboarding")}
            >
              Onboarding
            </p>
            <p
              className={`mt-[1rem] cursor-pointer ${
                activeTab === "offboarding"
                  ? "text-[#565BBD] font-[500]"
                  : "bg-transparent font-[400]"
              }`}
              onClick={() => setActiveTab("offboarding")}
            >
              Offboarding
            </p>
          </div>
        )}
        <div
          className={`w-[100%] flex px-[1rem] py-[14px] mt-[0.5rem] cursor-pointer ${
            activeTab === "owner"
              ? "bg-[#F6F6F9] rounded-[12px] text-[#565BBD] font-[500]"
              : "bg-transparent font-[400]"
          }`}
          onClick={() => setActiveTab("owner")}
        >
          <img
            src={activeTab === "owner" ? activeOwner : owner}
            alt="owner"
            className="w-[24px]"
          />
          {toggle && (
            <div className="flex justify-between items-center ml-[0.875rem]">
              {/* <img src={owner} alt="owner" /> */}
              <p>Owner Management</p>
            </div>
          )}
        </div>
        <div
          className={`w-[100%] flex px-[1rem] py-[14px] mt-[0.5rem] cursor-pointer ${
            activeTab === "invoice"
              ? "bg-[#F6F6F9] rounded-[12px] text-[#565BBD] font-[500]"
              : "bg-transparent font-[400]"
          }`}
          onClick={() => setActiveTab("invoice")}
        >
          <img
            src={activeTab === "invoice" ? activeInvoice : invoice}
            alt="invoice"
            className="w-[24px]"
          />
          {toggle && (
            <div className="flex ml-[0.875rem]">
              {/* <img src={invoice} alt="invoice" /> */}
              <p>Invoices</p>
            </div>
          )}
        </div>
        <div
          className={`w-[100%] flex px-[1rem] py-[14px] mt-[0.5rem] cursor-pointer ${
            activeTab === "payments" ||
            activeTab === "settlements" ||
            activeTab === "refunds"
              ? "bg-[#F6F6F9] rounded-[12px] text-[#565BBD] font-[500]"
              : "bg-transparent font-[400]"
          }`}
          onClick={() => setActiveTab("payments")}
        >
          <img
            src={activeTab === "payments" ? activePayments : payments}
            alt="payments"
            className="w-[24px]"
          />
          {toggle && (
            <div className="w-[100%] flex justify-between items-center ml-[0.875rem]">
              {/* <img src={payments} alt="payments" /> */}
              <p>Payments</p>
              <img
                src={down}
                alt="down"
                onClick={togglePayments}
                className={`${paymentManagement ? "rotate-180" : "rotate-0"}`}
              />
            </div>
          )}
        </div>
        {toggle && paymentManagement && (
          <div className="flex flex-col justify-center ml-[4rem]">
            <p
              className={`mt-[1rem] cursor-pointer ${
                activeTab === "refunds"
                  ? "text-[#565BBD] font-[500]"
                  : "bg-transparent font-[400]"
              }`}
              onClick={() => setActiveTab("refunds")}
            >
              Refunds
            </p>
            <p
              className={`mt-[1rem] cursor-pointer ${
                activeTab === "settlements"
                  ? "text-[#565BBD] font-[500]"
                  : "bg-transparent font-[400]"
              }`}
              onClick={() => setActiveTab("settlements")}
            >
              Settlements
            </p>
          </div>
        )}
        <div
          className={`w-[100%] flex px-[1rem] py-[14px] mt-[0.5rem] cursor-pointer ${
            activeTab === "requests"
              ? "bg-[#F6F6F9] rounded-[12px] text-[#565BBD] font-[500]"
              : "bg-transparent font-[400]"
          }`}
          onClick={() => setActiveTab("requests")}
        >
          <img
            src={activeTab === "requests" ? activeRequests : requests}
            alt="requests"
            className="w-[24px]"
          />
          {toggle && (
            <div className="w-[100%] flex justify-between items-center ml-[0.875rem]">
              {/* <img src={requests} alt="requests" /> */}
              <p>Requests</p>
              <p className="bg-[#F0F9FF] rounded-[25px] px-[18px] py-[6px] text-[#2F88C3]">
                25
              </p>
            </div>
          )}
        </div>
        <div
          className={`w-[100%] flex px-[1rem] py-[14px] mt-[0.5rem] cursor-pointer ${
            activeTab === "announcements"
              ? "bg-[#F6F6F9] rounded-[12px] text-[#565BBD] font-[500]"
              : "bg-transparent font-[400]"
          }`}
          onClick={() => setActiveTab("announcements")}
        >
          <img
            src={
              activeTab === "announcements"
                ? activeAnnouncements
                : announcements
            }
            alt="announcements"
            className="w-[24px]"
          />
          {toggle && (
            <div className="flex ml-[0.875rem]">
              {/* <img src={announcements} alt="announcements" /> */}
              <p>Announcements</p>
            </div>
          )}
        </div>
        <div
          className={`w-[100%] flex px-[1rem] py-[14px] mt-[0.5rem] cursor-pointer ${
            activeTab === "reports"
              ? "bg-[#F6F6F9] rounded-[12px] text-[#565BBD] font-[500]"
              : "bg-transparent font-[400]"
          }`}
          onClick={() => setActiveTab("reports")}
        >
          <img
            src={activeTab === "reports" ? activeReports : reports}
            alt="reports"
            className="w-[24px]"
          />
          {toggle && (
            <div className="flex ml-[0.875rem]">
              {/* <img src={reports} alt="reports" /> */}
              <p>Reports</p>
            </div>
          )}
        </div>
      </div>
      <hr className="w-[100%] mt-[1.5rem]" />
      <div
        className={`flex ${toggle ? "justify-end" : "justify-center"} p-[1rem]`}
      >
        {toggle ? (
          <img
            src={arrowleft}
            alt="arrowleft"
            onClick={toggleSidebar}
            className="cursor-pointer"
          />
        ) : (
          <img
            src={arrowright}
            alt="arrowright"
            onClick={toggleSidebar}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};
