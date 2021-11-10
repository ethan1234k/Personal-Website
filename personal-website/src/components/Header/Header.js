import React, { useEffect, useState } from "react";
import "./Header.css";
import WebFont from "webfontloader";
import { FaBars, FaTimes } from "react-icons/fa";
import { useHistory } from "react-router";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  let history = useHistory()

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Open_Sans"],
      },
    });
  }, []);

  return (
    <div className="headerContainer">
      <div className="headerLeftLogoContainer">
        <p>Ethan Kam</p>
      </div>
      <div className="headerMenuIcon" onClick={() => handleClick()}>
        {click ? <FaTimes color={"white"}/> : <FaBars color={"white"}/>}
      </div>
      <div className={click ? 'headerRightTabsContainer active' : 'headerRightTabsContainer'}>
        <p onClick={() => {history.push('/'); window.scrollTo(0, 0)}}>Home</p>
        <p onClick={() => {history.push('/experience'); window.scrollTo(0, 0)}}>Experiences</p>
        <p onClick={() => {history.push('/education'); window.scrollTo(0, 0)}}>Education</p>
        {/* <p onClick={() => {history.push('/blog'); window.scrollTo(0, 0)}}>Blog</p> */}
      </div>
    </div>
  );
};

export default Header;
