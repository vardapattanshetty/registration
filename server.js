const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // for CSS
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "views"))); // to serve HTML

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  console.log("User Registered:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);

  res.send(`<h2>Thanks for registering, ${name}!</h2><p>We received your info.</p>`);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
