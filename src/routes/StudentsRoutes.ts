import { Router } from "express";
import StudentsController from "../controllers/StudentsController";

const studentsController = new StudentsController()
const routes = Router()

routes.get("/students", studentsController.getAll)
routes.get("/students/:id", studentsController.getById)

export default routes