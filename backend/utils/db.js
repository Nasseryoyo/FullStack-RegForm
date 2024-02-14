if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uri = process.env.LOCAL_MONGO_URI;
// Connect to the database
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error(error);
  });

// Define the schema
const registerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const db = mongoose.connection.useDb("My-App");

const Register = db.model("Register", registerSchema);

module.exports = Register;
