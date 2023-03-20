-- Create the Attacks database
CREATE DATABASE IF NOT EXISTS AttacksDB1;

-- Use the Attacks database
USE AttacksDB1;

-- Create the Attacks table
CREATE TABLE IF NOT EXISTS Attacks (
id INT PRIMARY KEY,
attack_type VARCHAR(255),
attack_date DATE,
attacker_ip VARCHAR(255),
victim_ip VARCHAR(255),
description TEXT,
severity VARCHAR(255)
);

-- Create the Attackers table
CREATE TABLE IF NOT EXISTS Attackers (
id INT PRIMARY KEY,
name VARCHAR(255),
location VARCHAR(255),
aliases TEXT
);

-- Create the Victims table
CREATE TABLE IF NOT EXISTS Victims (
id INT PRIMARY KEY,
name VARCHAR(255),
address VARCHAR(255),
contact_info TEXT
);

-- Create the Users table
CREATE TABLE IF NOT EXISTS Users (
id INT PRIMARY KEY,
username VARCHAR(255),
password VARCHAR(255),
role VARCHAR(255)
);

-- Add a user for testing purposes
INSERT INTO Users (id, username, password, role)
VALUES (1, 'testuser', 'testpassword', 'admin');

-- Create a view to show the number of attacks by attack type
CREATE VIEW AttackCounts AS
SELECT attack_type, COUNT(*) AS count
FROM Attacks
GROUP BY attack_type;

-- Create a stored procedure to add an attack
DELIMITER $$
CREATE PROCEDURE AddAttack(
IN p_attack_type VARCHAR(255),
IN p_attack_date DATE,
IN p_attacker_ip VARCHAR(255),
IN p_victim_ip VARCHAR(255),
IN p_description TEXT,
IN p_severity VARCHAR(255)
)
BEGIN
INSERT INTO Attacks (attack_type, attack_date, attacker_ip, victim_ip, description, severity)
VALUES (p_attack_type, p_attack_date, p_attacker_ip, p_victim_ip, p_description, p_severity);
END$$
DELIMITER ;

-- Create a trigger to sanitize input data before inserting into the Attacks table
DELIMITER //

CREATE TRIGGER SanitizeAttacks BEFORE INSERT ON Attacks
FOR EACH ROW
BEGIN
SET NEW.attack_type = REPLACE(NEW.attack_type, ';', '');
SET NEW.attacker_ip = REPLACE(NEW.attacker_ip, ';', '');
SET NEW.victim_ip = REPLACE(NEW.victim_ip, ';', '');
SET NEW.description = REPLACE(NEW.description, ';', '');
SET NEW.severity = REPLACE(NEW.severity, ';', '');
END//

DELIMITER ;


-- Create a login system
CREATE TABLE IF NOT EXISTS Sessions (
id INT PRIMARY KEY,
user_id INT,
token VARCHAR(255),
expires_at TIMESTAMP
);

-- Create a stored procedure to authenticate users and create a session
DELIMITER $$
CREATE PROCEDURE Login(
IN p_username VARCHAR(255),
IN p_password VARCHAR(255),
OUT p_session_token VARCHAR(255)
)
BEGIN
DECLARE user_id INT;

SELECT id INTO user_id FROM Users WHERE username = p_username AND password = p_password;

IF user_id IS NOT NULL THEN
INSERT INTO Sessions (user_id, token, expires_at)
VALUES (user_id, UUID(), DATE_ADD(NOW(), INTERVAL 1 HOUR));

SELECT token INTO p_session_token FROM Sessions WHERE user_id = user_id ORDER BY id DESC LIMIT 1;
ELSE
SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid username or password';
END IF;
END$$
DELIMITER ;

-- Create a stored procedure to log out a user and delete their session
DELIMITER $$
CREATE PROCEDURE Logout(
IN p_session_token VARCHAR(255)
)
BEGIN
DELETE FROM Sessions WHERE token = p_session_token;
END$$
DELIMITER ;

