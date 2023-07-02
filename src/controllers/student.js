const { StudentInformation } = require("../models");
exports.getAllStudent = (req, res, next) => {
  StudentInformation.findAll()
    .then((rs) => {
      res.json(rs);
    })
    .catch(next);
};

// const { studentInformation } = require("../models");

// exports.getAllStudents = async (req, res, next) => {
//   try {
//     const students = await studentInformation.findAll();
//     res.json(students);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
