-- Creates the table "employee" within employees_db;
CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER(10) NOT NULL,
    manager_id INTEGER(10) NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES department(id)
);

-- Creates the table "role" within employees_db;
CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10) NOT NULL,
    department_id INTEGER(10) NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Creates the table "department" within employees_db ;
CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    name VARCHAR(30) NOT NULL
);