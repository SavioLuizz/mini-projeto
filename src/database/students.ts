// Inicalizando o banco de dados da tabela estudantes;

interface IStudent {
    id: number;
    nome: string;
    curso: string;
    subjects: number[]
    library: number[]
}

const InitStudents = async() => {
    const studentsRequest = await fetch("https://rmi6vdpsq8.execute-api.us-east-2.amazonaws.com/msAluno");
    const json = await studentsRequest.json() as IStudent[]
    const studentsParse = json.map(student => ({ ...student, subjects: [], library: [] }))
    students.push(...studentsParse)
}

export const students: IStudent[] = [];
InitStudents();
