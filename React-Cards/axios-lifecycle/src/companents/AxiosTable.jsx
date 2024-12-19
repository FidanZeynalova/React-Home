import axios from "axios"
import { useEffect } from "react"
import React, { useState } from 'react'

function AxiosTable() {
    let [datas, setDatas] = useState([])
    let [show, setShow] = useState(true)
    let [name, setName] = useState("")
    let [price, setPrice] = useState("")
    let [stock, setStok] = useState("")
    let [display,setDisplay] = useState("none")


    function getData() {
        axios.get("https://northwind.vercel.app/api/products")
            .then(res => {
                setDatas(res.data)
                setShow(false)
            })
    }
    async function handleDelete(id) {
        await axios.delete("https://northwind.vercel.app/api/products/" + id)
            .then(() => {
                let filtered = datas.filter(data => data.id !== id)
                setDatas(filtered)
            })

    }
    async function handleAddForm(e) {
        e.preventDefault()
        let newData = {
            name: name,
            unitPrice: price,
            unitsInStock: stock
        }
        await axios.post("https://northwind.vercel.app/api/products", newData)
            .then((res) => setDatas([...datas, res.data]))
     setName("")
     setPrice("")
     setStok("")
     setDisplay("none")
        console.log(newData);
        console.log(newData);

    }
    function handleAdd(){
        if(display = "none"){
            setDisplay("block")
        }
    }
    function handleExit() {
        setDisplay("none")
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="table-container">
            <h1>North Wind Datalari</h1>
            <form onSubmit={(e) => handleAddForm(e)} style={{display:display}}>
                <h1>Add Form</h1>
                <div className="inputs">
                    <input type="text" required placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="number" required placeholder="unitPrice..." value={price} onChange={(e) => setPrice(e.target.value)} />
                    <input type="number" required placeholder="unitsInStock..." value={stock} onChange={(e) => setStok(e.target.value)} />
                </div>
                <button>Add</button>
            <div className="exit" onClick={()=>handleExit()}><h4>X</h4></div>
            </form>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                {
                    show ? (
                        <div className="loader-div">
                            <div className="loader"></div>
                        </div>
                    ) : (
                        datas.map(data => {
                            return <tr key={data.id} style={{ color: data.discontinued ? "red" : data.unitsInStock > 10 ? "green" : "black" }}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.unitPrice}$</td>
                                <td >{data.unitsInStock}</td>
                                <td><button onClick={() => handleDelete(data.id)}>Delete</button></td>
                                <td><button>Edit</button></td>
                            </tr>
                        })
                    )
                }
            </table>
            <div className="add" onClick={()=>handleAdd()}><h1>+</h1></div>
            <div className="overlay" style={{display:display}}></div>
        </div>
    )
}

export default AxiosTable
