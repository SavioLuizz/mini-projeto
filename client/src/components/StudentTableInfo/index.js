import { Table } from '@radix-ui/themes';
import Dialog from '../Dialog';

const Info = ({ infos = [], title, refetch }) => {
    return <div className="info-container">
        
        <div className="info-title-container">
            <h3>{title}</h3>
            <Dialog title={title} refetch={refetch} />
        </div>
        <Table.Root variant="surface">
            <Table.Header>
                <Table.Row>
                <Table.ColumnHeaderCell>#</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {infos?.map(info => (
                    <Table.Row key={`${info.id}-${info.nome}`}>
                        <Table.RowHeaderCell>{info.id}</Table.RowHeaderCell>
                        <Table.Cell>{info.nome}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    </div>
}

const StudentTableInfo = ({ subjects = [], libraries = [], refetch }) => {
    const subjectsFiltered = subjects.filter((student, index) => subjects.findIndex(s => student.id === s.id) === index)
    const librariesFiltered = libraries.filter((student, index) => libraries.findIndex(s => student.id === s.id) === index)

    return (
        <div className="table-info-container">
            <Info infos={subjectsFiltered} title="Materias" refetch={refetch} />
            <Info infos={librariesFiltered} title="Livros" refetch={refetch} />
        </div>
    )
}

export default StudentTableInfo;