import React from "react";
import './table.css'

const Table = (props) => {
    const {restaurants }= props;
    return (
        
<table className="tablel" style={{ width:"100%" }}>
  <tr>
    <th>Name</th>
    <th>Address</th> 
    <th>Price</th>
    <th>area</th>
    <th>postal_code</th>
    <th>state</th>
  </tr>
  
    {restaurants.map(item => {
      return (
          <tr>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.price}</td>
              <td>{item.area}</td>
              <td>{item.postal_code}</td>
              <td>{item.state}</td>
          </tr>
      )
  } )}
  
</table>
    )
}

export default Table;