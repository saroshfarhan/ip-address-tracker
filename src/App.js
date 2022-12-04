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
    let url =
      "https://api.bigdatacloud.net/data/ip-geolocation?localityLanguage=en&key=bdc_f42b11b1687544b48a3497c12240c447";
    if (inputIp === "") {
      alert("Please provide an ip address");
    } else {
      url =
        "https://api.bigdatacloud.net/data/ip-geolocation?ip=" +
        inputIp +
        "&localityLanguage=en&key=bdc_f42b11b1687544b48a3497c12240c447";
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIpData({
          ipAdd: data.ip,
          city: data.location.localityName,
          region: data.location.isoPrincipalSubdivisionCode,
          zip: data.location.postcode,
          lat: data.location.latitude,
          lon: data.location.longitude,
          timezone: data.location.timeZone.ianaTimeId,
          isp: data.network.organisation,
        });
      });
  }

  useEffect(() => {
    let url =
      "https://api.bigdatacloud.net/data/ip-geolocation?localityLanguage=en&key=bdc_f42b11b1687544b48a3497c12240c447";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIpData({
          ipAdd: data.ip,
          city: data.location.localityName,
          region: data.location.isoPrincipalSubdivisionCode,
          zip: data.location.postcode,
          lat: data.location.latitude,
          lon: data.location.longitude,
          timezone: data.location.timeZone.ianaTimeId,
          isp: data.network.organisation,
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
