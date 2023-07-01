require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
if (process.env.NODE_ENV === "development") app.use(express.json());

const port = process.env.PORT || 8000;

app.listen(port, () => console.log("server running on port " + port));
