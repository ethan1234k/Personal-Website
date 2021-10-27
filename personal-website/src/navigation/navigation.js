import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from '../screens/HomeScreen/HomeScreen';

const navigation = () => {
  return (
    <Router>
      <Route exact path="/">
        <HomeScreen />
      </Route>
    </Router>
  );
};

export default navigation;
