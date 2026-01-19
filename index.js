const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

/* ================= MYSQL CONNECTION ================= */

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "anki@135mysql",
  database: "booking_system"
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
    return;
  }
  console.log("✅ MySQL connected successfully");
});

/* ================= HOME ================= */

app.get("/", (req, res) => {
  res.send("Booking backend running 🚀");
});

/* ================= USERS ================= */

// Get all users
app.get("/users", (req, res) => {
  const sql = "SELECT user_id, name, email FROM users";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
});

// Create user
app.post("/users", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const sql =
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err) => {
    if (err) return res.status(500).json({ error: "User insert failed" });
    res.json({ message: "User added successfully ✅" });
  });
});

/* ================= LOGIN ================= */

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql =
    "SELECT user_id, name, email FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });

    if (result.length > 0) {
      res.json({
        message: "Login successful ✅",
        user: result[0]
      });
    } else {
      res.status(401).json({ message: "Invalid email or password ❌" });
    }
  });
});

/* ================= EVENTS ================= */

// Get all events
app.get("/events", (req, res) => {
  const sql = "SELECT * FROM events";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
});

/* ================= BOOKINGS ================= */

// Get bookings with user & event details
app.get("/bookings", (req, res) => {
  const sql = `
    SELECT 
      b.booking_id,
      u.name AS user_name,
      u.email,
      e.event_name,
      e.event_type,
      e.event_date,
      b.tickets
    FROM bookings b
    JOIN users u ON b.user_id = u.user_id
    JOIN events e ON b.event_id = e.event_id
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
});

// Create booking
app.post("/bookings", (req, res) => {
  const { user_id, event_id, tickets } = req.body;

  if (!user_id || !event_id || !tickets) {
    return res.status(400).json({ message: "All fields required" });
  }

  const sql =
    "INSERT INTO bookings (user_id, event_id, tickets) VALUES (?, ?, ?)";

  db.query(sql, [user_id, event_id, tickets], (err) => {
    if (err) return res.status(500).json({ error: "Booking failed" });
    res.json({ message: "Booking successful 🎟️" });
  });
});

/* ================= SERVER ================= */

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});