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
    material: "algodon",
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
const nombresPrendas=[]
const listaCarroCompra=[]

for(const producto of listaPrendaVenta){
    nombresPrendas.push(producto.nombre +"\n")
}

let CatalogoPrenda = "\n";
listaPrendaVenta.forEach((prenda, index) => {
    CatalogoPrenda += "Prenda "+ (index + 1) +":\n";
    CatalogoPrenda += "Nombre: "+ (prenda.nombre)+"\n";
    CatalogoPrenda += "Color: "+ (prenda.color) +"\n\n";
});

let menu =parseInt (prompt ("Elija una opcion: \n 1-Catalogo de Prendas\n 2-Agregar al carrito de compras \n 3-Ver Carrito de Compras \n 4-Quitar del Carrito de Compras \n 5-Salir"))
while(menu !== 5) {
    switch(menu){
        
        case 1:
            alert("Catalogo de Prendas: \n" + CatalogoPrenda)
            menu =parseInt (prompt ("Elija una opcion: \n 1-Catalogo de Prendas\n 2-Agregar al carrito de compras \n 3-Ver Carrito de Compras \n 4-Quitar del Carrito de Compras \n 5-Salir"))
        break

        case 2:
            indiceCarrito=parseInt (prompt("Agregar al carrito de compras\n"+ CatalogoPrenda))
                if (indiceCarrito >0 && indiceCarrito < listaPrendaVenta.length)
                    listaCarroCompra.push(listaPrendaVenta[indiceCarrito-1])
                else
                    alert("Opcion invalida!")
            menu =parseInt (prompt ("Elija una opcion: \n 1-Catalogo de Prendas\n 2-Agregar al carrito de compras \n 3-Ver Carrito de Compras \n 4-Quitar del Carrito de Compras \n 5-Salir"))
        break

        case 3:
            let carritoPrendas = "\n";
            listaCarroCompra.forEach((prenda, index) => {
                carritoPrendas += "Prenda "+ (index+1) +":";
                carritoPrendas += " "+(prenda.nombre)+"\n\n";
            });
            alert("Carrito de compras: \n" + carritoPrendas)
            menu =parseInt (prompt ("Elija una opcion: \n 1-Catalogo de Prendas\n 2-Agregar al carrito de compras \n 3-Ver Carrito de Compras \n 4-Quitar del Carrito de Compras \n 5-Salir"))

        break
        case 4:
            let carritoQuitar = "\n";
            listaCarroCompra.forEach((prenda, index) => {
                carritoQuitar += "Prenda "+ (index+1) +":";
                carritoQuitar += " "+(prenda.nombre)+"\n\n";
            });
            let indiceQuitar=parseInt(prompt("Quitar de carrito de compras: \n"+ carritoQuitar))
            listaCarroCompra.splice(indiceQuitar-1,1)
            menu =parseInt (prompt ("Elija una opcion: \n 1-Catalogo de Prendas\n 2-Agregar al carrito de compras \n 3-Ver Carrito de Compras \n 4-Quitar del Carrito de Compras \n 5-Salir"))
        break

        case 5:
        break
            
        default:
            alert("opcion invalida!")
            menu =parseInt (prompt ("Elija una opcion: \n 1-Catalogo de Prendas\n 2-Agregar al carrito de compras \n 3-Ver Carrito de Compras \n 4-Quitar del Carrito de Compras \n 5-Salir"))
    }
}
