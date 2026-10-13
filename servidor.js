const { producto, vender } = require("./stock");
const http = require("http");

const server = http.createServer((req, res) => {
  const html = `
    <h1>Verduleria: ${producto.nombre}</h1>
    <p>Precio: $${producto.precio} por kilo</p>
    <p>Stock: ${producto.stock} kg</p>
    <p>Proba en tu terminal: vender(producto, 3)</p>
  `;
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

server.listen(3000, () => {
  console.log("Verduleria abierta en http://localhost:3000");
});
