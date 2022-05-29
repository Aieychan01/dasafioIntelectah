const poll = require("./poll");

async function findAllPatients() {
  const query = `SELECT * FROM patients`;
  const result = await poll.query(query);

  let patients = [];

  if (result) {
    patients = result;
  }

  return patients;
}

async function findPatientsById(id) {
  const query = `SELECT * FROM patients WHERE id = "${id}"`;
  const result = await poll.query(query);

  let patient = [];

  if (result) {
    patient = result;
  }

  return patient;
}
s
async function createNewPatients(id, firstname, lastname) {
  const query = `INSERT INTO patients VALUES("${id}", "${firstname}", "${lastname}")`;
  const result = await poll.query(query);

  return result;
}

async function updatePatients(id, firstname, lastname) {
  const query = `UPDATE patients SET firstname = "${firstname}", lastname = "${lastname}" WHERE id = "${id}"`;
  const result = await poll.query(query);

  return result;
}

async function deletePatients(id) {
  const query = `DELETE FROM patients WHERE id = "${id}"`;
  const result = await poll.query(query);

  return result;
}

module.exports = {
  findAllPatients,
  findPatientsById,
  createNewPatients,
  updatePatients,
  deletePatients,
};
