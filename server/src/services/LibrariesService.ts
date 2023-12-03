import libraries  from "../database/libraries.json";

export class LibrariesService {
    static getByIds(ids: number[]) {
        const librariesFiltered = libraries.filter(library => ids.includes(library.id))
        return librariesFiltered
    }

    static getAll() {
        return libraries
    }
}