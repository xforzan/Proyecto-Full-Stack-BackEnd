const Vehicle = require("../api/models/Vehicle");

const deleteCars = async (vins = []) => {
  try {
    for (const vin of vins) {
      await Vehicle.findOneAndDelete({ vin });
      console.log("Vehículos eliminados correctamente")
    }
  } catch (error) {
    console.error("Error al eliminar vehículos", error);
  }
};

module.exports = { deleteCars };
