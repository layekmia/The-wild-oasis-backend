const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
require("dotenv").config();

// Require all routes;
const guestRouter = require("./routes/guest");
const settingRouter = require("./routes/setting");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// Routes
const routes = [
  { path: "/api/guests", router: guestRouter },
  { path: "/api/setting", router: settingRouter },
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
