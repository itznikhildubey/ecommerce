import React from 'react'

const Cart = (props) => {
  console.log(props.cartArr)

  const handleDelte=(obj,i)=>{
    console.log(i)
   let copyarr=[...props.cartArr]
    copyarr.splice(i,1)
    props.cart(copyarr)
    


  }
  return (
    <div>
<table className="table align-middle">
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Product</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {props.cartArr.map((ele,index)=>{
  return    <tr>
  <th scope="row">{index+1}</th>
  <td><img style={{width:"150px", height:"150px"}} src={ele.thumbnail} alt="" /></td>
  <td>{ele.title}</td>
  <td>{ele.price}</td>
  <td><button className='btn btn-info'>+</button>{ele.quantity} <button className='btn btn-info'>-</button> </td>
  <td><button className='btn btn-danger' onClick={()=>handleDelte(ele,index)}>delete</button></td>
</tr>
 })}

  </tbody>
</table>

    </div>
  )
}

export default Cart
