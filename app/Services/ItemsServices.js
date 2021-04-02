import { ProxyState } from '../AppState.js';



class ItemsService {

  constructor() {
  }

  addToCart(id) {
    let item = ProxyState.items.find(item => item.id === id)
    ProxyState.items = ProxyState.items
    item.counter -= 1
    let cartItem = ProxyState.cart.find(item => item.id === id)
    // console.log(hi);
    if (cartItem != undefined) {
      cartItem.quantity += 1
      cartItem.total = (cartItem.quantity * cartItem.price)
    } else {
      ProxyState.cart.push(item)

    }

  }

  deleteItem(id) {
    ProxyState.cart = ProxyState.cart.filter(i => i.id != id)
    item.counter += 1
    ProxyState.cart = ProxyState.cart
  }
}

export const itemsService = new ItemsService();