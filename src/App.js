import React, { useEffect, useState } from "react";
import Tracker from "./components/Tracker";

function App() {
  const [ipData, setIpData] = useState({
    ipAdd: "",
    city: "",
    region: "",
    zip: "",
    lat: 0,
    lon: 0,
    timezone: "",
    isp: "",
  });

  function searchIp(inputIp) {
    let url = "http://ip-api.com/json";
    if (inputIp === "") {
      alert("Please provide an ip address");
    } else {
      url = "http://ip-api.com/json/" + inputIp;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIpData({
          ipAdd: data.query,
          city: data.city,
          region: data.region,
          zip: data.zip,
          lat: data.lat,
          lon: data.lon,
          timezone: data.timezone,
          isp: data.isp,
        });
      });
  }

  useEffect(() => {
    fetch("http://ip-api.com/json")
      .then((res) => res.json())
      .then((data) => {
        setIpData({
          ipAdd: data.query,
          city: data.city,
          region: data.region,
          zip: data.zip,
          lat: data.lat,
          lon: data.lon,
          timezone: data.timezone,
          isp: data.isp,
        });
      });
  }, []);

  return (
    <main className="h-screen w-screen">
      <Tracker
        ipAdd={ipData.ipAdd}
        city={ipData.city}
        region={ipData.region}
        zip={ipData.zip}
        lat={ipData.lat}
        lon={ipData.lon}
        timeZone={ipData.timezone}
        isp={ipData.isp}
        handleSearch={searchIp}
      />
    </main>
  );
}

export default App;
