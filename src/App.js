import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import {useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState({
    bg: "light",
    color: "black",
  });

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(()=>{
      setAlert(null);
    },1500)
 
  }

  const changeTheme = (theme)=>{
    setTheme(theme);
    if(theme.bg ==="light"){
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      
      showAlert("Light mode enabled!", "success");
    }else{
      document.body.style.backgroundColor = "#0d5a64";
      document.body.style.color = "white";
      showAlert("Dark mode enabled!", "success");
    }
  }
  return (
    <Router>
      <Navbar title="TextUtils" theme={theme} setTheme={changeTheme}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
        <Route path="/about" element={<About />} />

        <Route path="/" element={<TextForm heading="Enter the Text to analyze" theme={theme} />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;