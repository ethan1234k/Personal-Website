import React, {useEffect} from 'react';
import './App.css';
import WebFont from "webfontloader";
import Navigation from './navigation/navigation';
import HomeScreen from './screens/NewDesign/HomeScreen';

//npm install webfontloader
//npm install react-router-dom
//npm install react-icons
//npm install -g @aws-amplify/cli

// ACCIDENT!!!
// Build Command:  npm run-script start

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
      {/* <Navigation /> */}
      <HomeScreen />
    </div>
  );
}

export default App;
