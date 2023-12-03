import React, { useEffect,useState } from 'react'
import { TextField } from '@radix-ui/themes';
import { PiMagnifyingGlassBold  } from 'react-icons/pi'

import TableStudents from '../components/TableStudents'

function App() {
  //       GET       SET
  const [students, setStudents] = useState()
  const [cursoFilter, setCursoFilter] = useState("")

  const fetchStudents = async () => {
    const response = await fetch(`http://localhost:3001/students?curso=${cursoFilter}`)
    const json = await response.json()
    setStudents(json)
  }

  useEffect(() => {
    fetchStudents()
  }, [cursoFilter])

  return (
    <div className="container">
      <h2>Estudantes</h2>
      
      <div className="table-container">
        <TextField.Root onChange={event => setCursoFilter(event.target.value)}>
          <TextField.Slot>
            <PiMagnifyingGlassBold size={16} />
          </TextField.Slot>
          <TextField.Input placeholder="Buscar por curso..." />
        </TextField.Root>
      </div>

      <TableStudents students={students} />
    </div>
  )
}

export default App