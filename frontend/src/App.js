import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Student from "./components/Student";
import Register from "./components/Register";
import { Routes, Route} from "react-router-dom"
import { useSelector } from "react-redux";
import UpdateStudentList from "./components/UpdateStudentList";
function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn)
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>  
          <Routes>
            <Route path = "/register" element = {<Register />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/student/add" element = {<UpdateStudentList />} />
            <Route path = "/student" element = {<Student/>} />
          </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
