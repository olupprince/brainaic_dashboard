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

      <div className="container2">
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
            <img src={image3} width={45} height={50} />
            <p></p>
          </a>
          <a href="https://web.facebook.com/?_rdc=1&_rdr/">
            <img src={image4} width={40} height={40} />
            <p></p>
          </a>
          {/* <fontAwesomeIcon icon="fa-brands fa-instagram" /> */}
        </div>
        <div className="facebook-output">
          <h5>facebook daily reach(90 days reach)</h5>
          <p id="daily-reach"></p>
          <p id="total-page-likes"></p>
          <p id="new-page-likes"></p>
        </div>
        <div className="instagram-output">
          <h5 id="tt">twitter stats</h5>
          <p id="followers"></p>
          <p id="friends"></p>
          <p id="statuses"></p>
          <p id="favourite"></p>
        </div>
        <div className="twitter-output">
          <h5 id="ins">instagram stats</h5>
          <p id="post"></p>
          <p id="followers"></p>
          <p id="following"></p>
        </div>
        <div className="youtube-output">
          <h5>youtube channel view</h5>
          <p id="views"></p>
          <p id="subcribers"></p>
        </div>
        <div className="empty-container1"></div>
        <div className="empty-container2"></div>
        <div className="empty-container3"></div>
        <div className="empty-container4"></div>
        <div className="empty-container5"></div>
      </div>
    </div>
  );
}

export default Socials;
