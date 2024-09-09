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
        navLinkText.id =("nav__link__text")
        navLinkText.className=("nav__link__text")
        navLinkText.textContent=pagina
            if (pagina == ("Inicio")){
                navLinkText.href=("./index.html")
            }
            else{
                navLinkText.href=("./html/"+pagina+".html")
            }
        navLink.appendChild(navLinkText)
        navBar.appendChild(navLink)
        let navLinkClonado = navLink.cloneNode(true)
        navFooter.appendChild(navLinkClonado)
    }


let titulo = document.createElement("h1")
titulo.id="encabezado__titulo"
titulo.className="encabezado__titulo"
titulo.innerText="Tienda TitanFit"
encabezado.appendChild(titulo)

const containerApi = document.getElementById("containerApi");
containerApi.className="containerApi"

let listaCarroCompra=[]
if (JSON.parse(localStorage.getItem("cartProducts"))!==null){
    listaCarroCompra=JSON.parse(localStorage.getItem("cartProducts"))
}


fetch("./db/data.json")
.then(response => response.json())
.then (data => {
    let container = document.createElement("section")
    container.className="container text-center"
    let columna= document.createElement("div")
    columna.className="row row-cols-1 row-cols-md-2 g-2"

    const prendas = data.prendas;
        prendas.forEach(prenda => {
            let image = document.createElement("img")
            image.className="img-fluid"
            image.src="./assets/shop/"+prenda.img

            let articulo = document.createElement("article")
            articulo.id="card-prenda"
            articulo.className="card-prenda"

            let nombre = document.createElement("h4")
            nombre.className="card__Name"
            nombre.textContent = prenda.nombre
    
            let colorDesc = document.createElement("div")
            colorDesc.className="card__colorDesc"
            colorDesc.textContent = "Color: " + prenda.color
    
            let precio = document.createElement("div")
            precio.className="card__precio"
            precio.textContent = "Precio: $ " + prenda.precio
    
            let boton = document.createElement("button")
            boton.id = ("boton-agregar-carrito"+prenda.id)
            boton.className="card__boton"
            boton.textContent = "Agregar al Carrito"
            boton.addEventListener("click", function() {

                if (!listaCarroCompra.find(item => item.id === prenda.id)){
                    prenda.enCarrito+=1
                    listaCarroCompra.push(prenda)
                    localStorage.setItem("cartProducts", JSON.stringify(listaCarroCompra))
                    toastAgregadoCarrito()}
                else{
                    if(listaCarroCompra.find(item => item.id === prenda.id).enCarrito<4){
                        listaCarroCompra.find(item => item.id === prenda.id).enCarrito+=1
                        localStorage.setItem("cartProducts", JSON.stringify(listaCarroCompra))
                        toastAgregadoCarrito()
                    }
                    else{
                        toastMaximoCarrito()
                    }
                }
            })
            articulo.appendChild(image)
            articulo.appendChild(nombre)
            articulo.appendChild(colorDesc)
            articulo.appendChild(precio)
            articulo.appendChild(boton)
            columna.appendChild(articulo)
            container.appendChild(columna)
            containerApi.appendChild(container)
            
})})


.catch(error => console.error("Error:", error))



function toastAgregadoCarrito(){
    Toastify({
        text: "Producto agregado al Carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: false, 
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
 
    }).showToast();
}

function toastMaximoCarrito(){
    Toastify({
        text: "Llegaste al Maximo disponible de este producto",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: false,
        style: {
        background: "linear-gradient(to right, #c71e00, #f36262)",
        },
    }).showToast();
}
