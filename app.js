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