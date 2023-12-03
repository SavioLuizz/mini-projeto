import { Dialog, Button, Flex, Select } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { GoPlusCircle } from "react-icons/go";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const DialogStudent = ({ title, refetch }) => {
    let { id } = useParams();

    const [entities, setEntities] = useState()
    const [newItem, setNewItem] = useState()
    const entity = title.toLowerCase() === "materias" ? "subjects" : "libraries"

    const fetchEntities = async () => {
        const response = await fetch(`http://localhost:3001/${entity}`)
        const json = await response.json()
        setEntities(json)
    }

    const saveNewItem = async () => {
        const idKey = entity === "subjects" ? "subjectId" : "bookId"
        const response = await fetch(`http://localhost:3001/${entity}/students/${id}`, {
            method: "POST",
            body: JSON.stringify({ [idKey]: newItem }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })

        if (!response.ok) {
            const { message } = await response.json()
            return toast(message, {
                type: "error",
            })
        }

        toast("Adicionado com sucesso", {
            type: "success",
        })

        await refetch()
    }

    useEffect(() => {
        fetchEntities()
    }, [])

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <GoPlusCircle size={20} cursor="pointer" />
            </Dialog.Trigger>
        
            <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>Adicionar {title}</Dialog.Title>
        
                <Flex direction="column" gap="3">
                    <label>
                        <Select.Root onValueChange={value => setNewItem(value)}>
                            <Select.Trigger placeholder="Adicione" />
                            <Select.Content>
                                {entities?.map(entity => <Select.Item value={entity.id} key={entity.id}>{entity.nome}</Select.Item>)}
                            </Select.Content>
                        </Select.Root>
                    </label>
                </Flex>
        
                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancelar
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={saveNewItem}>Salvar</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
  )
}

export default DialogStudent