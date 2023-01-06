import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {AppBar, Toolbar, Box, Tabs, Typography, Button} from "@mui/material"
import {Link} from "react-router-dom"
import axios from "axios"
import {authActions} from "../store"
axios.defaults.withCredentials = true

const Header = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  const sendLogOutRequest = async () => {
    const res = await axios.post("http://localhost:5000/auth/logout", null, {
      withCredentials: true,
    })
    if (res.status === 200) {
      return res
    }
    return new Error("Unable to send logout request")
  }
  const handlelogout = () => {
    sendLogOutRequest().then(() => dispatch(authActions.logout()))
  }

  const [value, setValue] = useState()

  return (
    <div>
      <AppBar
        position="sticky"
        sx={{
          background:
            "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(70,80,252,1) 69%)",
        }}
      >
        <Toolbar>
          <Typography variant="h6">STUDENT</Typography>
          {isLoggedIn && (
            <Box display="flex" marginLeft="auto" sx={{marginRight: "auto"}}>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              ></Tabs>
            </Box>
          )}
          <Box display="flex" marginLeft="auto">
            {!isLoggedIn && (
              <>
                <Button
                  LinkComponent={Link}
                  to="/login"
                  variant="contained"
                  sx={{margin: 1, borderRadius: 11}}
                  color="warning"
                >
                  Login
                </Button>
                <Button
                  LinkComponent={Link}
                  to="/register"
                  variant="contained"
                  sx={{margin: 1, borderRadius: 11}}
                  color="warning"
                >
                  Register
                </Button>
              </>
            )}
            {isLoggedIn && (
              <Button
                onClick={handlelogout}
                LinkComponent={Link}
                to="/login"
                variant="contained"
                sx={{margin: 1, borderRadius: 11}}
                color="warning"
              >
                LogOut
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
