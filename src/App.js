import React, { useEffect } from "react";
import Tracker from "./components/Tracker";

function App() {
  function searchIp(inputIp) {
    if (inputIp === "") {
      alert("Please provide an ip address");
    }
    //Add fectch here with ip address
  }

  useEffect(() => {
    fetch("http://ip-api.com/json")
      .then((res) => res.json())
      .then((data) => {});
  }, []);

  return (
    <main className="h-screen w-screen">
      <Tracker handleSearch={searchIp} />
    </main>
  );
}

export default App;
