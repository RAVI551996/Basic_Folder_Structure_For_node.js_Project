const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`Database connection successfully ${data.connection.host}`);
    })
    .catch((error) => {
      console.log(`error connecting to the Database ${error}`);
    });
};

module.exports = dbConnect;
