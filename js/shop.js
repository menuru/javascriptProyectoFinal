function shop() {
  mostrarProductos();

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

  var containerUYUPrice = document.getElementById("cotizacion");
  fetch("https://cotizaciones-brou.herokuapp.com/api/currency/latest/")
    .then((response) => response.json())
    .then((data) => {
      var precioVenta = parseFloat(data.rates.USD.sell);

      var precioTotal = precioVenta * parseFloat(productos[0].precio);

      console.log(precioTotal);

      const venta = document.createElement("div");
      venta.innerHTML = `<h5>Valor del dolar actualmente:</h5><p class='price'>UY $${precioVenta}</p>`;

      cotizacion.append(venta);
    });

  var whatsappButtonJS = document.getElementById("whatsappButton");
  const wspButton = document.createElement("a");
  wspButton.innerHTML = `<a href="https://api.whatsapp.com/send/?phone=xxxx&text=Hola, me gustaría saber si aún tienen stock de este producto: ${productos[0].nombre}"
  target="_blank" class="menu"> <i class="fi-rr-smartphone"></i> Contactanos</a> `;

  whatsappButtonJS.append(wspButton);
}


{/* <a href="https://api.whatsapp.com/send/?phone=xxxx&text=Hola, me gustaría saber si aún tienen stock de este producto: {producto.nombre}"
    target="_blank" class="menu"> <i class="fi-rr-smartphone"></i> Contactanos</a> */}