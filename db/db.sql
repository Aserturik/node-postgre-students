CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    career VARCHAR(255) NOT NULL 
);

INSERT INTO students(name, career) 
    VALUES
        ('Alex Hernandez', 'Ingenieria de sistemas'), 
        ('Pedro pedro pedro', 'Licenciatura en Lenguas');

SELECT * FROM students;
