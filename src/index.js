const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
require("dotenv").config();

// Require all routes;
const guestRouter = require("./routes/guest");
const settingRouter = require("./routes/setting");
const bookingRouter = require("./routes/booking");

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
  { path: "/api/guests", router: guestRouter },
  { path: "/api/setting", router: settingRouter },
  { path: "/api/bookings", router: bookingRouter },
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
