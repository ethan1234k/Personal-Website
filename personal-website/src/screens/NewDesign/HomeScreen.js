import React, { useEffect, useState } from "react";
import "./HomeScreen.css";
import Resume from './CS Resume.pdf'
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  IoIosPaper
} from "react-icons/io";

const HomeScreen = () => {
  const [displayMessage, setDisplayMessage] = useState("Surround Yourself With People Who Make You Better");
  let messageIndex = 0;
  const messages = [
    "Skepticism Is Always a Precursor To Success",
    "Success Starts With Yourself",
    "Be Proactive, Not Reactive",
    "Great Leaders Don't Push Back Against Change",
    "Surround Yourself With People Who Make You Better",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      changeDisplayMessage()
    }, 4250);
    return () => clearInterval(interval);
  }, []);

  const changeDisplayMessage = () => {
      if (messageIndex == messages.length - 1) {
        messageIndex = 0;
      } else {
        messageIndex++;
      }
      setDisplayMessage(messages[messageIndex]);
  };

  function handleIconClick(iconName) {
    if (iconName == "LinkedIn") {
      window.open("https://linkedin.com/in/ethan-kam", "_blank");
    } else if (iconName == "Github") {
      window.open("https://github.com/ethan1234k", "_blank");
    } else if (iconName == "Twitter") {
      window.open("https://twitter.com/ethank_6", "_blank");
    } else {
      window.open("mailto:ethanwoodhill@gmail.com", "_blank");
    }
  }
  
  return (
    <div className="newDesignHomeContainer">
      <div className="socialIconsColumn">
        <AiFillLinkedin
          className="socialIcon"
          onClick={() => handleIconClick("LinkedIn")}
          color={"white"}
        />
        <AiOutlineGithub
          className="socialIcon"
          onClick={() => handleIconClick("Github")}
          color={"white"}
        />
        <a href={Resume} target="_blank" className="resumeContainer">
          <IoIosPaper
            className="socialIcon"
            color={"white"}
          />
        </a>
        <AiOutlineTwitter
          className="socialIcon"
          onClick={() => handleIconClick("Twitter")}
          color={"white"}
        />
        <AiOutlineMail
          className="socialIcon"
          onClick={() => handleIconClick("Email")}
          color={"white"}
        />
      </div>
      <div className="motivationalMessageContainer">
        <h1>{displayMessage}</h1>
      </div>
      <div className="aboutMeContainer">
        <h1>Hi, I'm Ethan Kam</h1>
        <p>I'm a sophomore studying CS at the University of Washington</p>
        <p>I'm currently learning about blockchain and web3, and interested in everything startups.</p>

        <hr style={{marginTop: '50px'}}/>
        <p>What I'm Doing:</p>
        <hr style={{marginBottom: '50px'}}/>

        <p2>Software Engineer Intern - Smartsheet</p2>
        <p3>Joining the In-App User Education team at Smartsheet this summer.</p3>

        <hr style={{marginTop: '50px'}}/>
        <p>What I've Done:</p>
        <hr style={{marginBottom: '50px'}}/>


        <p2>Co-Founded Spogo</p2>
        <p3>Generated Pre-Seed investor interest.</p3>
        <p3>Top 10% of all applicants in Y-Combinator's W22 batch.</p3>
        <p3>Mentored by two successful entrepenuers (one recently sold his company to Microsoft).</p3>

        <p2>Created an NFT Marketplace.</p2>
        <p3>Used Solidity smart contracts to let users list and sell NFT's.</p3>
        <p3>Enabled user minting of ERC721 compliant NFT's using smart contracts and IPFS storage.</p3>
        <p3>Built on Ethereum, using Metamask for authentication.</p3>

        <p2>Coded my own Blog</p2>
        <p3>Used AWS Amplify and File Storage to store blog content.</p3>
        <p3>Developed queries in GraphQL to only fetch necessary info to display to the user.</p3>
        <p3>Utilized InnerHTML to create dynamic blogs with varying formats and images.</p3>
      </div>
    </div>
  );
};

export default HomeScreen;
