import React, { Component } from 'react';
import './App.css';
import { useState,CSSProperties, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App()  {

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setLoading(true);
    
    setInterval(function() {
     setLoading(false)
   }, 3000);  
  }, []);
   
    return (
      <div className="App">      
    
     

      {loading ?  <MoonLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />   : 

      <img src="img/0.gif" alt="a"></img>
       }
 
      </div>
    );
  }
 

export default App;
