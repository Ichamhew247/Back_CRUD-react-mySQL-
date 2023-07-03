const express = require("express");
const student = require("../controllers/student");
const router = express.Router();

router.get("/student", student.getAllStudent);
router.post("/createstudent", student.createStudent);
module.exports = router;
