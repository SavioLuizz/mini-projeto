import { Table } from '@radix-ui/themes';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";

import Dialog from '../Dialog';

const Info = ({ infos = [], title, refetch }) => {
    let { id } = useParams();

    const entity = title.toLowerCase() === "materias" ? "subjects" : "libraries"

    const remove = async (entityId) => {
        const idKey = entity === "subjects" ? "subjectId" : "bookId"
        const response = await fetch(`http://localhost:3001/${entity}/students/${id}/cancel`, {
            method: "DELETE",
            body: JSON.stringify({ [idKey]: entityId }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })

        
        if (!response.ok) {
            const { message } = await response.json()
            return toast(message, {
                type: "error",
            })
        }

        toast("Removido com sucesso", {
            type: "success",
        })

        await refetch()
    }

    return <div className="info-container">
        
        <div className="info-title-container">
            <h3>{title}</h3>
            <Dialog title={title} refetch={refetch} />
        </div>
        <Table.Root variant="surface">
            <Table.Header>
                <Table.Row>
                <Table.ColumnHeaderCell>#</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Ações</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {infos?.map((info, index) => (
                    <Table.Row key={`${info.id}-${info.nome}`}>
                        <Table.RowHeaderCell>{index}</Table.RowHeaderCell>
                        <Table.Cell>{info.id}</Table.Cell>
                        <Table.Cell>{info.nome}</Table.Cell>
                        <Table.Cell>
                            <MdDelete size={20} cursor="pointer" onClick={() => remove(info.id)} />
                        </Table.Cell>
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