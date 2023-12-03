import { Table } from '@radix-ui/themes';
import { MdOutlineMedicalInformation  } from "react-icons/md";
import { useNavigate  } from 'react-router-dom'

const TableStudents = ({ students = []}) => {
    const studentsFiltered = students.filter((student, index) => students.findIndex(s => student.id === s.id) === index)
    const navigate = useNavigate()

    return (
        <div className="table-container">
            <Table.Root variant="surface">
                <Table.Header>
                    <Table.Row>
                    <Table.ColumnHeaderCell>#</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Curso</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Ações</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {studentsFiltered?.map(student => (
                        <Table.Row key={`${student.id}-${student.nome}`}>
                            <Table.RowHeaderCell>{student.id}</Table.RowHeaderCell>
                            <Table.Cell>{student.nome}</Table.Cell>
                            <Table.Cell>{student.curso}</Table.Cell>
                            <Table.Cell>
                            <div className="icons-container">
                                <MdOutlineMedicalInformation size={20} cursor="pointer" onClick={() => navigate(`/students/${student.id}`)} />
                            </div>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    )
}

export default TableStudents;