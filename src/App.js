// Import styling pages
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom components
import Navbar from './Components/Navbar/index.js';
import Main from './Components/Main Page/index.js';
import LoginForm from './Components/login.js'

// Import components from React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="bg-image">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/womens" element={<Main />} />
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </Router>
      </div >
    </div>
  );
}

export default App;
