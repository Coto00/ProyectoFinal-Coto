const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("body");

window.addEventListener("scroll", function(){
        if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll")
        }
        else{
        header.classList.remove("scroll")
        }
}) //**Scroll cambio de color del nav */

let Carrito = [];

productos.forEach((product) => {
        let contenido = document.createElement("div");
        contenido.className = "articulo"
        contenido.innerHTML = `
        <img src="${product.img}">
        <div class="informacion">
        <p>${product.nombre}</p>
        <p class="precio">${product.precio}$</p>
        </div>`;

        contenedor.append(contenido); //**Crea tarjeta en html de cada producto */



        let botonComprar = document.createElement("button")
        botonComprar.className= "botonComprar"
        botonComprar.innerText= "Comprar";
        botonComprar.innerHTML= "Comprar";

        contenido.append(botonComprar);

        botonComprar.addEventListener("click", () => {

                const repeat = Carrito.some((repeatProduct)=> repeatProduct.id === product.id)
                console.log(repeat)
                if(repeat){
                        Carrito.map((prod)=> {
                                if(prod.id === product.id){
                                        prod.cantidad++
                                }
                        });
                }else{
                Carrito.push({
                        id : product.id,
                        img : product.img,
                        nombre : product.nombre,
                        precio : product.precio,
                        cantidad : product.cantidad,
                });
                }
                console.log(Carrito);
                carritoCounter();
                pintarCarrito();
        
        });



}) 

const verCarrito = document.getElementById("carrito")
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito")












































// function Producto(prenda, color, talle, nombre, precio) {
//         this.prenda = prenda;
//         this.color = color;
//         this.talle = talle;
//         this.nombre = nombre;
//         this.precio = precio;
// }
// let tallesRemera = ["XS", "S", "M", "L", "XL", "XXL"];
// let ProductoRemera1 = new Producto("remera", "rosa", tallesRemera, "HappyInside", 199.99);
// let ProductoRemera2 = new Producto("remera", "negro", tallesRemera, "Nature", 299.99);
// let ProductoRemera3 = new Producto("remera", "negro", tallesRemera, "BrokenHeart", 399.99);
// let ProductoRemera4 = new Producto("remera", "negro", tallesRemera, "Emilia", 499.99);
// let ProductoRemera5 = new Producto("remera", "negro", tallesRemera, "Tupac", 599.99);
// let ProductoRemera6 = new Producto("remera", "blanco", tallesRemera, "Tortuga", 699.99);
// let ProductoRemera7 = new Producto("remera", "naranja", tallesRemera, "Summer", 799.99);
// let ProductoRemera8 = new Producto("remera", "negro", tallesRemera, "1975", 899.99);

// //**array de productos */
// let listaProductos = [ProductoRemera1, ProductoRemera2, ProductoRemera3, ProductoRemera4, ProductoRemera5, ProductoRemera6, ProductoRemera7, ProductoRemera8];
// //**mostrar lista */
// console.log(listaProductos)






// let Carrito = []

// const botonComprar = document.getElementsByClassName("botonComprar")

// for (let i = 0; i < botonComprar.length; i++) {
//         botonComprar[i].addEventListener('click', function() {
//         ProductoAgregado();
// });
// }
// function ProductoAgregado() {
//         Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Agregado al Carrito",
//         showConfirmButton: false,
//         timer: 1000
//         });
// }



// //**guarda array en localstorage */
// localStorage.setItem('listaProductos', JSON.stringify(listaProductos));


// let ProductosGuardados = localStorage.getItem("listaProductos")









