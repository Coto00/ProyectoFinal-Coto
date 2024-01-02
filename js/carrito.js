const pintarCarrito = () => {
        modalContainer.innerHTML = ""
        modalContainer.style.display = "flex";
        const modalHeader = document.createElement("div")
        modalHeader.className = "modal-header"
        modalHeader.innerHTML=`
        <h1 class="modal-header-title">Tu Carrito</h1>
        `;
        modalContainer.append(modalHeader)

        const modalbutton = document.createElement("h1");
        modalbutton.innerText ="x"
        modalbutton.className = "modal-header-button";

        modalbutton.addEventListener("click", () => {
                modalContainer.innerHTML = ""
                modalContainer.style.display = "none";
        })

        modalHeader.append(modalbutton)


        Carrito.forEach((product) => {
                let carritoContent = document.createElement("div")
                carritoContent.className= "modal-header"
                carritoContent.innerHTML= `

                <h3>${product.nombre}</h3>
                <p>${product.cantidad}x</p>
                <p>$${product.precio}</p>
                `; //!no se ve la imagen en el carrito <img src"${product.img}"> 

                modalContainer.append(carritoContent)

                let eliminar = document.createElement("span")  //**boton eliminar producto del carrito */

                eliminar.innerText = "❌"
                eliminar.className = "delete-product"
                carritoContent.append(eliminar);

                eliminar.addEventListener("click", eliminarProducto)
        })
        

        const total = Carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

        const totalBuying = document.createElement("div")
        totalBuying.className= "total-content";
        totalBuying.innerHTML= `total a pagar: ${total} $`;
        modalContainer.append(totalBuying)
}
verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = () => {
        const foundId = Carrito.find((element)=> element.id);

        Carrito = Carrito.filter((carritoId) => {
                return carritoId !== foundId;
        });
        carritoCounter();
        pintarCarrito();
}; //**elimina producto del carrito*/


const carritoCounter = () => {
        cantidadCarrito.style.display = "block";
        cantidadCarrito.innerText = Carrito.length
}//**contador de productos en el carrito */