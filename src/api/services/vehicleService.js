const Vehicle = require("../models/Vehicle");

const getUserVehicles = async (userId) => {
  if (!userId) console.error("User ID no proporcionado");
  const vehicles = await Vehicle.find({ user: userId });
  return vehicles;
};

module.exports = { getUserVehicles };