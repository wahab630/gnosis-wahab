import React from "react";
import "./sectionOne.css";
const SectionOne = () => {
  return (
    <>
      <div className="container  col-9 hero-section1">
        <div className="row">
          <div className=" single-column col-10">
            <p className="para">
              Gnosis builds new market mechanisms for decentralized finance. Our
              three interoperable product lines allow you to securely{" "}
              <span id="one"> create</span>, <span id="two">trade</span>, and{" "}
              <span id="three">hold</span> digital assets on Ethereum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
