import "../../css/Header.css";

import React from "react";

function Header() {
  return (
    <div id="header">
      <div className="row titleSubStitle">
        <div className="col">
          <h1 className="headerTitle">Helena Løkkeberg</h1>
          <h2 className="headerSubTitle">Junior frontend developer</h2>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>
            <span className="headerIntroBlock">
              Thank you for visiting my portfolio.
            </span>
            You probably want to{" "}
            <span className="headerIntroColor">get to know </span>
            <span className="headerIntroColor headerIntroBlock">
              me a little bit better?
            </span>
          </p>

          <p>
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
              className="fakeClick"
            >
              {" "}
              Click here for 3 fast facts.
            </span>
          </p>

          <div
            className="offcanvas offcanvas-start"
            data-bs-backdrop="static"
            tabIndex="-1"
            id="staticBackdrop"
            aria-labelledby="staticBackdropLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="staticBackdropLabel">
                3 fast ones
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div>
                <h6>1. Most used tools past 2 months</h6>
                <p>Javascript Bootstrap React CSS</p>
              </div>
              <div>
                <h6>2. Passion in the field</h6>
                <p>
                  I have a passion for gaming and game based learning for kids
                  and adults.{" "}
                </p>
              </div>
              <div>
                <h6>3. Passion out of field</h6>
                <p>
                  you’ll often find me either climbing a tree or being face down
                  in the grass to get a good ol’ look of some moss, fungi or
                  lichen.
                </p>
              </div>
            </div>
          </div>

          <p>
            Take a look at my projects by clicking{" "}
            <span>
              <a href="#projects" className="correctClick">
                Here.
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
