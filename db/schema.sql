CREATE SCHEMA `burgers_db` ;

USE burgers_db;

CREATE TABLE burgers(
  id INTEGER(20) AUTO_INCREMENT NOT NULL,
  devoured BOOLEAN DEFAULT false,
  burger_name VARCHAR(100),
  PRIMARY KEY (id)
);