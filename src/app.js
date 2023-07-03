require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const informationRouter = require("../src/routes/informationRouter");

app.use(cors());

if (process.env.NODE_ENV === "development") app.use(express.json());

app.use("/information", informationRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log("server running on port " + port));
