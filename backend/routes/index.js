const express = require("express");
const router = express.Router();
const Register = require("../utils/db");

router.post("/register", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    console.log({ name, email, age });

    // Create a new register document
    const register = new Register({ name, email, age });

    // Save the register document to the database
    await register.save();

    res.send("Registration successful!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
