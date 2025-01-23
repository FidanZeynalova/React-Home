import React, { lazy, useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Dashboard() {
    let [products,setProducts] = useState([])
    let [loader,setLoader] = useState(true)


    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((res)=>{
            setProducts(res.data.products);
            setLoader(false)
        },[])
    })
   
  return (
    <>
        <div className="table-container">
        <h1>Product Table</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>(
                    <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}$</td>
                    <td>{product.category}</td>
                    <td><button class="btn edit-btn">Edit</button></td>
                    <td><button class="btn delete-btn">Delete</button></td>
                </tr>
                ))}
            </tbody>
            
        </table>
    </div>
    </>
  )
}

export default Dashboard
