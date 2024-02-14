const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("./utils/db");

// Set the port
const port = 8000;
const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import the router
const router = require("./routes/index");

// Mount the router on the main app
app.use("/", router);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
