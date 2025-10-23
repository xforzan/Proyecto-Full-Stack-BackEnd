const express = require("express")
const { isLoggedIn }= require("../../middlewares/isLoggedIn")
const { requireAuth } = require("../../middlewares/requireAuth")
const { scheduleAppointment, userAppointments, cancelAppointment } = require("../controllers/appointment")

const routerAppointment = express.Router()

routerAppointment.post("/", isLoggedIn, requireAuth , scheduleAppointment )
routerAppointment.get("/user", isLoggedIn, requireAuth, userAppointments)
routerAppointment.delete("/:eventId", isLoggedIn, requireAuth, cancelAppointment)

module.exports =  routerAppointment 