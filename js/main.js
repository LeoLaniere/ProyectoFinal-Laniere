const secciones =["Inicio", "carrito"]
let encabezado = document.getElementById("encabezado")

for (pagina of secciones){  

    let navLink=document.createElement("li")
    navLink.id =("nav__link")

    let nav__link__text = document.createElement("a")
    nav__link__text.id =("nav__link__text")
    nav__link__text.textContent=pagina
    if (pagina == ("Inicio")){
        nav__link__text.href=("./index.html")
    }
    else{
        nav__link__text.href=("./html/"+pagina+".html")
    }
    

    navLink.appendChild(nav__link__text)
    encabezado.appendChild(navLink)
}


class Prenda{
    static id = 0
    constructor(nombre, color, size, material, marca, bolsillos, precio){
        this.id= ++ Prenda.id
        this.nombre=nombre,
        this.color=color,
        this.size=size,
        this.material=material,
        this.marca=marca,
        this.bolsillos=bolsillos,
        this.precio=precio
    }
}
const pantalonShortSlim= new Prenda("Pantalon corto Slim Fit","Negro","M","jogging","shark","0","1200")
const pantalonShortTheKing= new Prenda("Pantalon The King","Gris","XL","jogging","shark","2","2000")
const remeraOversizeNegra= new Prenda("Remera Overzice Negra","Negro","L","Algodon","shark","0","3200")
const remeraMusculosaRoja= new Prenda("Remera Musculosa Roja","Rojo","M","Algodon","shark","0","4200")
const remeraMusculosaNegra= new Prenda("Remera Musculosa Negra","Negro","L","Algodon","shark","0","200")


const listaStockGen= [pantalonShortSlim, pantalonShortTheKing, remeraOversizeNegra, remeraMusculosaRoja, remeraMusculosaNegra]
const listaPrendaVenta= [pantalonShortSlim, pantalonShortTheKing, remeraOversizeNegra]
let listaCarroCompra=[]
if (JSON.parse(localStorage.getItem("cartProducts"))!==null){
    listaCarroCompra=JSON.parse(localStorage.getItem("cartProducts"))
}



let productos =document.getElementById("shop-productos")
function generarCatalogoShop(lista) {
    for (let prenda of lista){
        let articulo = document.createElement("article")

        let nombre = document.createElement("h4")
        nombre.textContent = "Nombre: " + prenda.nombre

        let color = document.createElement("div")
        color.textContent = "Color: " + prenda.color

        let precio = document.createElement("div")
        precio.textContent = "Precio: $ " + prenda.precio

        let boton = document.createElement("button")
        boton.id = ("boton-agregar-carrito"+prenda.id)
        boton.textContent = "Agregar al Carrito"
        boton.addEventListener("click", function() {
            if (!listaCarroCompra.includes(listaCarroCompra[prenda.id-1])){
            agregarALista(listaCarroCompra, listaPrendaVenta, prenda.id)
            localStorage.setItem("cartProducts", JSON.stringify(listaCarroCompra))
            }
        });
        articulo.appendChild(nombre)
        articulo.appendChild(color)
        articulo.appendChild(precio)
        articulo.appendChild(boton)
        productos.appendChild(articulo)
    }

}
let titulo = document.getElementById("title")
titulo.innerText="Tienda TitanFit"
generarCatalogoShop(listaPrendaVenta)


function agregarALista(listaAgregar, listaOrigen, numAg){
    listaAgregar.push(listaOrigen[numAg-1])
}

function quitarDeLista(listaQuitar, numQuit){
    listaQuitar.splice(numQuit-1,1)
}
function repetidoEnLista(listaOrg, listaComp, indListaOrg){
    return listaComp.includes(listaOrg[indListaOrg-1])
}
