const express = require("express");
const path  = require("path");
const fs = require("fs");
const mysql = require("mysql");
const inquire = require("inquirer");
const app = express();
const PORT = 6969;

// Connection config to connect js to seed.sql
var con = mysql.createConnection({
    multipleStatements: true,
    host: 'localhost',
    // port: PORT,
    // database: "employees_db",
    user: "root",
    password: "sqlLicker@31"
});

con.connect(function(err)  {
    if (err) throw err;
    console.log("Connected to database");
    // TODO Create database
    con.query(
        'DROP DATABASE IF EXISTS employees_db;' +
        'CREATE DATABASE employees_db;' +
        'USE employees_db; ' +
        'CREATE TABLE department (\n' +
        '    id INTEGER NOT NULL AUTO_INCREMENT,\n' +
        '    PRIMARY KEY (id),\n' +
        '    name VARCHAR(30) NOT NULL\n' +
        ');' +
        'CREATE TABLE role (\n' +
        '    id INTEGER NOT NULL AUTO_INCREMENT,\n' +
        '    PRIMARY KEY (id),\n' +
        '    title VARCHAR(30) NOT NULL,\n' +
        '    salary DECIMAL(10) NOT NULL,\n' +
        '    department_id INTEGER(10) NOT NULL,\n' +
        '    FOREIGN KEY (department_id) REFERENCES department(id)\n' +
        ');' +
        'CREATE TABLE employee (' +
        'id INTEGER NOT NULL AUTO_INCREMENT,' +
        'PRIMARY KEY(id),' +
        'first_name VARCHAR(30) NOT NULL,' +
        'last_name VARCHAR(30) NOT NULL,\n' +
        'role_id INTEGER(10) NOT NULL,\n' +
        'manager_id INTEGER(10) NOT NULL,\n' +
        'FOREIGN KEY (role_id) REFERENCES role(id),\n' +
        'FOREIGN KEY (manager_id) REFERENCES department(id)\n' +
        ');',
        (err, results) => {
            if (err) throw err;
            console.log("success!");
            con.database = "employees_db";
        }
    );
    // TODO Execute seed.sql

});

// Spins server up to begin listening
// Functional
// app.listen(PORT, () => {
//     console.log("App listening on PORT " + PORT);
// });

