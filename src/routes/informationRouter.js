const express = require("express");
const student = require("../controllers/student");
const router = express.Router();

router.get("/student", student.getAllStudent);
router.post("/createstudent", student.createStudent);
router.put("/updatestudent", student.updateStudent);
router.delete("/deletestudent/:id", student.deleteStudent);
module.exports = router;
