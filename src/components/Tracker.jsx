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
        className="relative h-[300px] w-screen bg-bgPattern bg-no-repeat object-cover md:h-[15.625rem] lg:h-[15.625rem]"
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
          <div className="z-[1] mt-8 grid w-[320px] items-center justify-evenly gap-7 rounded-xl bg-white md:mt-14 md:w-[520px] lg:mt-14 lg:flex lg:h-[160px] lg:w-[960px] lg:gap-4 ">
            <div
              id="ip-address"
              className="pt-6 text-center lg:pt-0 lg:pl-6 lg:text-left"
            >
              <p className="text-sm font-semibold uppercase text-darkGray">
                ip address
              </p>
              <h1 className="pt-2 text-2xl font-bold text-veryDarkGray">
                {ipAdd}
              </h1>
            </div>
            <div
              id="location"
              className="text-center lg:border-l lg:border-l-darkGray lg:pl-6 lg:text-left"
            >
              <p className="text-sm font-semibold uppercase text-darkGray">
                location
              </p>
              <h1 className="pt-2 text-2xl font-bold text-veryDarkGray">
                {city}, {region} {zip}
              </h1>
            </div>
            <div
              id="timezone"
              className="text-center lg:border-l lg:border-l-darkGray lg:pl-6 lg:text-left"
            >
              <p className="text-sm font-semibold uppercase text-darkGray">
                timezone
              </p>
              <h1 className="pt-2 text-2xl font-bold text-veryDarkGray">
                {timeZone}
              </h1>
            </div>
            <div
              id="isp"
              className="pb-6 text-center lg:border-l lg:border-l-darkGray lg:pr-4 lg:pl-6 lg:pb-0 lg:text-left"
            >
              <p className="text-sm font-semibold uppercase text-darkGray">
                isp
              </p>
              <h1 className="pt-2 text-2xl font-bold text-veryDarkGray">
                {isp}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        id="map-component"
        className="z-[0] h-[63vh] w-screen md:h-[76.8vh] lg:h-[66vh]"
      >
        <Map lat={lat} lon={lon} city={city} region={region} />
      </div>
    </div>
  );
}

export default Tracker;
