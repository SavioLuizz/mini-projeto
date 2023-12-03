import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Text } from '@radix-ui/themes';
import StudentTableInfo from "../components/StudentTableInfo";

const Student = () => {
    let { id } = useParams();
    const [student, setStudent] = useState()
    const [libraries, setLibraries] = useState()
    const [subjects, setSubjects] = useState()

    const fetchStudent = async () => {
        const response = await fetch(`http://localhost:3001/students/${id}`)
        const json = await response.json()
        setStudent(json)
    }

    const fetchLibraries = async () => {
        const response = await fetch(`http://localhost:3001/libraries/student/${id}`)
        const json = await response.json()
        setLibraries(json)
    }

    const fetchSubjects = async () => {
        const response = await fetch(`http://localhost:3001/subjects/student/${id}`)
        const json = await response.json()
        setSubjects(json)
    }

    const fetchAll = () => {
        fetchStudent()
        fetchLibraries()
        fetchSubjects()
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return <div className="student-container">

        <Card asChild style={{ minWidth: 600 }}>
            <div>
                <Text as="div" size="7" weight="bold">{student?.nome}</Text>
                <Text as="div" color="gray" size="7">{student?.curso}</Text>
            </div>
        </Card>

        <StudentTableInfo subjects={subjects} libraries={libraries} refetch={fetchAll} />
    </div>
}

export default Student