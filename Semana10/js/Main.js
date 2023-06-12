// PRODUCTOS
const productos = [
    // JABONES
    {
        id: "jabones-01",
        titulo: "Jabon 01",
        imagen: "../img/jabon1.jpeg",
        categoria: {
            nombre: "Jabones",
            id: "jabones"
        },
        precio: 5000
    },

    {
        id: "jabones-02",
        titulo: "Jabon 02",
        imagen:"../img/jabon2.JPG",
        categoria: {
            nombre: "Jabones",
            id: "jabones"
        },
        precio: 3000
    },
    {
        id: "jabones-03",
        titulo: "Jabon 03",
        imagen: "../img/jabon3.jpeg",
        categoria: {
            nombre: "Jabones",
            id: "jabones"
        },
        precio: 5000
    },
    {
        id: "jabones-04",
        titulo: "Jabon 04",
        imagen: "../img/jabon4.JPG",
        categoria: {
            nombre: "Jabones",
            id: "jabones"
        },
        precio: 3500
    },
    {
        id: "jabones-05",
        titulo: "Jabon 05",
        imagen: "../img/jabon5.JPG",
        categoria: {
            nombre: "Jabones",
            id: "jabones"
        },
        precio: 8000
    },
    // Velas
    {
        id: "velas-01",
        titulo: "Vela 01",
        imagen: "../img/velas.jpg",
        categoria: {
            nombre: "Velas",
            id: "velas"
        },
        precio: 5000
    },
    {
        id: "velas-02",
        titulo: "Vela 02",
        imagen: "../img/velas2.JPG",
        categoria: {
            nombre: "Velas",
            id: "velas"
        },
        precio: 3500
    },
    {
        id: "velas-03",
        titulo: "Vela 03",
        imagen: "../img/velas3.JPG",
        categoria: {
            nombre: "Velas",
            id: "velas"
        },
        precio: 10000
    },
    {
        id: "velas-04",
        titulo: "Velas  04",
        imagen: "../img/velas5.JPG",
        categoria: {
            nombre: "Velas",
            id: "velas"
        },
        precio: 7500
    },
    {
        id: "velas-05",
        titulo: "Velas Aromaticas 05",
        imagen: "../img/velasaromaticas.JPG",
        categoria: {
            nombre: "Velas",
            id: "velas"
        },
        precio: 7000
    },
    
    // Shampoo
    {
        id: "shampoo-01",
        titulo: "Shampoo 01",
        imagen: "../img/shampoo.JPG",
        categoria: {
            nombre: "Shampoo",
            id: "shampoo"
        },
        precio: 15000
    },
    {
        id: "shampoo-02",
        titulo: "Shampoo 02",
        imagen: "../img/shampoo2.JPG",
        categoria: {
            nombre: "Shampoo",
            id: "shampoo"
        },
        precio: 20000
    },
    {
        id: "shampoo-03",
        titulo: "Shampoo 03",
        imagen: "../img/shampoo3.JPG",
        categoria: {
            nombre: "Shampoo",
            id: "shampoo"
        },
        precio: 12500
    },

    //Tonicos Faciales
    {
        id: "tonico-01",
        titulo: "Tonico Facial 01",
        imagen: "../img/tonico1.JPG",
        categoria: {
            nombre: "Tonicos Faciales",
            id: "tonicos"
        },
        precio: 8000
    },
    {
        id: "tonico-02",
        titulo: "Tonico Facial 02",
        imagen: "../img/tonico2.JPG",
        categoria: {
            nombre: "Tonicos Faciales",
            id: "tonicos"
        },
        precio: 9000
    },
    {
        id: "tonico-03",
        titulo: "Tonico Facial 03",
        imagen: "../img/tonico3.JPG",
        categoria: {
            nombre: "Tonicos Faciales",
            id: "tonicos"
        },
        precio: 7600
    }

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
