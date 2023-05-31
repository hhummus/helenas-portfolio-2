import React from "react";
import "../../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="row footerInfo">
        <div className="col">
          <p>Design and website by Helena Løkkeberg</p>
          <p>Deployed with Netlify</p>
        </div>
      </div>
      <div className="row footerLinks">
        <div className="col">
          <a href="https://github.com/hhummus">Github</a>
          <a href="https://haslalokkeberg.no/">Haslalokkeberg</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
