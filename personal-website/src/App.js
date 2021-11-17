import React, {useEffect} from 'react';
import './App.css';
import WebFont from "webfontloader";
import Navigation from './navigation/navigation';

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
        families: ["Montserrat"],
      },
    });
  }, []);

  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
