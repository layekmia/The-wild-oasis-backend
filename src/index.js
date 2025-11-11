const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
require("dotenv").config();

// Require all routes;
const guest = require("./routes/guest");
const setting = require("./routes/setting");
const booking = require("./routes/booking");
const cabin = require("./routes/cabin");

const app = express();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000"], // allow only my front-end
    credentials: true,
  })
);
app.use(express.json());

// Connect to database
connectDB();

// Routes
const routes = [
  { path: "/api/guests", router: guest },
  { path: "/api/setting", router: setting },
  { path: "/api/bookings", router: booking },
  { path: "/api/cabins", router: cabin },
];

routes.forEach(({ path, router }) => {
  app.use(path, router);
});

app.get("/", (req, res) => {
  res.json({ success: true, message: "The wild oasis server is running" });
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
