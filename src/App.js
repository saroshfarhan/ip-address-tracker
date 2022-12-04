import React from "react";
import Tracker from "./components/Tracker";

function App() {
  function searchIp(inputIp) {
    if (inputIp === "") {
      alert("Please provide an ip address");
    }
    console.log(inputIp);
  }

  return (
    <main className="h-screen w-screen">
      <Tracker handleSearch={searchIp} />
    </main>
  );
}

export default App;
