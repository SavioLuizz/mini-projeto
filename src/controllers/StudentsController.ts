import { Request, Response } from "express";
import { StudentsService } from "../services/StudentsService";

class StudentsController {
    getAll(req: Request, res: Response) {
        const {curso = ""} = req.query;
        const students = StudentsService.getAll(String(curso))
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