import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@mui/material/styles';
import Table from '@mui/material';
import TableBody from '@mui/material';
import TableCell from '@mui/material';
import TableContainer from '@mui/material';
import TableHead from '@mui/material';
import TableRow from '@mui/material';
import Paper from '@mui/material';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StudentList = () => {
  // State to store the list of students
  const [students, setStudents] = useState([]);

  // Fetch the list of students from the database when the component mounts
  useEffect(() => {
    const fetchStudents = async () => {
      const result = await axios.get('http://localhost:5000/auth/student');
      setStudents(result.data);
    };
    fetchStudents();
  }, []);

  // Event handler for the edit button
  const handleEdit = (id) => {
    // Open a modal or a separate form page to edit the student's details
  };

  // Event handler for the delete button
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      // Make a DELETE request to the server to delete the student
      axios.delete(`/api/students/${id}`).then(() => {
        // Remove the student from the list
        setStudents(students.filter((student) => student._id !== id));
      });
    }
  };

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="student list">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student._id}>
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
              <TableCell align="right">{student.age}</TableCell>
              <TableCell align="right">
                <button onClick={() => handleEdit(student._id)}>Edit</button>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;
