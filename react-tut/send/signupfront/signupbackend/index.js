const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS);
console.log(process.env.DATABASE_ACCESS);

app.listen(8000, () => console.log("server is up and running"));
