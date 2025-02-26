import { pool } from "../src/db.js";

export const getHome = (req, res) => {
  res.send("hola estudiante");
};

export const getStudents = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM students");
  res.json(rows);
};

export const getStudent = async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query(`SELECT * FROM students WHERE id = ${id}`);
  if (rows.length !== 0) {
    res.json(rows[0]);
  } else {
    res.status(404).json({ message: "estudiante no encontrado" });
  }
};

export const createStudent = async (req, res) => {
  const data = req.body;
  try {
    const { rows } = await pool.query(
      "INSERT INTO students(name,career) VALUES ($1, $2) RETURNING *",
      [data.name, data.career],
    );
    res.status(200).json(rows[0]);
  } catch (error) {
    if (error?.code === "23505") {
      return res.status(409).json({ message: "estudiante ya existe" });
    } else {
      res.json({ message: "error interno del servidor" });
    }
  }
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query(
    "DELETE FROM students WHERE id = $1 RETURNING *",
    [id],
  );
  if (rows[0] !== undefined) {
    res.status(200).json(rows[0]);
  } else {
    res.status(404).json({ message: "el estudiante a eliminar no existe" });
  }
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id=$3 RETURNING *",
    [data.name, data.email, id],
  );
  if (result.rowCount === 0) {
    res.status(404).json({ message: `No existe el estudiante con id = ${id}` });
  } else {
    res.json(result.rows);
  }
};
