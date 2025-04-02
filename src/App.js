// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
 import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React,{ useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";
 function App() {
  const [alert , SetAlert] = useState(null);  
  const showAlert = (message , type)=>{ 
    SetAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      SetAlert(null);
    }, 1500);
  }
  const [mode , SetMode] = useState('light');  
  const toggleMode = ()=>{
    if(mode === 'light'){
      SetMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is Enabled" , "success")
    }
    else{
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled" , "primary")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
      </div>
     </>
  );
}

export default App;