import { Request, Response } from "express";

import { StudentsService } from "../services/StudentsService";
import { SubjectsService } from "../services/SubjectsService";

class SubjectsController {
    getAllByStudent(req: Request, res: Response) {
        const { studentId } = req.params
        const student = StudentsService.getById(Number(studentId))

        if (!student) {
            return res.json({
                statusCode: 404,
                message: "Estudante não encontrado!!"
            })
        }
        // Filtrando as materias pelo id das materias cadatradas
        const subjectsFiltered = SubjectsService.getByIds(student?.subjects)
        return res.json(subjectsFiltered)
    }

    enrollSubject(req: Request, res: Response) {
        const { subjectId } = req.body
        const { id } = req.params
        
        const student = StudentsService.getById(Number(id))

        if (!student) {
            return res.json({
                statusCode: 404,
                message: "Estudante não encontrado!!"
            })
        }

        const studentSubject = student.subjects

        if (studentSubject.includes(subjectId)) {
            return res.json({
                statusCode: 400,
                message: "Materia já cadastrada!!"
            })
        }

        student.subjects.push(subjectId)

        return res.json(student)
    }
    
    cancelSubject(req: Request, res: Response) {
        const { subjectId } = req.body
        const { id } = req.params
        
        const student = StudentsService.getById(Number(id))

        if (!student) {
            return res.json({
                statusCode: 404,
                message: "Estudante não encontrado!!"
            })
        }

        const studentSubject = student.subjects

        if (!studentSubject.includes(subjectId)) {
            return res.json({
                statusCode: 404,
                message: "Materia não encontrada!!"
            })
        }
        
        const studentSubjectFiltered = studentSubject.filter(subject => subject !== subjectId)
        student.subjects = studentSubjectFiltered

        return res.json({
            statusCode: 200,
            message: "Materia removida com sucesso"
        })
    }
}

export default SubjectsController