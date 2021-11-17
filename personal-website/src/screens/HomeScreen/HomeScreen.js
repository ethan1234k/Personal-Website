import React from "react";
import "./HomeScreen.css";
import Header from "../../components/Header/Header";
import SeniorPhoto from "./SeniorPhoto.jpg";
import Footer from "../../components/Footer/Footer";

const HomeScreen = () => {
  const AwardsRow = (awardsArr) => {
    return ( 
    <div className="awardsRowContainer">
      <div className="awardsRowFirstAward">
        <p>SAT</p>
        <p>1550</p>
      </div>
      <div className="awardsRowSecondAward">
        <p>National Merit Scholarship Finalist (2021)</p>
      </div>
    </div>
    )
  };

  return (
    <div className="homeScreenContainer">
      <Header />
      <div className="homeScreenContentContainer">
        <div className="homeFeedAboutSection">
          <div className="homeFeedAboutLeftContent">
            <h1>Hey, I'm Ethan</h1>
            {/* <p>I'm 6'4 and extremely buff (just kidding).</p> */}
            <p>
              I go to the University of Washington, and am studying Computer
              Science. I am interested in entrepreneurship, everything sports, and 
              of course coding.
            </p>
            <p>
              Check out some of my experiences and education on this website, as
              well as links to my LinkedIn, Github, and Instagram.
            </p>
            <p>And, for fun, couple facts about me:</p>
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
      <div className="homeScreenAwardsScoresSection">
        <h1>Awards and Scores</h1>
        <AwardsRow />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
