// Third party module
const path = require('path');

// Core module
const express = require("express");

// self module


const app = express();



// app.use(globalErrorHandler);
// app.use("*", (req, res, next) => {
//   res.status(404).json({
//     message: "API REQUEST NOT FOUND!!",
//   });
// });
module.exports = app;
