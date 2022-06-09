const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../", ".env") });
const db = require("../config/connection");
const { User } = require("../models");
const userSeeds = require("./userSeeds.json");

db.once("open", async () => {
  try {
    await User.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
