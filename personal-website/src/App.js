import React, { useEffect } from 'react';
import './App.css';
import WebFont from "webfontloader";
import HomeScreen from './screens/NewDesign/HomeScreen';

const App = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Space Mono"],
      },
    });
  }, []);

  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
