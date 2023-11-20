import { subjects } from "../database/subjects";

export class SubjectsService {
    static getByIds(ids: number[]) {
        const subjectsFiltered = subjects.filter(subject => ids.includes(subject.id))
        return subjectsFiltered
    }
}