import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material'; 
import { Grid, Container, Paper, TextField, Button, Avatar,  } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setInputs(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
        console.log(e.target.name, "value", e.target.value)
    }

    const sendRequest = async() => {
        const res = await axios.post('http://localhost:5000/auth/login', {
            email: inputs.email,
            password: inputs.password
        }).catch((err) => {
            console.log(err)
            })
        const data = await res.data;
        return data;
    }
    const handleSubmit = (e) => {    
        e.preventDefault();
        console.log(inputs)
        //send http 
        sendRequest().then(() => {
            navigate("/student")
        })
    }
    const avatarStyle = {backgroundColor: 'blue'}
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <Container maxWidth="sm">
            <Grid container spacing={2} direction="column" justifyContent="center" style={{minHeight: "100vh"}}>
            <Paper elevation={1} sx={{padding: 5}}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign In</h2>
                </Grid>
            <Grid container direction="column" spacing={4} sx={{padding: 5}}>
                
                <Grid item >
                <TextField name = "email" type="email" onChange={handleChange} value={inputs.email} fullWidth  placeholder="Email Address" variant="outlined" />
                </Grid>
                <Grid item >
                <TextField name="password" onChange={handleChange} type="password" value={inputs.password} fullWidth placeholder="Password" variant="outlined" />
                </Grid>
                <Grid item>
                <FormControlLabel 
                    control ={
                        <Checkbox
                            name="checked"
                            color='primary'
                    />}
                    label="Remember me"
                    />
                </Grid>
                <Grid item>
                    <Button onClick={handleChange} fullWidth variant="contained"  type="submit" color="primary">Log In</Button>
                </Grid>
                <Grid item>
                    
                    
                </Grid>
            </Grid>
            </Paper>
            </Grid>
            
            </Container>
            </form>
        </div>
    )
}

export default Login
