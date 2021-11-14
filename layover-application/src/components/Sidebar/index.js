import React, { useState } from "react";

function Sidebar({ layoverData }) {
  console.log(layoverData);
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div
      className={`sidebar ${isActive ? "" : "open"}`}
      data-testid="Sidebar"
      onClick={handleToggle}
    >
      <h2>Information on your layover</h2>
      {/* <section id="flightMetadata">
        <h3>Flight number 1</h3>
        <p>{formData.flight1Number}</p>
        <h3>Flight number 2</h3>
        <p>{formData.flight2Number}</p>
      </section> */}
      <section id="layoverInfo">
        <h3>Airport</h3>
        <p>{layoverData[0]}</p>
        {/* <h3>Terminal</h3>
        <p>{dummyData.terminal}</p> */}
        <h3>Layover duration</h3>
        <p>{`${layoverData[1]} hours`}</p>
      </section>
      {/* <section id="flightTimes">
        <h3>Arrival date:</h3>
        <p>{formData.flight1Date}</p>
        <h3>Departure date:</h3>
        <p>{formData.flight2Date}</p>
      </section> */}
    </div>
  );
}

export default Sidebar;
