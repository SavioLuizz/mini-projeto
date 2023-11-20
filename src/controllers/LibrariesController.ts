import { Request, Response } from "express";
import { StudentsService } from "../services/StudentsService";
import { LibrariesService } from "../services/LibrariesService";

class LibraryController {
    getAllByStudent(req: Request, res: Response) {
        const { studentId } = req.params
        const student = StudentsService.getById(Number(studentId))

        if (!student) {
            return res.json({
                statusCode: 404,
                message: "Estudante não encontrado!!"
            })
        }
        // Filtrando as Livros pelo id das Livros cadatradas
        const librariesFiltered = LibrariesService.getByIds(student?.library)
        return res.json(librariesFiltered)
    }

    reserveBook(req: Request, res: Response) {
        const { bookId } = req.body
        const { id } = req.params
        
        const student = StudentsService.getById(Number(id))

        if (!student) {
            return res.json({
                statusCode: 404,
                message: "Estudante não encontrado!!"
            })
        }

        const studentLibrary = student.library

        if (studentLibrary.includes(bookId)) {
            return res.json({
                statusCode: 400,
                message: "Livro já cadastrada!!"
            })
        }

        student.library.push(bookId)

        return res.json(student)
    }
    
    cancelBook(req: Request, res: Response) {
        const { bookId } = req.body
        const { id } = req.params
        
        const student = StudentsService.getById(Number(id))

        if (!student) {
            return res.json({
                statusCode: 404,
                message: "Estudante não encontrado!!"
            })
        }

        const studentLibrary = student.library

        if (!studentLibrary.includes(bookId)) {
            return res.json({
                statusCode: 404,
                message: "Livro não encontrada!!"
            })
        }
        
        const studentLibraryFiltered = studentLibrary.filter(book => book !== bookId)
        student.library = studentLibraryFiltered

        return res.json({
            statusCode: 200,
            message: "Livro removida com sucesso"
        })
    }
}

export default LibraryController