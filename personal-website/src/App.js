import React, {useEffect} from 'react';
import './App.css';
import WebFont from "webfontloader";
import Navigation from './navigation/navigation';

import Header from './components/Header/Header';

//npm install webfontloader
//npm install react-router-dom
//npm install react-icons

const App = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Lato", "Lora"],
      },
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigation />
    </div>
  );
}

export default App;
