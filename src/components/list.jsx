import React, { useState } from 'react'
import axios from 'axios';
import FormUpdate from './form_update';

const List = ({ id, cantidad, producto, precio_unit, precio_tot }) => {

  const [updateId, setUpdateId] = useState({
    id: id,
    cantidad: cantidad,
    producto: producto,
    precio_unit: precio_unit,
    precio_tot: precio_tot

  });

  

  const handleId = (id) => {
    setUpdateId({
      id: id,
      cantidad: cantidad,
      producto: producto,
      precio_unit: precio_unit,
      precio_tot: precio_tot
    });
    
  }

  const handleDeleteVenta = (id) => {
    
    const headers = {
      "Access-Control-Request-Method": "DELETE"
        };

        axios.delete(`http://localhost/practica/controller/venta.php?opc=DeleteP/`, id).then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        })
  }
  

    return ( 
       
  <>
  
  <tbody>
    <tr>
      
      <td>{id}</td>
      <td>{cantidad}</td>
      <td>{producto}</td>
      <td>{precio_unit}</td>
      <td>{precio_tot}</td>
      <td>
         <div className="row">
         
         </div>
      </td>
    </tr>
    
  </tbody>
  
  
</>
     );
}
 
export default List;