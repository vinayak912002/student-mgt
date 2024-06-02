import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { Button,TextField  } from '@material-ui/core';
import UseStyles from '../../styles.js';
import axios from 'axios';
//the empty tag is there so that the condtion of jsx elements having only one parent element can be met
export default function CreateStud() {

    const classes= UseStyles(); 

    const [student, setStudent] = useState({

        studentName : '',
        regNo : '',
        section : ''
        
    });

    const createStudent = () => {
        axios.post('http://localhost:5000/students', student).then(() =>{
            window.location.reload(false);
        })
    };
    return (
        <>
        <h2>Create Student</h2>
        <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
        >
            <TextField id="filled-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event)=>{
                setStudent({...student,studentName: event.target.value})
            }}/>
            <TextField id="filled-basic" label="Registration number" variant="outlined" value={student.regNo} onChange={(event)=>{
                setStudent({...student,regNo: event.target.value})
            }}/>
            <TextField id="filled-basic" label="section" variant="outlined" value={student.section} onChange={(event)=>{
                setStudent({...student,section: event.target.value})
            }}/>
            <Button variant="contained"  color = "primary" onClick={createStudent}>
                Create
            </Button>
        </Box>
        </>
  );
}