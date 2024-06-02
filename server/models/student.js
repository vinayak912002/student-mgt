import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    studentName : String,
    regNo : String,
    section:{
        type:String,
        default:"A"
    },
});

const Student = mongoose.model('student', studentSchema);

export default Student;