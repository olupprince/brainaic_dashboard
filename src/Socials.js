import React from "react";
import "./Style.css";

import image1 from "./insta2.png";
import image2 from "./twitter1.png";
import image3 from "./youtube1.png";
import image4 from "./facebook1.png";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { faInstagram } from "@fortawesome/free-solid-svg-icons";

function Socials() {
  return (
    <div className="container">
      <div>
        <h3 className="header1">dashboard</h3>
        <p className="header2">Social media dashboard</p>
      </div>
      <div className="social">
        <a href="https://www.instagram.com/">
          <img src={image1} width={40} height={40} />
          <p></p>
        </a>
        <a href="https://www.twitter.com/">
          <img src={image2} width={40} height={40} />
          <p></p>
        </a>
        <a href="https://www.youtube.com/">
          <img src={image3} width={40} height={50} />
          <p></p>
        </a>
        <a href="https://web.facebook.com/?_rdc=1&_rdr/">
          <img src={image4} width={40} height={40} />
          <p></p>
        </a>

        {/* <fontAwesomeIcon icon="fa-brands fa-instagram" /> */}
      </div>
    </div>
  );
}

export default Socials;
