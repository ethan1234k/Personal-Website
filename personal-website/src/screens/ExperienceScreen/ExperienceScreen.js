import React, { useState } from "react";
import "./ExperienceScreen.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ResumeListing from "../../components/ResumeListing/ResumeListing";

const ExperienceScreen = () => {
  const experiencesArray = [
    {
      id: 0,
      title: "Spogo Founder",
      time: "May 2021 - August 2021",
      description:
        "• Developed shareable link-in-bio profile for athletes. \n• Conducted user interviews for validation and feedback, operated on a tight feedback loop. \n• Utilized React.js for frontend, designed UI for the landing page and auth flow for product. \n• Used Firebase Storage and Firestore for backend.",
    },
    {
      id: 1,
      title: "Coded Own Blog",
      time: "August 2021 - September 2021",
      description:
        "• AWS Amplify for backend: GraphQL and Dynamo for blog storage and query, File Storage for embedded images. \n• Inner HTML stored in Dynamo to give each blog different formats, layouts, images. \n• React.js for front end.",
    },
    {
      id: 2,
      title: "Pedalheads Bike Camp Instructor",
      time: "June 2021 - August 2021",
      description:
        "• Worked with kids (ages 4-12), teaching them how to ride a bike. \n• Communicated with parents on the child's progress, improvements and what to work on. \n• Worked with fellow instructors to create games and lesson plans for the day.",
    },
  ];

  console.log(experiencesArray);

  return (
    <div>
      <div className="blogScreenBackgroundImage">
        <Header />
        <p style={{ color: "white" }}>Experiences</p>
      </div>
      <div className="experienceScreenContainer">
        <div className="experienceScreenExperienceListings">
          {experiencesArray.map((experience) => (
            <ResumeListing
              key={experience.id}
              id={experience.id}
              title={experience.title}
              time={experience.time}
              description={experience.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExperienceScreen;
