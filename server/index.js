import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import studentRoutes from './routes/student.js';
//for enabling the above ES6 importing we have modified the package.json file

//initializing the express package
const app = express();

app.use(cors());

app.use(bodyParser.json({limit : "20mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "20mb", extended : true}));
app.use('/students', studentRoutes);//backend api endpoint

const CONNECTION_URL = 'mongodb+srv://vinayak912002:12345@cluster0.dwpgzvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () =>
    console.log(`Connection is estabilished on port: ${PORT}`)
)).catch((err) => console.log(err.message));

//in mongoose we change the options using the .set function
//in this case we are going to set useFindAndModify to false since it is depricated
//mongoose.set('useFindAndModify', false);
//p.s. in the tutorial it was still there but now has been removed