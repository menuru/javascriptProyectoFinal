function shop() {
  mostrarProductos();

  // swal de ofertas
  const nodoBtnOfertas = document.querySelector("#btnOfertas");

  nodoBtnOfertas.addEventListener("click", () => {
    Swal.fire("¡Lo siento!", "Aún no tenemos ofertas para tí...", "info");
  });

  function mostrarProductos() {
    var containerShop = document.getElementById("shopProducts");

    productos.forEach((producto) => {
      const pProducto = document.createElement("div");
      pProducto.setAttribute("class", "product-with-title");
      pProducto.innerHTML = `
                    <div class="product-box">
                        <img src="../img/${producto.id}.jpg" alt="${producto.nombre}" class="product-img card-image" loading="lazy" onerror="this.onerror=null; this.src='../img/noimage.png'">
                    </div>
                    <div class="card-info">
                        <h2 class="product-title">${producto.nombre}</h2>
                        <span class="price">u$s ${producto.precio}<br></span>
                        <span class="add-cart">Agregar a carrito <i class="fi fi-rr-check "></i></span>
                    </div>
                </div>
                
                `;

      containerShop.appendChild(pProducto);
    });
  }

  // Cotización del dolar en pesos uruguayos.
  var containerUYUPrice = document.getElementById("cotizacion");
  fetch("https://cotizaciones-brou.herokuapp.com/api/currency/latest/")
    .then((response) => response.json())
    .then((data) => {
      var precioVenta = parseFloat(data.rates.USD.sell);

      var precioTotal = precioVenta * parseFloat(productos[0].precio);

      // console.log(precioTotal); // Para verificar que realmente esté funcionando la lógica de calcular el valor en pesos uruguayos

      var venta = document.createElement("div");
      venta.innerHTML = `<h5>Valor del dolar actualmente:</h5><p class='price'>UY $${precioVenta}</p>`;

      cotizacion.append(venta);
    });

  // Acá quise realizar un link personalizado que tendría que tomar los valores del array del carrito para poder modificar los producto.nombre para realizar la consulta
  var whatsappButtonJS = document.getElementById("whatsappButton");
  const wspButton = document.createElement("a");
  wspButton.innerHTML = `<a href="https://api.whatsapp.com/send/?phone=xxxx&text=Hola, me gustaría saber si aún tienen stock de este producto: ${productos[0].nombre}"
  target="_blank" class="menu"> <i class="fi-rr-smartphone"></i> Contactanos</a> `;

  whatsappButtonJS.append(wspButton);





    // TODO EL CART
  // Cart
  let cartIcon = document.querySelector("#cart-button");
  let cart = document.querySelector(".cart");
  let closeCart = document.querySelector("#close-cart");
  // Open Cart
  cartIcon.onclick = () => {
    cart.classList.add("active");
    console.log("abierto");
  };
  // Close Cart
  closeCart.onclick = () => {
    cart.classList.remove("active");
    console.log("cerrar");
  };

  // Cart Working JS
  if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }

  // Hasta aca funciona

  function ready() {
    // Remove Items From Cart
    var removeCartButton = document.getElementsByClassName("cart-remove");
    console.log(removeCartButton);
    for (var i = 0; i < removeCartButton.length; i++) {
      var button = removeCartButton[i];
      button.addEventListener("click", removeCartItem);
    }

    // Actualizar cantidad
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener("change", quantityChanged);
    }
  }

  // Quantity Changes
  function quantityChanged(event) {
    var input = event.target;
    if (NaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatetotal();
  }

  //Remove Items fromm cart
  function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
  }

  // Update Total
  function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var cartDetails = cartBoxes.getElementsByClassName("detail-box")

    var total = 0;
    for (var i = 0; i < cartDetails.length; i++) {
      var cartDetail = cartDetails[i];
      var priceElement = cartDetails.getElementsByClassName("cart-price")[0];
      var quantityElement = cartDetails.getElementsByClassName("cart-quantity")[0];
      var price = parseFloat(priceElement.innerText.replace("$", ""));
      var quantity = quantityElement.value;
      total = total + price * quantity;

      document.getElementsByClassName(
        ("total-price"[0].innerHTML = "$" + total)
      );
    }
  }




  localStorage.setItem('bienvenida', '¡Hola Code!');
  localStorage.setItem('esValido', true);
  localStorage.setItem('unNumero', 20);


  let mensaje =  localStorage.getItem('bienvenida');
  let bandera =  localStorage.getItem('esValido');
  let numero  =  localStorage.getItem('unNumero');

console.log(mensaje); // ‘¡Hola Coder!’
console.log(bandera); // ‘true’
console.log(numero);  // ‘20’
}
