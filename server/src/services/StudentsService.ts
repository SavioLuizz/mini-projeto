
import { students } from "../database/students";

export class StudentsService {
    static getById(id: number) {
        const studant = students.find(student => student.id === id)
        return studant
    }

    static getAll(curso: string) {
        
        const match = new RegExp(curso, "gi")
        return students.filter((student) => match.test(student.curso))
    }
}