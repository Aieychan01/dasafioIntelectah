const { v4: uuidv4 } = require("uuid");
const patientsModel = require("../model/users");

// get patients
const findAllPatients = async (req, res) => {
  const patients = await patientsModel.findAllPatients();
  res.status(200).json(patients);
};

// get patient by id
const findPatientsById = async (req, res) => {
  const patients = await patientsModel.findPatientsById(req.params.id);
  res.status(200).json(patients);
};

// create new user
const createNewPatients = async (req, res) => {
  if (req.body.firstname !== "" || req.body.lastname !== "") {
    const patient = await patientsModel.createNewPatients(
      uuidv4(),
      req.body.firstname,
      req.body.lastname
    );
    return res.status(201).json({ message: "Patients successfully created " });
  } else {
    return res.status(400).json({
      message: "It is necessary the first and last name to do this action",
    });
  }
};

// update patient
const updatePatients = async (req, res) => {
  if (req.body.firstname !== "" || req.body.lastname !== "") {
    const patient = await patientsModel.updatePatients(
      req.params.id,
      req.body.firstname,
      req.body.lastname
    );
    res.status(200).json({ message: "Patients successfully update" });
  } else {
    return res.status(400).json({
      message: "It is necessary the first and last name to do this action",
    });
  }
};

// delete patient
const deletePatients = async (req, res) => {
  const patient = patientsModel.deletePatients(req.params.id);
  res.status(200).json({ message: "Patient successfully deleted" });
};

module.exports = {
  findAllPatients,
  findPatientsById,
  createNewPatients,
  updatePatients,
  deletePatients,
};
