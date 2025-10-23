const validateVehicle = (req, res, next) => {

  const { vin, km } = req.body;
  
  if (!vin || km === undefined) {
    return res.status(400).json({ message: "Falta VIN o km" });
  }
  next();
};

module.exports = { validateVehicle };
