const express = require("express");

const router = express.Router();
const StudentModel = require("../model/Model");

router.get("/getDetails", async (req, res) => {
  try {
    const data = await StudentModel.find();
    res.json(data);
  } catch (error) {
    res.status(401).json(error)
  }
});

router.get("/studentList", async (req, res) => {
  try {
    const list = {
      results: ["Rajesh", "Ramesh", "Sayali", "Sanjana"],
    };
    res.json(list);
  } catch (error) {
    res.status(401).json({message:error})
  }
});

router.post("/add", async (req, res) => {
  const reqobj = req.body
  console.log(reqobj)
  const dataWillBe = new StudentModel(reqobj);
  try {
    const data = await dataWillBe.save();
    const result = { result: "success" };
    res.json(result);
  } catch (error) {
    
    res.status(401).json(error)

  }
});

module.exports = router;
