import React, { useState } from 'react'
import students from "./Students";

function AddForm() {
    let [myStudents, setMyStudents] = useState(students)
    let [newStudentName, setNewStudentName] = useState("")
    let [newStudentAge, setNewStudentAge] = useState("")
    let [btnText, setBtnText] = useState("Hide All Students")
    let [inputText, setInputText] = useState("")
    let [fontSize, setFontSize] = useState(20)


    function handleDelete(id) {
        let filtered = myStudents.filter(student => student.id !== id)
        setMyStudents(filtered)
    }
    function handleSubmit(e) {
        e.preventDefault();
        let newStudent = {
            id: myStudents.length + 1,
            name: newStudentName,
            age: newStudentAge
        }
        if(newStudentName.trim() == ""|| newStudentAge.trim() ==""){
            alert("bosluq qoyma")
        }else{
        setMyStudents([...myStudents, newStudent])

        }
        setNewStudentName("")
        setNewStudentAge("")
    }
    function handleSort() {
        let sorted = myStudents.toSorted((a, b) => a.age - b.age)
        let sort = myStudents.toSorted((a, b) => b.age - a.age)
        if (JSON.stringify(sort) == JSON.stringify(myStudents)) {
            setMyStudents(sorted)
        } else {
            setMyStudents(sort)
        }
    }
    function handleStudent() {
        if (JSON.stringify(myStudents) == JSON.stringify([])) {
            setMyStudents(students)
            setBtnText("Hide All Students")
        } else {
            setMyStudents([])
            setBtnText("Show All Students")
        }

    }
    function handleSearch(e) {
        let searchStudent = students.filter(student => student.name.toLocaleLowerCase().startsWith((e.target.value).toLocaleLowerCase()))
        setMyStudents(searchStudent);
        console.log(searchStudent);
    }
    function handleText(e) {
        setInputText(e.target.value)
    }
    function handleReset(e) {
        setInputText("")
        setFontSize(20)
    }
    function handleIncrease() {
        if (fontSize > 10) {
            setFontSize(fontSize - 1)
        }
    }
    function handleDecrease() {
        setFontSize((fontSize + 1))

    }

    return (
        <div className='addForm'>
            <h1>Add Student Form</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="inputs">
                    <input
                        type="text"
                        placeholder='add name'
                        value={newStudentName}
                        onChange={(e) => setNewStudentName(e.target.value)} />
                    <input type="number" value={newStudentAge}
                        onChange={(e) => setNewStudentAge(e.target.value)} />
                </div>
                <button>Add</button>

            </form>
            <div className="btns">
                <button onClick={() => handleSort()}>Sort</button>
                <button onClick={() => handleStudent()}>{btnText}</button>
                <input type="text" placeholder='Search...' onChange={(e) => handleSearch(e)} />
            </div>
            <ol className='form'>
                {
                    myStudents.map((student, index) => (
                        <li key={student.id} >
                            {student.name},
                            {student.age}
                            <button onClick={() => handleDelete(student.id)}>Delete</button></li>

                    ))}
            </ol>
            <hr />
            <div className="search-input">
                <input type="text" placeholder='add text' value={inputText} onChange={(e) => handleText(e)} />
                <p>Inputun Text - <span> {inputText}</span></p>
                <button onClick={() => handleReset()}>Reset</button>
            </div>
            <hr />
            <div className="control-fontSize"></div>
            <span style={{ fontSize: fontSize + "px" }}>Adjust my font size!</span>
            <div className="btns">
                <button onClick={() => handleIncrease()}>Increase</button>
                <button onClick={() => handleDecrease()}>Decrease</button>
                <button onClick={() => handleReset()}>Reset</button>
            </div>
        </div>
    )
}

export default AddForm
