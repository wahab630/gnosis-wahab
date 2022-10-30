import React from "react";
import "./sectionThree.css";
import { AiFillTwitterCircle, AiFillMediumCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const SectionThree = () => {
  return (
    <>
      <div className="container col-9 hero-section3">
        <div className="row">
          <div className="col-6">
            <h1 className="heading-three">Join the Community</h1>
            <p>
              {" "}
              <AiFillMediumCircle size="5em" />
              <AiFillTwitterCircle size="5em" />
              <FaDiscord size="5em" />{" "}
            </p>
          </div>
          <div className="col-6 cards">
            <div className="card-1 col-6 rounded">
              <p>
                <span>
                  DappCon is a nonprofit conference for the Ethereum ecosystem,
                  organized by Gnosis.
                </span>
              </p>
              <br />
              <span className="card-1-bottom "><span className="me-4">DappCon  </span> <span className="ps-5 ms-5"><FaArrowRight/> </span></span>
            </div>
            <div className="  col-6">
              <div className="card-2 rounded">
                <p>
                  <span className="paraCard2">
                    Full Node is a co-working space for decentralized technology
                    initiatives to work and collaborate, run by Gnosis.
                  </span>
                  <br />
                </p>
                <span className="card-2-bottom"> <span className="me-4"> Full Node </span><span className="ps-5 ms-5"><FaArrowRight/> </span> </span>
              </div>
              <div>
                <button className="Button-three fw-bold">Newsletter <span className="ps-5 ms-5"><FaArrowRight/> </span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
