import React, { useEffect, useState } from 'react'

const Product = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const foodProducts = JSON.parse(localStorage.getItem('foodProducts'));
        setProducts(foodProducts);
    },[])

  return (
    <div className='card-container'>
        {
            products.map((p)=>(
                <div className="card" key={p.id}>
                    <img src={p.image} alt="" />
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <p>{p.price}</p>
                    <p>{p.category}</p>
                    <button>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Product