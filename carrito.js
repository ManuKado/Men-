let carritoArray = []

const carrito = (producto, precio) => {
    carritoArray.push({producto: producto, precio: precio})
    document.getElementById("zonaCarrito").innerHTML = ``
}

const mostrarCarrito = () => {

    if(carritoArray.length > 0){
        let precioTotal = 0
        for (let i = 0; i < carritoArray.length; i++) {
            precioTotal += carritoArray[i].precio
        }

        document.getElementById("zonaCarrito").innerHTML = ``
        document.getElementById("zonaCarrito").innerHTML = `<br>
        <div class="row d-flex justify-content-center">
        <div class="col-md-6">
            <h1 class="title">Carrito</h1>
            <table id="tabla" class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody id="lista">
                </tbody>
            </table>
            <div class="d-flex justify-content-between align-items-center">
            <div class="btn">
              <button type="button" class="btn btn-sm btn-outline-secondary">Pagar</button>
            </div>
          </div>
            </div>
            </div>
            `
    
        let tabla = document.getElementById("tabla")
        carritoArray.forEach(producto => {
            tabla.innerHTML += `
                <tr>
                    <td>${producto.producto}</td>
                    <td>$${producto.precio}</td>
                </tr>`
         });
         tabla.innerHTML += `
                <tr>
                    <td><strong>Precio total</strong></td>
                    <td>$${precioTotal}</td>
                </tr>
                `
        }
        else{alert("No hay productos en el carrito.")}
}