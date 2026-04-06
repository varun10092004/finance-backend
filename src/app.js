const express = require("express");

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/records", require("./routes/recordRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

// test route
const auth = require("./middleware/auth");

app.get("/api/test", auth, (req, res) => {
  res.json({
    message: "Protected route working",
    user: req.user
  });
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;