import { libraries } from "../database/libraries";

export class LibrariesService {
    static getByIds(ids: number[]) {
        const librariesFiltered = libraries.filter(library => ids.includes(library.id))
        return librariesFiltered
    }
}