import React from "react";
import "./whatROYAL.css";
import CodeScan from "../../assets/codescan.png";
import Calendar from "../../assets/calendar.png";
import Shield from "../../assets/shield.png";

const WhatROYAL = () => {
  return (
    <>
      <section className="logistics__WhatROYAL">
        <div className="logistics__WhatROYAL-heading">
          <img src={CodeScan} alt="" />
          <div className="logistics__WhatROYAL-inner">
            <h1>Price Match</h1>
            <p>Best Price Guaranteed </p>
          </div>
        </div>
        <div className="logistics__WhatROYAL-heading">
          <img src={Calendar} alt="" />
          <div className="logistics__WhatROYAL-inner">
            <h1>Guaranteed Pickup</h1>
            <p>Your choice of pick-up </p>
          </div>
        </div>
        <div className="logistics__WhatROYAL-heading">
          <img src={Shield} alt="" />
          <div className="logistics__WhatROYAL-inner">
            <h1>Safe Transport</h1>
            <p>Full insureance coverage</p>
          </div>
        </div>
      </section>
      <div className="logistics__WhatROYAL-yellow"></div>
    </>
  );
};

export default WhatROYAL;
