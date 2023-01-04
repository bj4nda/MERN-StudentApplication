import { InputLabel, Typography, TextField, Box, Button } from '@mui/material'
import {  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
const labels = {mb: 1, mt:2, fontSize: '24px', fontWeight:'bold'}

const EditStudentList = () => {
    const navigate = useNavigate();
    let {_id} = useParams();
   
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
            ...prev, [e.target.name]: e.target.value,
        }))
    }
    
    
    
    const preFilledForDataStudent = async() => {
        const res = await axios.get(`http://localhost:5000/${_id}`) 
        setInputs(res.data.student)
    }

    useEffect(() => {
        preFilledForDataStudent();
        }, [_id])

       
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs)
        await axios.patch(`http://localhost:5000/patch/${_id}`, {
          name: inputs.name,
          age: inputs.age,
          Class: inputs.Class,
          section: inputs.section,
          rollnumber: inputs.rollnumber,
          mobile: inputs.mobile,
          email: inputs.email,
          address: inputs.address,
      })
      navigate("/student")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box border={3} borderColor="white" borderRadius={5} boxShadow="10px 10px 20px #ccc" padding={5} margin={5} display='flex' justifyContent="center" flexDirection={"column"} width={"100%"}>
                <Typography fontWeight={'bold'} color='grey' variant='h4'>Edit student </Typography>
                <InputLabel sx={labels}>name</InputLabel>
                <TextField  type="text" name="name" onChange={handleChange} value={inputs.name} margin='auto' variant='outlined'/>
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
                <Box display="flex" justifyContent="center" padding={3}>
                <Button type="submit" sx={{mt:2, borderRadius: 2}} variant="contained" color="primary" >Submit </Button> 
                </Box>
            </Box>
        </form>
    </div>
  )
  }

export default EditStudentList