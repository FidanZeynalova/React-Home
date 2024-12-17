import React, { useState } from 'react'
import students from "./Students";

function AddForm() {
    let [myStudents, setMyStudents] = useState(students)
    let [newStudentName, setNewStudentName] = useState("")
    function handleDelete(id) {
        let filtered = myStudents.filter(student => student.id !== id)
        setMyStudents(filtered)
    }
    function handleSubmit(e) {
        e.preventDefault();
        let newStudent = {
            id: myStudents.length + 1,
            name: newStudentName
        }
        console.log([...myStudents, newStudent]);

        setMyStudents([...myStudents, newStudent])
        setNewStudentName("")
    }

    return (
        <div className='addForm'>
            <h1>Add Student Form</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder='add name'
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)} />
                <button>Add</button>
            </form>
            <ol className='form'>
                {
                    myStudents.map((student, index) => (
                        <li key={student.id} >
                            {student.name}
                            <button onClick={() => handleDelete(student.id)}>Delete</button></li>

                    ))}
            </ol>
        </div>
    )
}

export default AddForm
