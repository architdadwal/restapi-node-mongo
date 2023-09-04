const express = require("express");
const router = express.Router();
const Model = require("../model/model");
module.exports = router;

// writing end points

//post method

router.post("/post", (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//GET all method
router.get("/getALL", (req, res) => {
  res.send("Get all api");
});

//get by ID method

router.get("/getOne/:id", (req, res) => {
  res.send("Get by ID Api");
});

//update by ID method
router.patch("/update/:id", (req, res) => {
  res.send("update by ID api");
});

//Delete by id method

router.delete("/delete/:id", (req, res) => {
  res.send(req.params.id);
});
