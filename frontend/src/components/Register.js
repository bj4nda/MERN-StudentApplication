import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FormControlLabel, Typography } from '@mui/material';
import { Checkbox } from '@mui/material'; 
import { Grid, Container, Paper, TextField, Button, Avatar, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Register = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
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
            name: inputs.name,
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
            history("/login")
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
            <Grid container direction="column" spacing={4}>
            <Grid item> 
                <TextField name = "text" type="text" onChange={handleChange} value={inputs.name} fullWidth label="Name" placeholder="Name" variant="outlined" />
                </Grid>
                <Grid item >
                <TextField name = "email" type="email" onChange={handleChange} value={inputs.email} fullWidth label="Email Address" placeholder="Email Address" variant="outlined" />
                </Grid>
                <Grid item >
                <TextField name="password" onChange={handleChange} type="password" value={inputs.password} fullWidth label="Password" placeholder="Email Address" variant="outlined" />
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
                    <Button onClick={handleChange} fullWidth variant="contained"  type="submit" color="primary">Sign In</Button>
                </Grid>
                <Grid item>
                    <Typography> 
                        <Link href="#"  >
                            Forgot password? 
                        </Link>
                    </Typography>
                    <Typography>  Don't have an account?
                        <Link href="#"  >
                        Sign up
                        </Link>
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