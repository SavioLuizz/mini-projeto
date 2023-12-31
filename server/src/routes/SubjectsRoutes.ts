import { Router } from "express";
import SubjectsController from "../controllers/SubjectsController";

const subjectsController = new SubjectsController()
const routes = Router()

routes.get("/subjects/student/:studentId", subjectsController.getAllByStudent)
routes.post("/subjects/students/:id", subjectsController.enrollSubject)
routes.delete("/subjects/students/:id/cancel", subjectsController.cancelSubject)
routes.get("/subjects", subjectsController.getAll)

export default routes