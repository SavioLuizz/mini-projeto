import { Router } from "express";
import LibraryController from "../controllers/LibrariesController";

const libraryController = new LibraryController()
const routes = Router()

routes.get("/libraries/student/:studentId", libraryController.getAllByStudent)
routes.post("/libraries/students/:id", libraryController.reserveBook)
routes.post("/libraries/students/:id/cancel", libraryController.cancelBook)

export default routes