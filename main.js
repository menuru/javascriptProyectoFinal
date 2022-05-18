function init() {
  mostrarProductos();




const nodoBtnOfertass = document.querySelector("#btnOfertas");

nodoBtnOfertas.addEventListener("click", () => {

  Swal.fire(
    '¡Lo siento!',
    'Aún no tenemos ofertas para tí...',
    'info',
  )
});


function mostrarProductos() {
  const cProducto = document.getElementById("shopProducts");
  cProducto.setAttribute("class", "container-xl");

  cProducto.innerHTML = `
  `;

  document.body.appendChild(cProducto);

  productos.forEach((producto) => {
    const pProducto = document.createElement("div");
    pProducto.setAttribute("class", "container-xl");
    pProducto.innerHTML = `
     <div class="col mb-4">
     <div class="card">
       <img src="./img/${producto.id}.jpg" class="card-img-top" alt="${producto.nombre}">
       <div class="card-body">
         <h5 class="card-title">${producto.nombre}</h5>
         <p class="card-text">  <div class='precioProducto'>u$s ${producto.precio}</div>
         <div class='stockProducto'>Stock: ${producto.stock}</div></p>
       </div>
     </div>
   </div>`;

    document.body.appendChild(pProducto);
  });

  const hrSeparador = document.createElement("hr");
  hrSeparador.setAttribute("class", "separadorProducto");

  // hrSeparador.innerHTML = `<hr>`;

  document.body.appendChild(hrSeparador);

  // console.log(document.body.appendChild(pProducto))
}

// function borrarElemento(id){
//   let mapped = productos.map((element)=>element.id);
//   let index = mapped.indexOf(id);
//   usuarios.splice(index, 1)

//   console.log(productos);
// }

const nodoBtn = document.querySelector("#btn");

nodoBtn.addEventListener("click", () => {
  mostrarProductos();
  // const botonTest = document.createElement("p");
  // botonTest.setAttribute("class", "producto");
  // botonTest.innerHTML =
  //   `${productos[1].nombre}`;
  // document.body.appendChild(botonTest);
});

// Productos en el sistema
class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.stock = parseFloat(stock);
  }
}

const nodoBtnActualizar = document.querySelector("#btn2");

nodoBtnActualizar.addEventListener("click", () => {
  productos.push(
    new Producto({
      id: productos.length - 1,
      nombre: prompt("Ingrese el nombre de el producto"),
      precio: parseFloat(prompt("Ingrese el precio de el producto")),
      stock: parseFloat(prompt("Ingrese el stock de el producto")),
    })
  );
  console.log(productos.nombre);

  mostrarProductos();
});

const nodoBtnasdsa = document.querySelector("#btn3");

nodoBtnasdsa.addEventListener("click", () => {
  console.log("hola amigo");
});

const nodoBtnMostrar = document.querySelector("#btn4");

nodoBtnMostrar.addEventListener("click", () => {
  productos.forEach((producto) => {
    productos.shift();
  });
  mostrarProductos();
});



}