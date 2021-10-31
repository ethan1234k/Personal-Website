import React, { useState } from 'react'
import './ExperienceScreen.css'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const ExperienceScreen = () => {
    const experiencesArray = useState(["Hello", "Goodbye", "Good Morning"]);
    console.log(experiencesArray)

    return (
        <div>
            <div className="blogScreenBackgroundImage">
                <Header />
                <p style={{color: 'white'}}>Experiences</p>
            </div>
                <div className="experienceScreenContainer">
                    {experiencesArray.map((experience) => (
                        <h1>{experience}</h1>
                    ))}
                </div>
            <Footer />
        </div>
    )
}

export default ExperienceScreen
