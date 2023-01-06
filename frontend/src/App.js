import React from "react"
import Header from "./components/Header"
import Login from "./components/Login"
import Register from "./components/Register"
import {Routes, Route} from "react-router-dom"
import {useSelector} from "react-redux"
import AddStudentList from "./components/AddStudentList"
import ShowStudent from "./components/ShowStudents"
import EditStudentList from "./components/EditStudent"
import AddUser from "./components/AddUser"
function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/register" element={<Register />} />
          <>
            <Route path="/login" element={<Login />} />
            {isLoggedIn && (
              <>
                {" "}
                <Route path="/student" element={<ShowStudent />} />
                <Route path="/add" element={<AddStudentList />} />
                <Route path="/patch/:_id" element={<EditStudentList />} />
                <Route path="/AddUser/:id" element={<AddUser />} />{" "}
              </>
            )}
          </>
        </Routes>
      </main>
    </React.Fragment>
  )
}

export default App
