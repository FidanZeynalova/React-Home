import axios from "axios";
import { useEffect, useState } from "react";

function AxiosTable() {
    // UseState teyin olunmuslar
    let [datas, setDatas] = useState([]);
    let [show, setShow] = useState(true);
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [stock, setStok] = useState("");
    let [display, setDisplay] = useState("none");
    let [editDisplay, setEditDisplay] = useState("none");
    let [editId, setEditId] = useState("");

    // Datalari getirmek
    function getData() {
        axios.get("https://northwind.vercel.app/api/products")
            .then(res => {
                setDatas(res.data);
                setShow(false);
            });
    }

    // Delete 
    async function handleDelete(id) {
        await axios.delete(`https://northwind.vercel.app/api/products/${id}`)
            .then(() => {
                let filtered = datas.filter(data => data.id !== id);
                setDatas(filtered);
            });
    }

    // Add formu 
    async function handleAddForm(e) {
        e.preventDefault();
        let newData = {
            name: name,
            unitPrice: price,
            unitsInStock: stock,
        };
        await axios.post("https://northwind.vercel.app/api/products", newData)
            .then((res) => setDatas([...datas, res.data]));
        setName("");
        setPrice("");
        setStok("");
        setDisplay("none");
    }

    // Edit (datani block etmek)
    function handleEdit(id) {
        setEditId(id);
        setEditDisplay("block");
        let editData = datas.find(data => data.id == id);
        setName(editData.name);
        setPrice(editData.unitPrice);
        setStok(editData.unitsInStock);
    }

    // Edit form submit
    async function handleEditForm(e) {
        e.preventDefault();
        const updateData = {
            name: name,
            unitPrice: price,
            unitsInStock: stock,
        };

        await axios.put(`https://northwind.vercel.app/api/products/${editId}`, updateData)
            .then((res) => {
                let updatedDatas = datas.map(data =>
                    data.id == editId ? res.data : data
                );
                setDatas(updatedDatas);
            });

        setName("");
        setPrice("");
        setStok("");
        setEditDisplay("none");
    }

    // form blockdusa none etmek nonedirse block etmek
    function handleAdd() {
        if (display == "none") {
            setDisplay("block");
        }
    }

    // formu baglamaq (exit)
    function handleExit() {
        setDisplay("none");
    }

    // UseEffect hissesi
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="table-container">
            <h1>North Wind Datalari</h1>

            {/* Add Form */}
            <form onSubmit={handleAddForm} style={{ display: display }}>
                <h1>Add Form</h1>
                <div className="inputs">
                    <input type="text" required placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <input type="number" required placeholder="unitPrice..." value={price} onChange={(e) => setPrice(e.target.value)}
                    />
                    <input type="number" required placeholder="unitsInStock..." value={stock} onChange={(e) => setStok(e.target.value)}
                    />
                </div>
                <button>Add</button>
                <div className="exit" onClick={handleExit}><h4>X</h4></div>
            </form>

            {/* Edit Form */}
            <form onSubmit={handleEditForm} style={{ display: editDisplay }} className="editForm">
                <h1>Edit Form</h1>
                <div className="inputs">
                    <input type="text" required placeholder="New Name..." value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <input type="number" required placeholder="New unitPrice..." value={price} onChange={(e) => setPrice(e.target.value)}
                    />
                    <input type="number" required placeholder="New unitsInStock..." value={stock} onChange={(e) => setStok(e.target.value)}
                    />
                </div>
                <button>Submit</button>
                <div className="exit" onClick={() => setEditDisplay("none")}><h4>X</h4></div>
            </form>

            {/* Datalari gosteren table */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {show ? (
                        <div className="loader-div">
                            <div className="loader"></div>
                        </div>
                    ) : (
                        datas.map(data => (
                            <tr
                                key={data.id}
                                style={{
                                    color: data.discontinued ? "red" : data.unitsInStock > 10 ? "green" : "black",
                                }}
                            >
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.unitPrice}$</td>
                                <td>{data.unitsInStock}</td>
                                <td><button onClick={() => handleDelete(data.id)}>Delete</button></td>
                                <td><button onClick={() => handleEdit(data.id)}>Edit</button></td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <div className="add" onClick={() => handleAdd()}><h1>+</h1></div>
            <div className="overlay" style={{ display: display }}></div>
            <div className="overlay" style={{ display: editDisplay }}></div>
        </div>
    );
}

export default AxiosTable;
