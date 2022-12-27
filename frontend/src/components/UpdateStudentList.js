import { InputLabel, Typography, TextField, Box, Button } from '@mui/material'
import axios from 'axios'
import React, {useState} from 'react'
const labels = {mb: 1, mt:2, fontSize: '24px', fontWeight:'bold'}
const UpdateStudentList = () => {
    const [inputs, setInputs] = useState({
        Name: "",
        Age: "",
        Class: "",
        Section: "",
        RollNo: "",
        Mobile: "",
        Email: "",
        Address: "",
    })

    const handleChange = (e) => {
        setInputs(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
        console.log(e.target.name, "value", e.target.value)
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
    }


    const sendRequest = async() => {
        const res= await axios.post('http://localhost:5000/auth/student/add', {
            Name: inputs.Name,
            Age: inputs.Age,
            Class: inputs.Class,
            Section: inputs.Section,
            RollNo: inputs.RollNo,
            Mobile: inputs.Mobile,
            Email: inputs.Email,
            Address: inputs.Address,
        })
    
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box border={3} borderColor="white" borderRadius={5} boxShadow="10px 10px 20px #ccc" padding={3} margin={3} display='flex' flexDirection={"column"} width={"80%"}>
                <Typography fontWeight={'bold'} padding={2} color='grey' variant='h6'>Add new students</Typography>
                <InputLabel sx={labels}>Name</InputLabel>
                <TextField name="Name" onChange={handleChange} value={inputs.Name} margin='auto' variant='outlined'/>
                <InputLabel sx={labels}>Age</InputLabel>
                <TextField name="Age" onChange={handleChange} value={inputs.Age} margin='auto' variant='outlined'/>
                <InputLabel sx={labels}>Class</InputLabel>
                <TextField name="Class" onChange={handleChange} value={inputs.Class} margin='auto' variant='outlined'/>
                <InputLabel sx={labels}>Section</InputLabel>
                <TextField name="Section" onChange={handleChange} value={inputs.Section} margin='auto' variant='outlined'/>
                <InputLabel sx={labels}>RollNo</InputLabel>
                <TextField name="RollNo" onChange={handleChange} value={inputs.RollNo} margin='auto' variant='outlined'/>
                <InputLabel sx={labels}>Email</InputLabel>
                <TextField name="Email" onChange={handleChange} value={inputs.Email} margin='auto' variant='outlined'/>
                <InputLabel sx={labels}>Mobile</InputLabel>
                <TextField name="Mobile" onChange={handleChange} value={inputs.Mobile} margin='auto' variant='outlined'/>
                <InputLabel sx={labels}>Address</InputLabel>
                <TextField name="Address" onChange={handleChange} value={inputs.Address} margin='auto' variant='outlined'/>
                <Button type="submit" sx={{mt:2, borderRadius: 2}} variant="contain" >Submit </Button> 
            </Box>
        </form>
    </div>
  )
  }

export default UpdateStudentList