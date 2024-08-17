import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = (props) => {
  // console.log(props)

  let arr = [];

  const [products, setproducts] = useState([]);
  // console.log(products)
 const getAllData = async()=>{
    try {
      let res = await fetch('https://dummyjson.com/products?limit=0&skip=0')
      let data =await res.json()
      console.log(data.products)
      setproducts(data.products)
    } catch (error) {
      setproducts([])
    }
 }
useEffect(()=>{

  getAllData()

},[])


const handleClick = (obj,i)=>{
console.log(obj)
  props.getData(obj)
}
 


  return (
    <div className='row m-0 p-0 justify-content-center gap-2'>
     
    {
      products?.map((obj,i)=>{
        return <div key={obj.id} className="card " style={{width: '18rem'}} >
  <img src={obj.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title ">{obj.title}</h5>
    <p className="card-text ">{obj.price}</p>
    <Link state={obj} to="/view" className="btn btn-primary">View Detail</Link>
    <button className='btn btn-success ms-1' onClick={()=>handleClick(obj,i)}>Add to cart</button>
  </div>
</div>

      })
    }
    </div>
  )
}

export default Home

