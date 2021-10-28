import React from "react";
import "./HomeScreen.css";
import Header from "../../components/Header/Header";
import SeniorPhoto from './SeniorPhoto.jpg';
import Footer from "../../components/Footer/Footer";

const HomeScreen = () => {
  return (
    <div className="homeScreenContainer">
      <Header />
      <div className="homeScreenContentContainer">
        <div className="homeFeedAboutSection">
          <div className="homeFeedAboutLeftContent">
            <h1>Hey, I'm Ethan</h1>
            <p>I'm 6'4 and extremely buff (just kidding).</p>
            <p>
              In seriousness, I'd say I'm a fairly average college freshman. I
              go to the University of Washington, and am studying Computer
              Science. And as you might have surmised from the title, I love
              food (then again who doesn't).
            </p>
            <p>A couple facts about me:</p>
            <p>
              * For the longest time, I was convinced my mom found and adopted
              me from a trash can.
            </p>
            <p>
              * I won my high school football team's Egg Toss Challenge all 3
              years (Olympic Sport!??).
            </p>
          </div>
          <div className="homeFeedAboutRightContent">
            <img src={SeniorPhoto} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
