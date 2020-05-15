const express = require("express");
const cors = require("cors");

const projectRouter = require("./projects/projects-router");

const server = express();
port = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());

server.use("/projects", projectRouter);

server.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Projects API",
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
    console.log(`Running on http://localhost:${port}`);
  });
}

module.exports = server;
