import React, {useEffect} from 'react';
import './App.css';
import WebFont from "webfontloader";
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

  useEffect(() => {
    fetch('http://localhost:8080/')
    .then(async response => {
      const data = await response.json();
      console.log(data)
  })
  .catch(error => {
      console.log('There was an error!', error);
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
