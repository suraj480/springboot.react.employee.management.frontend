import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AddEmployeeWithNavigate from "./components/AddEmployee";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ListEmployeeWithNavigate from "./components/ListEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/listAllEmployees" element={<ListEmployeeWithNavigate />} />
            <Route path="/addEmployees" element={<AddEmployeeWithNavigate/>} />
            <Route path="/updateEmployees/:id"  element={<UpdateEmployeeComponent/>} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
