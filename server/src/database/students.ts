// Inicalizando o banco de dados da tabela estudantes;

class Student {
    id: number;
    nome: string;
    curso: string;
    subjects: number[];
    library: number[];

    constructor(id: number, nome: string, curso: string, subjects: number[], library: number[]) {
        this.id = id;
        this.nome = nome;
        this.curso = curso;
        this.subjects = subjects;
        this.library = library;
    }
}

const InitStudents = async() => {
    const studentsRequest = await fetch("https://rmi6vdpsq8.execute-api.us-east-2.amazonaws.com/msAluno");
    const json = await studentsRequest.json() as Student[]
    const studentsParse = json.map(student => ({ ...student, subjects: [], library: [] })) 
    students.push(...studentsParse)
}

export const students: Student[] = [];
InitStudents();
