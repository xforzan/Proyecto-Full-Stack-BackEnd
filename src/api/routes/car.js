const express = require("express")
const { isLoggedIn } = require("../../middlewares/isLoggedIn")
const { requireAuth } = require("../../middlewares/requireAuth")
const { addVehicle, myCars} = require("../controllers/car")
const { validateVehicle } = require("../../middlewares/validateVehicle")
const { checkVehicleDuplicate } = require("../../middlewares/checkVehicleDuplicate")
const { fetchVehicleSpec } = require("../../middlewares/fetchVehicleSpec")
const { fetchVehicleImages } = require("../../middlewares/fetchVehicleImages")


const routerCars = express.Router()

routerCars.post("/add", isLoggedIn, requireAuth, validateVehicle, checkVehicleDuplicate , fetchVehicleSpec , fetchVehicleImages , addVehicle)
routerCars.get("/myCars", isLoggedIn, requireAuth, myCars)


module.exports = routerCars