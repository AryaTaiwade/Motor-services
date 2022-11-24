import './App.css';
import Intro from "./MyComponents/Intro"
import Form from "./MyComponents/Form"
import Header from "./MyComponents/Header"
import Footer from "./MyComponents/Footer"
import About from './MyComponents/About';
import * as React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <>
   <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" render={()=>{
        return(
          <>
            <Intro/>
            <Form/>
          </>
        )
      }}/>
      <Route exact path="/about" render={()=>{
        return(
          <>
            <About/>
          </>
        )
      }}/>
     
    
    </Switch>
    <br />
    <Footer />
    </BrowserRouter>
  
  </>
  );
}

export default App;
