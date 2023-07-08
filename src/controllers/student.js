const { StudentInformation } = require("../models");

exports.getAllStudent = async (req, res, next) => {
  try {
    const students = await StudentInformation.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "หานักเรียนไม่เจอ 500" });
  }
};

exports.createStudent = async (req, res, next) => {
  try {
    const { name, age, university } = req.body;
    const result = await StudentInformation.create({
      name: name,
      age: age,
      university: university,
    });
    res.status(201).json({ message: "Success", result });
  } catch (error) {
    console.log("Not complete");
    next(error);
  }
};

exports.updateStudent = (req, res) => {
  const id = req.body.id;
  const university = req.body.university;
  StudentInformation.update({ university: university }, { where: { id: id } })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ message: "ไม่สามารถอัปเดตนักเรียนได้" });
    });
};

exports.getProductById = (req, res, next) => {
  const { id } = req.params;
  Product.findOne({
    attributes: ["name", "age", "university"],
    where: { id: id },
  })
    .then((rs) => {
      res.json(rs);
    })
    .catch(next);
};
