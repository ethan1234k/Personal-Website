import React from "react";
import "./Footer.css";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useHistory } from "react-router";

const Footer = () => {
  let history = useHistory();

  function handleIconClick(iconName) {
    if (iconName == "LinkedIn") {
      window.open("https://linkedin.com/in/ethan-kam", "_blank");
    } else if (iconName == "Github") {
      window.open("https://github.com/ethan1234k", "_blank");
    } else {
      window.open("https://instagram.com/ethank.6", "_blank");
    }
  }

  return (
    <div className="footerContainer">
      <div className="socialIconRow">
        <AiFillLinkedin
          size={55}
          className="socialIcon"
          onClick={() => handleIconClick("LinkedIn")}
        />
        <AiOutlineGithub
          size={55}
          className="socialIcon"
          onClick={() => handleIconClick("Github")}
        />
        <AiOutlineInstagram
          size={55}
          className="socialIcon"
          onClick={() => handleIconClick("Instagram")}
        />
      </div>
      <div className="websiteTabsRow">
        <p onClick={() => {history.push('/'); window.scrollTo(0, 0)}}>Home</p>
        <p onClick={() => {history.push('/experience'); window.scrollTo(0, 0)}}>Experience</p>
        <p onClick={() => {history.push('/education'); window.scrollTo(0, 0)}}>Education</p>
        <p onClick={() => {history.push('/blog'); window.scrollTo(0, 0)}}>Blog</p>
      </div>
    </div>
  );
};

export default Footer;
