const mongoose = require("mongoose");

const initialiseDatabase = async () => {
  console.log("Trying to connect...");
  console.log("URI:", process.env.MONGODB);

  try {
    const response = await mongoose.connect(process.env.MONGODB);

    console.log("Database connected successfully");
    console.log("Host:", response.connection.host);

  } catch (error) {
    console.error("Connection error message:", error.message);
    console.error("Full error:", error);
  }
};

module.exports = { initialiseDatabase };