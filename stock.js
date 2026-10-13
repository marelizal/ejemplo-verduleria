const producto = { nombre: "Papa", precio: 1200, stock: 50 };

function vender(producto, kilos) {
  if (kilos > producto.stock) {
    return "No hay stock suficiente";
  }
  producto.stock = producto.stock - kilos;
  return "Venta: " + kilos + "kg. Quedan " + producto.stock + "kg.";
}

module.exports = { producto, vender };
