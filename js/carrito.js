listaCarroCompra=[]
if (localStorage.length !== 0){
    listaCarroCompra = JSON.parse(localStorage.getItem("cartProducts"))}



const secciones =["Inicio", "carrito"]
let encabezado = document.getElementById("encabezado")

encabezado.innerHTML=
        `<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            </div>
        </div>
        </nav>`

    for (pagina of secciones){  
        let navBar = document.getElementById("navbarNav")
        let navFooter= document.getElementById("navbarFooter")
        let navLink = document.createElement("li")
        navLink.id =("nav__link")
        navLink.className="nav__link"        
        let navLinkText = document.createElement("a")
        navLink.id =("nav__link__text")
        navLinkText.className=("nav__link__text")
        navLinkText.textContent=pagina
            if (pagina == ("Inicio")){
                navLinkText.href=("../index.html")
            }
            else{
                navLinkText.href=("../html/"+pagina+".html")
            }
        navLink.appendChild(navLinkText)
        navBar.appendChild(navLink)
        let navLinkClonado = navLink.cloneNode(true)
        navFooter.appendChild(navLinkClonado)
    }

function sumaTotalCarrito(){
    let acumTotal = 0
    let subTotal = 0
    for (prenda of listaCarroCompra){
        let cantidad = document.getElementById("cantidad"+prenda.id)
        subTotal= cantidad.value*prenda.precio
        acumTotal = acumTotal+subTotal
    }
    return acumTotal
}

let titulo = document.createElement("h1")
titulo.id="encabezado__titulo"
titulo.className="encabezado__titulo"
titulo.innerText="Carrito TitanFit"
encabezado.appendChild(titulo)

let productos =document.getElementById("carrito-productos")
function generarCatalogoCarrito(lista) {
    let cardCarrito = document.createElement("article")
    cardCarrito.className="card mb-3"
    cardCarrito.id="cardCarrito"
    let columnaCard = document.createElement("div")
    columnaCard.className="row g-0"
    columnaCard.id="columnaCarrito"
    for (let prenda of lista) {
        
        let colImgCard = document.createElement("div")
        colImgCard.id=("columnaImagenCard")
        colImgCard.className="col-md-4"

        let imagenCard = document.createElement("img")
        imagenCard.src="../assets/shop/"+prenda.img
        imagenCard.className="img-fluid rounded-start"

        let colTextCard=document.createElement("div")
        colTextCard.className="col-md-8"
        colTextCard.id="columnaTextoCard"

        let cardBody=document.createElement("div")
        cardBody.className="card-body"
        cardBody.id="cardBodyCarrito"

        let nombre = document.createElement("h4")
        nombre.textContent = "Nombre: " + prenda.nombre
        nombre.className="card-title"

        let color = document.createElement("div")
        color.textContent = "Color: " + prenda.color
        color.className="card-text"

        let precio = document.createElement("div")
        precio.textContent = "Precio Unitario: $" + prenda.precio
        precio.className="card-text"

        let texto = document.createElement("div")
        texto.textContent="Cantidad: "
        texto.className="card-text"

        let formulario = document.createElement("form")
        formulario.id = "formulario"
        formulario.className= "formulario"
        formulario.innerHTML = `
            
            <select id="cantidad${prenda.id}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>`

        const selectElement = formulario.querySelector(`#cantidad${prenda.id}`)

        if (selectElement) {
            selectElement.value = prenda.enCarrito
        } else {
            console.error(`No se encontró el elemento select con id cantidad${prenda.id}`)
        }

        cardBody.appendChild(nombre)
        cardBody.appendChild(color)
        cardBody.appendChild(precio)
        cardBody.appendChild(texto)
        cardBody.appendChild(formulario)

        colTextCard.appendChild(cardBody)

        colImgCard.appendChild(imagenCard)

        columnaCard.appendChild(colImgCard)
        columnaCard.appendChild(colTextCard)
        cardCarrito.appendChild(columnaCard)
       

        productos.appendChild(cardCarrito)

    }

    let botonCompra = document.createElement("button")
    botonCompra.id = ("boton-compra")
    botonCompra.className="boton-compra"
    botonCompra.textContent = "Comprar"
    botonCompra.addEventListener("click", function() {
        Swal.fire("El total de tu compra es de $"+sumaTotalCarrito());
        localStorage.clear()
        setTimeout(function(){
            window.location.href = "../index.html"
        },5000)
        }
    )

    productos.appendChild(botonCompra)
}

if (listaCarroCompra.length==0){
    let mensaje = document.createElement("p")
    mensaje.className="mensajeCarroVacio"
    mensaje.innerText="Tu carrito esta Vacio, agrega mas cosas a tu carrito para continuar con tu compra."
    productos.appendChild(mensaje)
}
else{
generarCatalogoCarrito(listaCarroCompra)

}