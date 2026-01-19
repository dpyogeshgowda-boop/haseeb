CREATE DATABASE IF NOT EXISTS booking_system;
USE booking_system;
SELECT DATABASE();

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(100),
    event_type VARCHAR(50),
    event_date DATE,
    location VARCHAR(100),
    price DECIMAL(8,2)
);

CREATE TABLE bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    event_id INT,
    booking_date DATE,
    tickets INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT,
    amount DECIMAL(10,2),
    payment_date DATE,
    payment_status VARCHAR(20),
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
);
CREATE DATABASE booking_system;
USE booking_system;
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(100),
    event_type VARCHAR(50),
    event_date DATE,
    location VARCHAR(100),
    price DECIMAL(8,2)
);

CREATE TABLE bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    event_id INT,
    booking_date DATE,
    tickets INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT,
    amount DECIMAL(10,2),
    payment_date DATE,
    payment_status VARCHAR(20),
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
);
USE booking_system;
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(100),
    event_type VARCHAR(50),
    event_date DATE,
    location VARCHAR(100),
    price DECIMAL(8,2)
);

CREATE TABLE bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    event_id INT,
    booking_date DATE,
    tickets INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT,
    amount DECIMAL(10,2),
    payment_date DATE,
    payment_status VARCHAR(20),
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
);
USE booking_system;
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(100),
    event_type VARCHAR(50),
    event_date DATE,
    location VARCHAR(100),
    price DECIMAL(8,2)
);

CREATE TABLE bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    event_id INT,
    booking_date DATE,
    tickets INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT,
    amount DECIMAL(10,2),
    payment_date DATE,
    payment_status VARCHAR(20),
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
);
SHOW TABLES;
DROP TABLE IF EXISTS payments;
DROP TABLE IF EXISTS bookings;
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50)
);
CREATE TABLE events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(100),
    event_type VARCHAR(50),
    event_date DATE,
    location VARCHAR(100),
    price DECIMAL(8,2)
);
CREATE TABLE bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    event_id INT,
    booking_date DATE,
    tickets INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);
SHOW TABLES;
CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT,
    amount DECIMAL(10,2),
    payment_date DATE,
    payment_status VARCHAR(20),
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
);
SHOW TABLES;
INSERT INTO users (name, email, password) VALUES
('Rahul', 'rahul@gmail.com', 'rahul123'),
('Anita', 'anita@gmail.com', 'anita123');
INSERT INTO events (event_name, event_type, event_date, location, price) VALUES
('Music Night', 'Concert', '2025-02-10', 'Bangalore', 999.00),
('Tech Expo', 'Exhibition', '2025-03-05', 'Chennai', 499.00);
INSERT INTO bookings (user_id, event_id, booking_date, tickets)
VALUES (1, 1, CURDATE(), 2);
INSERT INTO payments (booking_id, amount, payment_date, payment_status)
VALUES (1, 1998.00, CURDATE(), 'Success');
SELECT * FROM users;
SELECT * FROM events;
SELECT * FROM bookings;
SELECT * FROM payments;

SELECT 
    u.name,
    e.event_name,
    b.booking_date,
    b.tickets,
    p.amount,
    p.payment_status
FROM users u
JOIN bookings b ON u.user_id = b.user_id
JOIN events e ON b.event_id = e.event_id
JOIN payments p ON b.booking_id = p.booking_id;
SELECT * FROM users;
SELECT * FROM users;
USE booking_system;
SELECT * FROM users;
USE booking_system;

CREATE TABLE bookings (
  booking_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  booking_type VARCHAR(50),   -- movie / event / concert
  item_name VARCHAR(100),     -- movie name / event name
  booking_date DATE,
  seats INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
USE booking_system;
USE booking_system;

CREATE TABLE bookings (
  booking_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  booking_type VARCHAR(50),   -- movie / event / concert
  item_name VARCHAR(100),     -- movie name / event name
  booking_date DATE,
  seats INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
USE booking_system;
SHOW TABLES;
DESCRIBE bookings;

USE booking_system;
DESCRIBE bookings;

CREATE TABLE events (
  event_id INT AUTO_INCREMENT PRIMARY KEY,
  event_name VARCHAR(100),
  event_type VARCHAR(50),
  event_date DATETIME
);
INSERT INTO events (event_name, event_type, event_date)
VALUES ('Rock Concert', 'Concert', '2026-02-10 18:30:00');
SELECT * FROM bookings;



