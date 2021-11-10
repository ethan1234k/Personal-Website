import React from "react";
import "./EducationScreen.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ResumeListing from "../../components/ResumeListing/ResumeListing";
import WoodinvilleHSLogo from './WoodinvilleHS.jpg';
import UWImage from './UW.jpg'

const EducationScreen = () => {
  const educationArray = [
    {
      id: 0,
      image: UWImage,
      title: "University of Washington",
      time: "September 2021 to Present",
      description:
        "• Computer Science Direct Admit \n• SEAL Research Lab - ECoS Team \n• Currently Taking CSE142, INFO180, ESS102",
    },
    {
      id: 1,
      image: WoodinvilleHSLogo,
      title: "Woodinville High School",
      time: "Sept 2017 to June 2021",
      description:
        "• 3.98 Cumulative Unweighted GPA \n• STEM Focus \n• DECA, National Honor Society \n• 3 yrs. Varsity Football, 2 yrs. Varsity Track & Field",
    },
  ];

  return (
    <div>
      <div className="educationScreenBackgroundImage">
        <Header />
      </div>
      <div className="educationScreenEducationListings">
        <p>Education</p>
        {educationArray.map((education) => (
          <ResumeListing
            key={education.id}
            id={education.id}
            image={education.image}
            title={education.title}
            time={education.time}
            description={education.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default EducationScreen;
