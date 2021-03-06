const express = require("express");
const cors = require("cors");
const projectsRouter = require("./projects/projects-router");

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());

server.use("/projects", projectsRouter);
server.get("/", (req, res) => {
  res.json({
    message: "Welcome to our Projects API",
  });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

if (!module.parent) {
  server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
  });
}

module.exports = server;
