import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getHome,
  getStudent,
  getStudents,
  updateStudent,
} from "../../controllers/students.controllers.js";

const router = Router();

router.get("/", getHome);

router.get("/students/", getStudents);

router.get("/students/:id", getStudent);

router.post("/students/", createStudent);

router.delete("/student/:id", deleteStudent);

router.put("/student/:id", updateStudent);

export default router;
