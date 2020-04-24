import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import RateListContainer from './components/RateList/RateListContainer';
import ConvertorContainer from './components/Convertor/ConvertorContainer';


const App = props =>  {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        
      <div className="app-wrapper-content">
            
        <Route path="/convertor" render={() => <ConvertorContainer />} />
        <Route path="/ratelist" render={() => <RateListContainer />} />
       

      </div>
      
    </div>
  );
}

export default App;