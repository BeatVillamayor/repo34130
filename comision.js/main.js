
//salida de datos console.log(); el arma secreta del programador
console.log("Inicio")
console.log(compraDeImplantes());

  while (opcion != 0){
    opcion = implantes(prompt("Ingrese Producto " + "ImplanteS"))

  switch (opcion){
         case "Implantes Shi":
            cantidad = parseInt(prompt("Cuantos Implantes Shi desea Comprar?"))
            if (resultado <= cantidad){
            total += (cantidad = ImplantesShi.precio);
            alert("El valor de su implante es de $" + total)
            }
            break;
  

        case "Implantes She":
            cantidad = parseInt(prompt("Cuantos Implantes She desea Comprar?"))
            if (resultado <= cantidad){
            total += (cantidad = ImplantesShe.precio);
               alert("El valor de su implante es de $" + total)
            }
            break;


            case "Implantes Sri":
              cantidad = parseInt(prompt("Cuantos Implantes Sri desea Comprar?"))
              if (resultado <= cantidad){
              total += (cantidad = ImplantesSri.precio);
              alert("El valor de su implante es de $" + total)
  }
            break;


         default:
        (prompt("Opcion no Valida presione boton Salir"))
          break;
  }

     console.log("Gracias Por Su Visita")
 }

    //array
      function compraDeImplantes(array , opcion){
      array.push(opcion)
   }

    //array suma
          function sumar(){
            let Totalcompra = total;
            alert("Total de la Compra es de: $" + Totalcompra)

          }
          //objetos

          function Producto(nombre, conexion, precio, stock){
              this.nombre = nombre;
              this.conexion = conexion;
              this.precio = parseFloat (precio);
              this.stock = parseInt(stock);

            }
            
            const ImplantesShi = new Producto ("Implantes Shi", "Conexion", 8000, 30);
            const ImplantesShe = new Producto ("Implantes She", "Conexion", 5000, 50);
            const ImplantesSri = new Producto ("Implantes Sri", "Conexion", 7000, 40);
          
            
          console.log("Gracias Por Su Visita")
        