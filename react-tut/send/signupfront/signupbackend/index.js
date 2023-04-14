const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS);

app.use(express.json());
app.use(cors());
app.use("/api", routesUrls);
app.listen(6000, () => console.log("server is up and running"));
