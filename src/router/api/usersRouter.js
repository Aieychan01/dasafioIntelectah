const express = require("express");
const patientsRouter = express.Router();
const patientsController = require("../../controllers/usersController");

patientsRouter.get("/patients", patientsController.findAllPatients);
patientsRouter.get("/patients/:id", patientsController.findPatientsById);
patientsRouter.post("/patients", patientsController.createNewPatients);
patientsRouter.put("/patients/:id", patientsController.updatePatients);
patientsRouter.delete("/patients/:id", patientsController.deletePatients);

module.exports = patientsRouter;
