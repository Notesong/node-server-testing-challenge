const db = require("../data/config");

async function create(data) {
  const [id] = await db("projects").insert(data);
  return findById(id);
}

async function update(id, data) {
  return null;
}

function remove(id) {
  return null;
}

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects").where({ id }).first();
}

module.exports = {
  create,
  update,
  remove,
  find,
  findById,
};
