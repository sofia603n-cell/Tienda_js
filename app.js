function generarReporte() {

    let masCaro = productos.reduce((max, p) => p.precio > max.precio ? p : max);

    let masBarato = productos.reduce((min, p) => p.precio < min.precio ? p : min);

  
    let masVendido = productoMasVendido();

    
    let totalInventario = valorTotalStock();

    
    let totalVentas = productos.reduce((total, p) => total + p.ventas, 0);

  
    let agotados = productos.filter(p => p.stock === 0).length;

    return {
        productoMasCaro: masCaro.nombre,
        productoMasBarato: masBarato.nombre,
        productoMasVendido: masVendido.nombre,
        valorTotalInventario: totalInventario,
        totalUnidadesVendidas: totalVentas,
        productosAgotados: agotados
    };
}