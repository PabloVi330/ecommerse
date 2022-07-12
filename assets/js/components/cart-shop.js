import { cartShop } from './cart-elements.js';
import { database} from './db.js';
const productosDB = database.products();

let products = []
const cartProducts = cartShop.cart.products
/* 
 modal carrito => cartShopModal
*/

const productPrint = () => {
    /* requiere de template de producto */
   console.log(productosDB);
}
const productAdd = (id, amount) => {

    productPrint()
}
const productRemove = (id, amount) => {

}
const productClear = (id) => {

}
const cartClear = () => {

}
const cartbuy = () => {
    let total

    return total
}
console.log(`cartProducts`);
//console.log(cartProducts);
export {
    productPrint,
    productAdd,
    productRemove,
    productClear,
    cartClear,
    cartbuy,
    products
}