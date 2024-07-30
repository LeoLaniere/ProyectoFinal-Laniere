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

const listaPrendaVenta= [pantalonShortSlim, pantalonShortTheKing, remeraOversizeNegra, remeraMusculosaRoja]
const listaCarroCompra=[]

function generarCatalogo(lista) {
    let contCatalogo=0
    let CatalogoPrenda = "\n";
    for (var prenda of lista){
        contCatalogo++;
        CatalogoPrenda += "Prenda "+ contCatalogo +":\n";
        CatalogoPrenda += "Nombre: "+ prenda.nombre+"\n";
        CatalogoPrenda += "Color: "+ prenda.color+"\n\n";
    }
    return CatalogoPrenda;   
}
let menu =parseInt (prompt ("Elija una opcion: \n 1-Catalogo de Prendas\n 2-Agregar al carrito de compras \n 3-Ver Carrito de Compras \n 4-Quitar del Carrito de Compras \n 5-Salir"))
while(menu !== 5) {
    switch(menu){

        case 1:
            alert("Catalogo de Prendas: \n" + generarCatalogo(listaPrendaVenta))
        break

        case 2:
            indiceCarrito=parseInt (prompt("Agregar al carrito de compras\n"+ generarCatalogo(listaPrendaVenta)))
                if (indiceCarrito >0 && indiceCarrito < listaPrendaVenta.length)
                    listaCarroCompra.push(listaPrendaVenta[indiceCarrito-1])
                else
                    alert("Opcion invalida!")
        break

        case 3:
            alert("Carrito de compras: \n" + generarCatalogo(listaCarroCompra))
        break

        case 4:
            let indiceQuitar=parseInt(prompt("Quitar de carrito de compras: \n"+ generarCatalogo(listaCarroCompra)))
            listaCarroCompra.splice(indiceQuitar-1,1)
        break

        case 5:
        break
            
        default:
            alert("opcion invalida!")
        }
        
    menu =parseInt (prompt ("Elija una opcion: \n 1-Catalogo de Prendas\n 2-Agregar al carrito de compras \n 3-Ver Carrito de Compras \n 4-Quitar del Carrito de Compras \n 5-Salir"))

}
