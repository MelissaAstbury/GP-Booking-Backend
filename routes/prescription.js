const express = require("express");
const router = express.Router();

const PrescriptionController = require("../controllers/prescription");

router.get("", PrescriptionController.getAllPrescriptions);

router.post("", PrescriptionController.createPrescription);

module.exports = router;
