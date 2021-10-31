import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EducationScreen from "../screens/EducationScreen/EducationScreen";
import ExperienceScreen from "../screens/ExperienceScreen/ExperienceScreen";
import BlogScreen from "../screens/BlogScreen/BlogScreen";

import HomeScreen from '../screens/HomeScreen/HomeScreen';

const navigation = () => {
  return (
    <Router>
      <Route exact path="/">
        <HomeScreen />
      </Route>
      <Route exact path="/experience">
        <ExperienceScreen />
      </Route>
      <Route exact path="/education">
        <EducationScreen />
      </Route>
      <Route exact path="/blog">
        <BlogScreen />
      </Route>
    </Router>
  );
};

export default navigation;
