import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon cursor="pointer" />
        <TwitterIcon cursor="pointer" onClick={() => window.open("https://twitter.com/ncaruso17")}/>
        <FacebookIcon cursor="pointer" onClick={() => window.open("https://www.facebook.com/nicolas.caruso.3304")}/>
        <LinkedInIcon cursor="pointer" onClick={() => window.open("https://www.linkedin.com/in/nicolascaruso/")}/>
      </div>
      {/* <p> &copy; 2022 pedrotech.com</p> */}
    </div>
  );
}

export default Footer;
