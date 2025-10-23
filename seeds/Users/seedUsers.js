const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const User = require("../../src/api/models/User");

const usersCsvPath = path.join(__dirname, "../Users/users.csv");

function normalizeValue(value) {
  if (typeof value !== "string") return value;
  return value.replace(/[\r\n]/g, "").trim();
}

async function seedUsers() {
  try {
    await mongoose.connect(
      "mongodb+srv://xforzan:Omega300$@cluster0.zjqeiyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("✅ Conectado a MongoDB");

    await User.collection.drop().catch(() =>
      console.log("Colección Users vacía o no existía")
    );

    const raw = fs.readFileSync(usersCsvPath, "utf8");
    const lines = raw.trim().split("\n");
    const headers = lines.shift().split(",").map(h => h.trim());


    const records = lines.map(line => {
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

      return obj;
    });

    await User.insertMany(records);
    console.log("✅ Seed de Users cargada correctamente");
  } catch (error) {
    console.error("❌ Error en la seed:", error);
  } finally {
    await mongoose.disconnect();
  }
}

seedUsers();
