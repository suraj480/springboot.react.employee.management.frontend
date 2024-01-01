import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AddEmployeeWithNavigate from "./components/AddEmployee";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/listAllEmployees" element={<ListEmployeeComponent />} />
            <Route path="/addEmployees" element={<AddEmployeeWithNavigate/>} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
