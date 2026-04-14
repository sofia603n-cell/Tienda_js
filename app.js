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

menu()