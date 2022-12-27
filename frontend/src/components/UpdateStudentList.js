import { InputLabel, Typography, TextField, Box, Button } from '@mui/material'
import axios from 'axios'
import React, {useState} from 'react'
const labels = {mb: 1, mt:2, fontSize: '24px', fontWeight:'bold'}
const UpdateStudentList = () => {
    const [inputs, setInputs] = useState({
        name: "",
        age: "",
        Class: "",
        section: "",
        rollnumber: "",
        mobile: "",
        email: "",
        address: "",
    })

    const handleChange = (e) => {
        setInputs(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
        console.log(e.target.name, "value", e.target.value)
    }
    const sendRequest = async() => {
        const response = await axios.post('http://localhost:5000/auth/add', {
            name: inputs.name,
            age: inputs.age,
            Class: inputs.Class,
            section: inputs.section,
            rollnumber: inputs.rollnumber,
            mobile: inputs.mobile,
            email: inputs.email,
            address: inputs.address,
        }).catch((err) => console.log(err))

        const data = await response.data;
        return data
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
        sendRequest().then((data) => {
            console.log(data)
        })
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box border={3} borderColor="white" borderRadius={5} boxShadow="10px 10px 20px #ccc" padding={3} margin={3} display='flex' flexDirection={"column"} width={"80%"}>
                <Typography fontWeight={'bold'} padding={2} color='grey' variant='h6'>Add new students</Typography>
                <InputLabel sx={labels}>name</InputLabel>
                <TextField name="name" onChange={handleChange} value={inputs.name} margin='auto' variant='outlined'/>
                <InputLabel sx={labels}>age</InputLabel>
                <TextField name="age" onChange={handleChange} value={inputs.age} margin='auto' variant='outlined'/>
                <InputLabel sx={labels}>Class</InputLabel>
                <TextField name="Class" onChange={handleChange} value={inputs.Class} margin='auto' variant='outlined'/>
                <InputLabel sx={labels}>section</InputLabel>
                <TextField name="section" onChange={handleChange} value={inputs.section} margin='auto' variant='outlined'/>
                <InputLabel sx={labels}>rollnumber</InputLabel>
                <TextField name="rollnumber" onChange={handleChange} value={inputs.rollnumber} margin='auto' variant='outlined'/>
                <InputLabel sx={labels}>email</InputLabel>
                <TextField name="email" onChange={handleChange} value={inputs.email} margin='auto' variant='outlined'/>
                <InputLabel sx={labels}>mobile</InputLabel>
                <TextField name="mobile" onChange={handleChange} value={inputs.mobile} margin='auto' variant='outlined'/>
                <InputLabel sx={labels}>address</InputLabel>
                <TextField name="address" onChange={handleChange} value={inputs.address} margin='auto' variant='outlined'/>
                <Button type="submit" sx={{mt:2, borderRadius: 2}} variant="contain" >Submit </Button> 
            </Box>
        </form>
    </div>
  )
  }

export default UpdateStudentList