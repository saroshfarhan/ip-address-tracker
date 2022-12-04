import React from "react";
import { useState } from "react";
import arrow from "../assets/images/icon-arrow.svg";
import Map from "./Map";

function Tracker({
  ipAdd,
  city,
  region,
  zip,
  lat,
  lon,
  timeZone,
  isp,
  handleSearch,
}) {
  const [ip, setIp] = useState("");

  function handleChange(event) {
    event.preventDefault();
    if (event.target.value === "") {
      setIp((prevIp) => (prevIp = ""));
    } else {
      setIp((prevIp) => (prevIp = event.target.value));
    }
  }

  return (
    <div id="tracker-page" className="grid w-screen">
      <div
        id="tracker-inputs"
        className="relative h-[300px] w-screen bg-bgPattern object-cover md:h-[15.625rem] lg:h-[15.625rem]"
      >
        <h1 className="mt-6 text-center text-3xl font-medium text-white">
          IP Address Tracker
        </h1>
        <div className="mt-6 flex items-center justify-center">
          <input
            type="text"
            name="ip-input"
            id="ip-input"
            value={ip}
            onChange={handleChange}
            placeholder="Search for any IP address or domain"
            className="h-12 w-64 rounded-l-xl px-4 placeholder:font-sans placeholder:font-normal  focus:outline-none md:w-[420px] lg:w-[480px]"
          />
          <button
            id="search ip"
            type="button"
            onClick={() => handleSearch(ip)}
            className=" right-[19%] h-12 rounded-r-xl bg-black hover:bg-veryDarkGray"
          >
            <img src={arrow} alt="arrow icon" className="px-6 py-2" />
          </button>
        </div>
        <div
          id="info-card"
          className="absolute flex w-screen items-center justify-center"
        >
          <div className="z-[1] mt-8 h-[280px] w-[320px] rounded-xl border border-black bg-white md:mt-14  md:h-[7.5rem] md:w-[700px] lg:mt-14 lg:h-[7.5rem] lg:w-[860px]"></div>
        </div>
      </div>
      <div
        id="map-component"
        className="z-[0] h-[63vh] w-screen md:h-[76.8vh] lg:h-[66vh]"
      >
        <Map />
      </div>
    </div>
  );
}

export default Tracker;
