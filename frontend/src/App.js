import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
/* import Student from "./components/Student";
 */import Register from "./components/Register";
import { Routes, Route} from "react-router-dom"
import { useSelector } from "react-redux";
import AddStudentList from "./components/AddStudentList";
import ShowStudent from "./components/ShowStudents";
import EditStudentList from "./components/EditStudent";
function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn) //localstorage in browser and token and save check token in localStorage
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>  
          <Routes>
            <Route path = "/register" element = {<Register />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/student" element = {<ShowStudent/>} />
            <Route path = "/add" element = {<AddStudentList />} />
            <Route path = "/patch/:_id" element = {<EditStudentList />} />
          </Routes>
      </main>
    </React.Fragment>
  );
}
//props to update route  <Avatar createnew={true} />
// finone fetxh ad update api send params to cover
export default App;
