const express = require("express");
const router = express.Router();

const AppointmentController = require("../controllers/appointment");

router.get("", AppointmentController.getAllAppointments);

router.get("/:id", AppointmentController.getAppointmentByID);

router.post("", AppointmentController.createAppointment);

router.patch("/:id", AppointmentController.updateAppointment);

router.delete("/:id", AppointmentController.deleteAppointmentById);

module.exports = router;
