import './App.css';
// import { AuthenticationPage,DashBoard } from './Containers/Exports.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Login } from './Components/Exports';
// import AppContainer from './AppContainer';
import Login__page from './Containers/Login_page/Login_page.js';
// import Sign_up__page from './Containers/Sign_up_page/Sign_up_page.js';
import { Sign_upPage } from './Containers/Exports';
import { LoginPage } from './Containers/Exports';
require('dotenv').config();

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Sign_upPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
