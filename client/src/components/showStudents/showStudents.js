import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UseStyles from '../../styles.js';
import axios from 'axios';
import { Button } from '@mui/material';


export default function ShowStudents() {
  const classes = UseStyles();

  const [studentsList, setStudentsList] = React.useState([]);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`).then(()=>{
      window.location.reload(false);
    })
  }

  React.useEffect(() => {
    axios.get('http://localhost:5000/students').then((allStudents) => {
      setStudentsList(allStudents.data);
    })
  }, [])//,[] is just syntax of react hooks
  return (
    <>
    <h2>All Students</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Reg Number</TableCell>
            <TableCell align='left'>Name</TableCell>
            <TableCell >Section</TableCell>
            <TableCell >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left'>{student.regNo}</TableCell>
              <TableCell align='left'>{student.studentName}</TableCell>
              <TableCell align='left'>{student.section}</TableCell>
              <TableCell >
                <Button variant="contained" onClick={() => deleteStudent(student._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
