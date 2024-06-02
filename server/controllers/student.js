import Student from "../models/student.js";

export const getStudents = async (req, res)=>{
    try {
        const allStudents = await Student.find();

        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({message : error.message})
    }
};

export const createStudent = async (req, res)=>{
    const {studentName, regNo, section} = req.body;

    try {
        const newStudent = await Student.create({
            studentName:studentName,
            regNo:regNo,
            section:section
        });
        res.status(201).json({newStudent});
    } catch (error) {
        res.status(409).json({message : error.message});
    }

};

export const deleteStudent =  async (req, res)=>{
   
    const id = req.params.id;

    try {
        await Student.findByIdAndDelete(id).exec();
        res.send("student removed");
    } catch (error) {
        console.log(error);
    }

};