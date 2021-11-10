import React from "react";
import "./ResumeListing.css";

const ResumeListing = (props) => {
  return (
    <div className="resumeListingContainer">
      <img src={props.image} className="resumeListingImage"/>
      <div className="resumeListingTextContainer">
        <p1>{props.title}</p1>
        <p2>{props.time}</p2>
        <p3>{props.description}</p3>
      </div>
    </div>
  );
};

export default ResumeListing;
