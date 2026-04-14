
const productos = [ { id: 1, nombre: "Mouse", categoria: "Periferico", precio: 50000,
stock: 10, ventas: 12 }, { id: 2, nombre: "Teclado", categoria: "Periferico", precio:
120000, stock: 5, ventas: 7 }, { id: 3, nombre: "Monitor", categoria: "Pantalla", precio:
800000, stock: 2, ventas: 4 }, { id: 4, nombre: "USB", categoria: "Accesorio", precio:
30000, stock: 0, ventas: 15 }, { id: 5, nombre: "Diadema", categoria: "Audio", precio:
90000, stock: 8, ventas: 6 } ];

function mostrarproductos(){
    console.log("lista de Productos: ");
    productos.forEach(p => console.log(p));
}

function stockBajo(){
    let resultado = productos.filter(p => p.stock <5);
    console.log(resultado)
}

function agotados(){
    return productos.filter(p => p.stock===0);
}

function nombrePrecio(){
    return productos.filter(p => p.nombre - p.precio );
}
function totalInventario(){
    let total = productos.reduce ((acc, p) => acc + (p.precio * p.stock), 0);
    console.log("total Inventario: ", total);
}
function totalVentas(){
    let total = productos.reduce ((acc, p) => acc + p.ventas, 0);
    console.log("Total Ventas: ", total )
}

function ordenarP(){
    return productos.sort((a, b) => a.precio - b.precio);   
}


function buscarP(nombre){
    return productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
}
function VerificarStock(){
    let HayAgotados = productos.some(p => p.stock === 0);
    let TodosConStock = productos.every(p => p.stock >0);
    console.log ("¿Hay Agotados?:", HayAgotados)
    console.log ("¿Todos tienen stock?: ", TodosConStock )
} 

function clasificarProducto(){
    let Rango;
    switch (true){
        case (precio <50000):
            Rango = "Economico";
        break;
        case (precio >= 50000 && precio <= 200000):
            Rango = "medio";
        break;
        default:
            Rango = "Alto";
    }
    console.log("Rango: ", Rangoango);


    }





function menu () {
    let opcion;
    do{
        opcion=prompt(
            "1. mostrat productos \n"  +
            "2. stock bajo \n"  +
            "3. agotados\n" +
            "4. total inventario \n" +
            "5. ordenar productos \n" +
            "6. buscar producto \n" +
            "7. verificar stock \n" +
            "8. Clasificacion de producto\n" +
            "9. total de ventas\n" +
            "10. Nombre - Precio \n" +
            "11. Salir"
        );

        switch (opcion) {
            case "1":
                mostrarProductos();
                break;
            case "2":
                stockBajo();
                break;
            case "3":
                agotados();
                break;
            case "4":
                nombrePrecio();
                break;
            case "5":
                ordenar();
                break;

            case"6":
                let nombre = prompt("ingrese producto")
                console.log(buscar(nombre));
                break;

            case"7":
             VerificarStock();
                break;

            case "8":
                clasificacionProducto();
                break;

            case"9":
                totalVentas();
                break;

            case"10":
                let nom=prompt("ingrese producto")
                console.log(nombrePrecio(nom));

                break;
            default:
                consol.log("Opcion invalida");

            }
    } while (opcion !== "11");
}

menu();

function disponiblesOrdenados() { 
    let resultado = productos .filter(p => p.stock > 0) .sort((a, b) => a.precio - b.precio); 
    console.log(resultado); } 

function mensajesReabastecimiento() { 
    let resultado = productos .filter(p => p.stock === 0) .map(p => `Reabastecer producto: ${p.nombre}`);
     console.log(resultado); } 
     
function dineroTotalStock() { 
    let total = productos.reduce((acc, p) => acc + (p.precio * p.stock), 0); 
    console.log("Dinero potencial:", total); }

    
function masVendido() { 
    let ordenados = [...productos].sort((a, b) => b.ventas - a.ventas);
     console.log("Más vendido:", ordenados[0]); }



function disponiblesOrdenados() {
    return productos
        .filter(p => p.stock > 0)
        .sort((a, b) => a.precio - b.precio);
}


function mensajesReabastecimiento() {
    return productos
        .filter(p => p.stock === 0)
        .map(p => `El producto ${p.nombre} está agotado. Solicitar reabastecimiento.`);
}



function valorTotalStock() {
    return productos
        .reduce((total, p) => total + (p.precio * p.stock), 0);
}



function productoMasVendido() {
    return productos
        .sort((a, b) => b.ventas - a.ventas)[0];
}

