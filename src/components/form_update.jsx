import React, {useRef} from "react";
import axios from 'axios';

const FormUpdate = ({updateId}) => {
    const form = useRef(null);

    console.log(updateId.producto);
   

    const handleSubimit = () => {
        const formData = new FormData(form.current);
        const data = {
            id: parseInt(formData.get("id")),
            cantidad: parseInt(formData.get("cantidad")),
            producto: formData.get("producto"),
            precio_unit: parseFloat(formData.get("precio_unit")),
            precio_tot: parseFloat(formData.get("precio_tot"))
        }

        console.log(data);

        //const headers = {
        //    'Content-Type': 'text/plain'
        //};
//
        //axios.put('http://localhost/apidistribuidas/controller/venta.php?opc=Update', data, {headers}).then(function(response) {
        //    console.log(response);
        //}).catch(function(error) {
        //    console.log(error);
        //})
//
        //form.current.reset();

        
    }

  return (
    <form ref={form}>
        <div className="mb-3">
        <label htmlFor="id" className="form-label" >
          ID
        </label>
        
        <input
          type="number"
          name="id"
          className="form-control"
          id=""
          
        />
        
        
      </div>
      <div className="mb-3">
        <label htmlFor="cantidad" className="form-label">
          Cantidad
        </label>
        <input
          type="number"
          name="cantidad"
          className="form-control"
          id=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="producto" className="form-label">
          Prodcuto
        </label>
        <input type="text" name="producto" className="form-control" id="" value={updateId.producto} />
      </div>
      <div className="mb-3">
        <label htmlFor="precio_unit" className="form-label">
          Precio Unitario
        </label>
        <input
          type="number"
          name="precio_unit"
          className="form-control"
          id=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="precio_tot" className="form-label">
          Precio Total
        </label>
        <input
          type="number"
          name="precio_tot"
          className="form-control"
          id=""
        />
      </div>
      <button type="button" onClick={handleSubimit} className="btn btn-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-save2"
          viewBox="0 0 16 16"
        >
          <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
        </svg>{" "}
        Guardar
      </button>
    </form>
  );
};

export default FormUpdate;
