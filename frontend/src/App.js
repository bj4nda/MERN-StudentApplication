import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Student from "./components/Student";
import Register from "./components/Register";
import AddStudent from "./components/AddStudent";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Router>
          <Routes>
            <Route path = "/register" element = {<Register />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/student" element = {<Student />} />
            <Route path = "/add" element = {<AddStudent />} />
          </Routes>
        </Router>

      </main>
    </React.Fragment>
  );
}

export default App;
