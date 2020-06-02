const express = require("express");
const Projects = require("./projects-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await Projects.find());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const project = await Projects.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const project = await Projects.create(req.body);
    res.json(201).json(project);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
