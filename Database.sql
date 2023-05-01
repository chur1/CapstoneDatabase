-- Create the database
CREATE DATABASE my_website_db;

-- Switch to the new database
USE my_website_db;

-- Create the users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    school_email VARCHAR(255) NOT NULL,
    personal_email VARCHAR(255),
    phone_number VARCHAR(20),
    profile_picture BLOB
);

-- Create the projects table
CREATE TABLE projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
