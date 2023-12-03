import subjects  from "../database/subjects.json";

export class SubjectsService {
    static getByIds(ids: number[]) {
        const subjectsFiltered = subjects.filter(subject => ids.includes(subject.id))
        return subjectsFiltered
    }

    static getAll() {
        return subjects
    }
}