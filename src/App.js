
import React, { useState } from 'react';
import './App.css';
import Alert from './My Components/Alert';
// import About from './My Components/About';
import Navbar from "./My Components/Navbar";
import TextForm from "./My Components/TextForm";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


// let name = "Hamza";
function App() {

  const showalert=(message, type)=>
  {
    setAlert({
      msg: message,
      type: type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toogleMode= ()=>{
    
    if(mode=== 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor= '#121a3c';
      showalert("Dark Mode Enabbled", 'success');
      // setInterval(() => {
      //   document.title= "Dark mode"
      // }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showalert("Light Mode Enabbled", 'success');
      // setInterval(() => {
      //   document.title= "Light mode"
      // }, 1000);
    }
  }

  const toogleGreenMode= ()=>{
    
    if(mode=== 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor= '#236c23';
      showalert("Dark Mode Enabbled", 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showalert("Light Mode Enabbled", 'success');

    }
  }

  const [mode, setMode]=useState('light');

  const [alert, setAlert]=useState(null);

  // const [green, setGreen] = useState('light')


  
  return (
    <>
    {/* <Router> */}
      <Navbar title='Navbar' about='About US' mode={mode} toogleMode={toogleMode} toogleGreenMode={toogleGreenMode}/>
      
      <Alert alert={alert}/>

      <div className="container my-3">
        <TextForm showalert={showalert} heading="Please type here" mode={mode}/>
        {/* <About/> */}

        {/* <Routes>

        <Route path="/" element={<TextForm showalert={showalert} heading="Please type here" mode={mode}/>} />

        <Route path="/About" element={<About/>} />

      </Routes> */}

      </div>
      {/* </Router> */}

    </>
  );
  
}

export default App;
