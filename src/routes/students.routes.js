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

router.delete("/students/:id", deleteStudent);

router.put("/students/:id", updateStudent);

export default router;
