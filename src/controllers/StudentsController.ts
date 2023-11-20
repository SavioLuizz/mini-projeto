import { Request, Response } from "express";
import { StudentsService } from "../services/StudentsService";

class StudentsController {
    getAll(req: Request, res: Response) {
        const students = StudentsService.getAll()
        return res.json(students)
    }

    getById(req: Request, res: Response) {
        const { id } = req.params
        const student = StudentsService.getById(Number(id))

        if (!student) {
            return res.json({
                statusCode: 404,
                message: "Estudante não encontrado!!"
            })
        }

        return res.json(student)
    }
}

export default StudentsController