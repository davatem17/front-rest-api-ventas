import Form from "../components/form_insert";
import 'bootstrap/dist/css/bootstrap.min.css';
import List from "../components/list";
import useGetVentas from "../hooks/useGetVentas";

const API = 'http://localhost/practica/controller/venta.php?opc=GetAll'; 

function App() {
  const getVentas = useGetVentas(API);
  
  return (
    <>
      <Form/>
      <div className="container">
            <table class="table">
      <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Producto</th>
      <th scope="col">Precio U</th>
      <th scope="col">Precio T</th>
    </tr>
  </thead>
      {getVentas.map(venta => (
         <List id = {venta.id} cantidad = {venta.cantidad} producto = {venta.producto} 
         precio_unit = {venta.precio_unit} precio_tot = {venta.precio_tot} id2 = {venta.id} key={venta.id}
         />
      )
      )}
    </table>
    </div>
     
    </>
  );
}

export default App;
