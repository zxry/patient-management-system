const express = require("express");

const patientsRouter = require("./patients/patients.router");
const doctorsRouter = require("./doctors/doctors.router");

const api = express.Router();

// Routes now: http://localhost:8000/v1/patients and http://localhost:8000/v1/doctors
api.use("/patients", patientsRouter);
api.use("/doctors", doctorsRouter);

module.exports = api;
