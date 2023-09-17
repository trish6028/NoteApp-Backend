DROP DATABASE IF EXISTS NOTEAPP;
CREATE DATABASE IF NOT EXISTS NOTEAPP;
SHOW DATABASES;
USE  NOTEAPP;

CREATE TABLE IF NOT EXISTS users(
  username VARCHAR(255) PRIMARY KEY NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE Notes(
   id INT AUTO_INCREMENT NOT NULL,
  note TEXT NOT NULL,
  event_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

ALTER TABLE Notes
ADD image_name varchar(225);