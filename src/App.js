import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Convertor from './components/Convertor/Convertor';
import RateList from './components/RateList/RateList';


const App = props =>  {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        
      <div className="app-wrapper-content">
            
        <Route path="/convertor" render={() => <Convertor />} />
        <Route path="/ratelist" render={() => <RateList />} />
       

      </div>
      
    </div>
  );
}

export default App;