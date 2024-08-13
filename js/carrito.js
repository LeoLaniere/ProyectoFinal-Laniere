listaCarroCompra=[]
if (localStorage.length !== 0){
    listaCarroCompra = JSON.parse(localStorage.getItem("cartProducts"))}

let titulo = document.getElementById("title")
titulo.innerText="Carrito TitanFit"


const secciones =["Inicio", "carrito"]
let encabezado = document.getElementById("encabezado")

for (pagina of secciones){  

    let navLink=document.createElement("li")
    navLink.id =("nav__link")

    let nav__link__text = document.createElement("a")
    nav__link__text.id =("nav__link__text")
    nav__link__text.textContent=pagina
    if (pagina == ("Inicio")){
        nav__link__text.href=("../index.html")
    }
    else{
        nav__link__text.href=("./"+pagina+".html")
    }

    navLink.appendChild(nav__link__text)
    encabezado.appendChild(navLink)
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

let productos =document.getElementById("carrito-productos")
function generarCatalogoCarrito(lista) {
    for (let prenda of lista){
        let articulo = document.createElement("article")

        let nombre = document.createElement("h4")
        nombre.textContent = "Nombre: " + prenda.nombre

        let color = document.createElement("div")
        color.textContent = "Color: " + prenda.color

        let precio = document.createElement("div")
        precio.textContent = "Precio: $" + prenda.precio

        let formulario = document.createElement("form")
        formulario.id=("formulario")
        formulario.innerHTML= ` <select id="cantidad${prenda.id}">
                                <option value="1"> 1</option>
                                <option value="2"> 2</option>
                                <option value="3"> 3</option>
                                <option value="4"> 4</option>
                                </select>`

        articulo.appendChild(nombre)
        articulo.appendChild(color)
        articulo.appendChild(precio)
        articulo.appendChild(formulario)
        productos.appendChild(articulo)
    }
    
    let botonCompra = document.createElement("button")
    botonCompra.id = ("boton-compra")
    botonCompra.textContent = "Comprar"
    let totalCompra =""
    botonCompra.addEventListener("click", function() {
        if (totalCompra == ""){
        totalCompra = document.createElement("div")
        totalCompra.id=("totalCompra")
        totalCompra.textContent=("El total de tu compra es de $"+sumaTotalCarrito())
        productos.appendChild(totalCompra)
        localStorage.clear()
        }
    })

    productos.appendChild(botonCompra)
}
generarCatalogoCarrito(listaCarroCompra)

