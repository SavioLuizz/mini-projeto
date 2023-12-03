import { Router } from "express";

import studentsRoutes from './StudentsRoutes';
import subjectsRoutes from './SubjectsRoutes';
import librariesRoutes from './LibrariesRoutes';

const routes = Router()

routes.use(studentsRoutes)
routes.use(subjectsRoutes)
routes.use(librariesRoutes)

export default routes
