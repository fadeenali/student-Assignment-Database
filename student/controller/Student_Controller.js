const express = require("express");
const router = express.Router();
const StudentModel = require("../model/Model");

// routes

router.get("/getDetails", async (req, res) => {
  try {
    const data = await StudentModel.find();
    res.json(data);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.get("/studentList", async (req, res) => {
  try {
    const list = {
      results: ["Rajesh", "Ramesh", "Sayali", "Sanjana"],
    };
    res.json(list);
  } catch (error) {
    res.status(401).json({ message: error });
  }
});

router.post("/add", async (req, res) => {
  const reqobj = req.body;
  console.log(reqobj);

  try {
    const addData = new StudentModel(reqobj);
    console.log(addData);
    addData.save();
    res.status(200).send({ message: "added successfull" });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
