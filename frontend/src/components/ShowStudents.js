import React,{useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



/* name: "",
        age: "",
        Class: "",
        section: "",
        rollnumber: "",
        mobile: "",
        email: "",
        address: "",; */

export default function ShowStudent() {

  const [studentList, setStudentList] = useState([]);
 /*  const [newStudent, setNewStudent] = useState([]); */

  const getStudentList = async () => {
    const res = await axios.get('http://localhost:5000/all');
    setStudentList(res.data.students)
}
/*   const deleteStudent = (email) => {
    axios.delete(`http://localhost:5000/delete`).then(() => {
      console('deleteStudent')
  })
}
  const editStudent = async (id) => {
    const res = await axios.patch(`http://localhost:5000/patch`);
    setNewStudent(res.data.student, id);
}
 */
  useEffect(() => {
    getStudentList();
  },[]);

  console.log('allStudents')
  return (
    <TableContainer component={Paper} style={{ paddingTop: 20, paddingRight: 10  }}>
      <Box display="flex" justifyContent="flex-end" padding={2}>
      <Button variant="outlined" color="primary" /* onClick={} */>
                Add Student
      </Button>
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Roll-No</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Mobile</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
              
              <TableCell align="right">{student.age}</TableCell>
              <TableCell align="right">{student.Class}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
              <TableCell align="right">{student.rollnumber}</TableCell>
              <TableCell align="right">{student.email}</TableCell>
              <TableCell align="right">{student.mobile}</TableCell>
              <TableCell align="right">{student.address}</TableCell>
              <TableCell align="right"> 
              <IconButton aria-label="edit">
                <EditIcon color="primary" />
              </IconButton>
              </TableCell>
              <TableCell align="right"> 
              <IconButton aria-label="delete"> 
                <DeleteIcon fontSize="small"/> 
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
