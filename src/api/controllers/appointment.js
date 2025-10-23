const { calendar, calendarId, timeZone } = require("../../config/calendar");
const Vehicle = require("../models/Vehicle");
const { getUserVehicles } = require("../services/vehicleService");
const User = require("../models/User");

const eventDescription = (user, coche, startDateTime, timeZone) => {
  return [
    `🚗 Datos del vehículo:`,
    `- Marca y modelo: ${coche.specs.longType}`,
    `- VIN: ${coche.vin}`,
    ``,
    `👤 Datos del cliente:`,
    `- Nombre: ${user.name}`,
    `- Correo electrónico: ${user.email}`,
    ``,
    `🗓 Fecha y hora de la cita: ${startDateTime.toLocaleString("es-ES", {
      timeZone,
    })}`,
  ].join("\n"); 
};


const scheduleAppointment = async (req, res) => {
  try {
    const { userId } = req;

    const { vehicleId, fecha, hora } = req.body;

    const userCars = await getUserVehicles(userId)

    const coche = userCars.find((car) => car._id.toString() === vehicleId);

    const user = await User.findById(userId);

    if (!coche) {
      return res.status(404).json({ message: "Vehículo no encontrado" });
    }

    const startDateTime = new Date(`${fecha}T${hora}:00`);
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(endDateTime.getHours() + 1);

    const event = {
      summary: `Cita de taller - ${coche.vin}`,
      description: eventDescription(user, coche, startDateTime, timeZone),
      start: { dateTime: startDateTime.toISOString(), timeZone },
      end: { dateTime: endDateTime.toISOString(), timeZone },
      extendedProperties: {
        private: {status: "confirmada", vin: coche.vin, },
      },
    };

    const response = await calendar.events.insert({ calendarId, requestBody: event,});

    res.status(201).json({ message: "Cita creada en Google Calendar", eventId: response.data.id,});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear cita", error: error.message });
  }
};



const userAppointments = async (req, res) => {
  try {

    const { userId } = req
    const userCars = await getUserVehicles(userId)

    const events = await calendar.events.list({
      calendarId,
      timeMin: new Date().toISOString(),
      maxResults: 100,
      singleEvents: true,
      orderBy: "startTime",
    });
    
    const userVins = userCars.map(car => car.vin);

    const coches = events.data.items.filter( e => userVins.includes(e.extendedProperties?.private?.vin));

    res.status(200).json({ message: coches });
  } catch (error) {
    return res.status(500).json({ message: "Ha habido un error", error });
  }
};



const cancelAppointment = async (req, res) => {
  try {
    const { eventId } = req.params;

    if (!eventId) {
      return res.status(400).json({ message: "Falta el ID del evento" });
    }

    await calendar.events.delete({ calendarId, eventId,});

    res.status(200).json({ message: "Cita eliminada correctamente" });
  } catch (error) {
    return res.status(500).json({ message: "Ha habido un error", error });
  }
};




module.exports = { scheduleAppointment, userAppointments, cancelAppointment };
