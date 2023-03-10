import React, {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { Typography} from "@mui/material"
import {
  Grid,
  Container,
  Paper,
  TextField,
  Button,
  Avatar,
  Link,
} from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"

const Register = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = e => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  
  const sendRequest = async () => {
    const res = await axios
      .post(`http://localhost:5000/auth/register`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch(err => {
        console.log(err)
      })
    const data = await res.data
    return data
  }
  const handleSubmit = e => {
    e.preventDefault()
    sendRequest().then(() => navigate("/login"))
  }

  const avatarStyle = {backgroundColor: "blue"}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Container maxWidth="sm">
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            style={{minHeight: "100vh"}}
          >
            <Paper elevation={1} sx={{padding: 5}}>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
                <h2>Sign In</h2>
              </Grid>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  {isLoggedIn && (
                    <TextField
                      name="text"
                      type="text"
                      onChange={handleChange}
                      value={inputs.name}
                      fullWidth
                      placeholder="Name"
                      variant="outlined"
                    />
                  )}
                </Grid>
                <Grid item>
                  <TextField
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={inputs.email}
                    fullWidth
                    placeholder="Email Address"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={inputs.password}
                    fullWidth
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                 
                </Grid>
                <Grid item>
                  <Button
                    onClick={handleChange}
                    fullWidth
                    variant="contained"
                    type="submit"
                    color="primary"
                  >
                    Sign In
                  </Button>
                </Grid>
                <Grid item>
                 
                </Grid>
                <Grid item>
                  <Typography>
                    <Link href="#">Forgot password?</Link>
                  </Typography>
                  <Typography>
                    {" "}
                    Don't have an account?
                    <Link href="#">Sign up</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Container>
      </form>
    </div>
  )
}

export default Register
