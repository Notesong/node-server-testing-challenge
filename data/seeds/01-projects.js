exports.seed = async function (knex) {
  await knex("projects").truncate();
  await knex("projects").insert([
    { name: "science fair" },
    { name: "weather baloon" },
  ]);
};
