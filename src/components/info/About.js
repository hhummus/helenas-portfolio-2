import React from "react";

function About({ show }) {
  return (
    <div
      className={`${show ? "d-block" : "d-none"} card-container infoContent`}
    >
      <div className="col">
        <p className="sectionDescription">A little bit about me</p>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-block">
            <div className="front">
              <p className="card-text">
                Hi, my name is Helena, which you might have read upon first
                visiting my website. <span>I currently reside in Oslo. </span>
              </p>

              <p>Please don’t hesitate to contact me.</p>
              <p>Thank you for visiting!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
