//Objetos
const pantalonShortSlim ={
    nombre: "Pantalon corto Slim Fit",
    color: "Negro",
    size: "M",
    material: "jogging",
    bolsillos: 2
}
const pantalonShortTheKing ={
    nombre: "Pantalon The King",
    color: "Gris",
    size: "XL",
    material: "jogging",
    bolsillos: 2
}
const remeraOversizeNegra ={
    nombre: "Remera Overzice Negra",
    color: "Negro",
    size: "L",
    material: "Algodon",
    bolsillos: 0
}
const remeraMusculosaRoja ={
    nombre: "Remera Musculosa Roja",
    color: "Rojo",
    size: "M",
    material: "Algodon",
    bolsillos: 0
}
const remeraMusculosaNegra ={
    nombre: "Remera Musculosa Negra",
    color: "Negro",
    size: "L",
    material: "Algodon",
    bolsillos: 0
}

const listaStockGen= [pantalonShortSlim, pantalonShortTheKing, remeraOversizeNegra, remeraMusculosaRoja, remeraMusculosaNegra]
const listaPrendaVenta= [pantalonShortSlim, pantalonShortTheKing, remeraOversizeNegra]
const listaCarroCompra=[]

function generarCatalogo(lista) {
    let contCatalogo=0
    let CatalogoPrenda = "\n";
    for (let prenda of lista){
        contCatalogo++;
        CatalogoPrenda += "Prenda "+ contCatalogo +":\n";
        CatalogoPrenda += "Nombre: "+ prenda.nombre+"\n";
        CatalogoPrenda += "Color: "+ prenda.color+"\n\n";
    }
    return CatalogoPrenda;
}

function agregarALista(listaAgregar, listaOrigen, numAg){
    listaAgregar.push(listaOrigen[numAg-1])
}

function quitarDeLista(listaQuitar, numQuit){
    listaQuitar.splice(numQuit-1,1)
}
function repetidoEnLista(listaOrg, listaComp, indListaOrg){
    return listaComp.includes(listaOrg[indListaOrg-1])
}

let menu =parseInt (prompt ("Elija una opcion: \n 1-Catalogo de Prendas\n 2-Agregar al carrito de compras \n 3-Ver Carrito de Compras \n 4-Quitar del Carrito de Compras \n 5-Agregar articulo a Catalogo de Venta \n 6-Quitar articulo de Catalogo de Venta \n 7-Salir"))
while(menu !== 7) {
    switch(menu){

        case 1:
            alert("Catalogo de Prendas: \n" + generarCatalogo(listaPrendaVenta))
        break

        case 2:
            let indiceCarrito=parseInt (prompt("Agregar al carrito de compras\n"+ generarCatalogo(listaPrendaVenta)))
                if (indiceCarrito >0 && indiceCarrito <= listaPrendaVenta.length)
                    agregarALista(listaCarroCompra, listaPrendaVenta, indiceCarrito)
                else
                    alert("Opcion invalida!")
        break

        case 3:
            alert("Carrito de compras: \n" + generarCatalogo(listaCarroCompra))
        break

        case 4:
            let indiceQuitar=parseInt(prompt("Quitar de carrito de compras: \n"+ generarCatalogo(listaCarroCompra)))
            if (indiceQuitar >0 && indiceQuitar <= listaCarroCompra.length)
                quitarDeLista(listaCarroCompra, indiceQuitar)
            else
                alert("Opcion invalida!")

        break

        case 5:
            let indiceAgregar=parseInt (prompt("Agregar articulo a Catalogo de Venta\n"+ generarCatalogo(listaStockGen)))
            if (indiceAgregar >0 && indiceAgregar <= listaStockGen.length)
                if (repetidoEnLista(listaStockGen, listaPrendaVenta, indiceAgregar))
                    alert("La prenda ya esta a la Venta")
                else
                    agregarALista(listaPrendaVenta, listaStockGen, indiceAgregar)
            else
                alert("Opcion invalida!")
        break
        case 6:
            let indiceQuitarVenta=parseInt(prompt("Quitar de Catalogo de Venta: \n"+ generarCatalogo(listaPrendaVenta)))
            if (indiceQuitarVenta >0 && indiceQuitarVenta <= listaPrendaVenta.length)
                quitarDeLista(listaPrendaVenta, indiceQuitarVenta)
            else
                alert("Opcion invalida!")
        break

        case 7:
        break
            
        default:
            alert("opcion invalida!")
        }
        
    menu =parseInt (prompt ("Elija una opcion: \n 1-Catalogo de Prendas\n 2-Agregar al carrito de compras \n 3-Ver Carrito de Compras \n 4-Quitar del Carrito de Compras \n 5-Agregar articulo a Catalogo de Venta \n 6-Quitar articulo de Catalogo de Venta \n 7-Salir"))

}
