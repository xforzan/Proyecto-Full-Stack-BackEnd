const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Vehicle = require("../../src/api/models/Vehicle");

const carsCsvPath = path.join(__dirname, "../Cars/cars.csv");

function normalizeValue(value) {
  if (typeof value !== "string") return value;
  return value.replace(/[\r\n]/g, "").trim();
}

async function seedCars() {
  try {
    await mongoose.connect(
      "mongodb+srv://xforzan:Omega300$@cluster0.zjqeiyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("✅ Conectado a MongoDB");

    await Vehicle.collection.drop().catch(() =>
      console.log("Colección Vehicles vacía o no existía")
    );

    const raw = fs.readFileSync(carsCsvPath, "utf8");
    const lines = raw.trim().split("\n");
    const headers = lines.shift().split(",").map(h => h.trim());

    const records = lines.map((line) => {
      const values = [];
      let current = "";
      let insideQuotes = false;

      for (let char of line) {
        if (char === '"' || char === "'") {
          insideQuotes = !insideQuotes;
        } else if (char === "," && !insideQuotes) {
          values.push(current);
          current = "";
        } else {
          current += char;
        }
      }
      values.push(current);

      const obj = {};
      headers.forEach((h, i) => {
        obj[h] = normalizeValue(values[i] || "");
      });

      const images = [];
      for (let i = 0; i <= 2; i++) {
        const key = `images[${i}]`;
        if (obj[key]) images.push(obj[key]);
        delete obj[key];
      }
      obj.images = images;

      const specs = {};
      Object.keys(obj).forEach((key) => {
        if (key.startsWith("specs.")) {
          const cleanKey = key.replace("specs.", "").trim();
          specs[cleanKey] = obj[key];
          delete obj[key];
        }
      });
      obj.specs = specs;

      return obj;
    });

    await Vehicle.insertMany(records);
    console.log("✅ Seed de Vehicles cargada correctamente");
  } catch (error) {
    console.error("❌ Error en la seed:", error);
  } finally {
    await mongoose.disconnect();
  }
}

seedCars();
