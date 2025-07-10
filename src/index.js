import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

const mycart = [];
const myWhishList = [];

console.log ("Bem vindo ao carrinho da shopee")

const item1= await createItem("chapeu", 20, 1);
const item2= await createItem("casaco", 20.01, 3);



//adiciona itens no carrinho
await cartService.addItem(mycart, item1);
await cartService.addItem(mycart, item2);

await cartService.removeItem(mycart, item2);
await cartService.removeItem(mycart, item2);


await cartService.displaycart(mycart);

//deleta itens do carrinho
//await cartService.deleteItem(mycart, item2.name)
//await cartService.deleteItem(mycart, item1.name)


await cartService.calculateTotal(mycart);