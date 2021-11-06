import React from 'react'

const Items = () => {
    return ( 
        <form>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Cantidad</label>
                <input type="number" class="form-control" id="exampleFormControlInput1"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Prodcuto</label>
                <input type="text" class="form-control" id="exampleFormControlInput1"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Precio Unitario</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Precio Total</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" />
            </div>
        </form>
     );
}
 
export default Items;