import * as OrderService from './services/orderService.js';
import Order from './models/order.js';

const data = document.getElementById("orderInput").innerHTML.split("\n");
const order = new Order(Number(data[0]), Number(data[1]),Number(data[2]))


console.log(`Pedido código ${order.code}`);
console.log(`Valor Total: R$: ${OrderService.total(order).toFixed(2)}`)
