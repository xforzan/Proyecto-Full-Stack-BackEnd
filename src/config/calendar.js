const path = require("path");
const { google } = require("googleapis");

const SERVICE_ACCOUNT_FILE = path.join(__dirname, "service-account.json");

const auth = new google.auth.GoogleAuth({
  keyFile: SERVICE_ACCOUNT_FILE,
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });
const calendarId = process.env.CALENDAR_ID;
const timeZone = "Europe/Madrid";

async function checkConnection() {
  try {
    await calendar.events.list({ calendarId, maxResults: 1 });
    console.log("Conectado a Google Calendar ✅");
  } catch (error) {
    console.error("Error al conectar a Google Calendar:", error.message);
  }
}

checkConnection();

module.exports = { calendar, calendarId, timeZone };
