import React from 'react'

function Product({name,price,description,isDiscount,Discount,isSale}) {
  return (
    <div className='product'>
      
      <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
      <div className="content">
      <h2>{name}</h2>
      <span>⭐⭐⭐⭐⭐</span>
      <p> {isDiscount && <span><del>{Discount}$</del> - </span>} {price}$</p>
      <p>{description}</p>
      <button>Add to Card</button>
      </div> {isSale && <span id='sale'>Sale</span>}
    </div>
  )
}

export default Product