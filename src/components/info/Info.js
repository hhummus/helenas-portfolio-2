import "../../css/Info.css";
import { useState } from "react";
import About from "./About";
import Contact from "./Contact";

function Info() {
  const [showAbout, setShowAbout] = useState(true);
  const [showContact, setShowContact] = useState(false);

  const handleShowAbout = () => {
    setShowAbout(true);
    setShowContact(false);
  };

  const handleShowContact = () => {
    setShowAbout(false);
    setShowContact(true);
  };

  return (
    <>
      <div id="info">
        <div className="container">
          <div className="col infoTitles">
            <div className="sectionTitle">
              <h3
                className={`${showAbout ? "" : "text-muted"} about`}
                id="about"
                onClick={handleShowAbout}
              >
                About 02
              </h3>
              <h3
                className={`${showContact ? "" : "text-muted"} contact`}
                id="contact"
                onClick={handleShowContact}
              >
                Contact 03
              </h3>
            </div>
          </div>
          <About show={showAbout} />
          <Contact show={showContact} />
        </div>
      </div>
    </>
  );
}

export default Info;
