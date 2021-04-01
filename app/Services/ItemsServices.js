import { ProxyState } from '../AppState.js';
import Item from '../Models/Item.js';


class ItemsService {
  // deleteItems(id) {
  //   ProxyState.pizzas = ProxyState.pizzas.filter(p => p.id != id)
  //   saveState()
  // }
  // addItems(newPizza) {
  //   ProxyState.pizzas = [...ProxyState.pizzas, new Pizza(newPizza.name, newPizza.size)]
  //   saveState()
  // }
  constructor(){

    console.log('fROM SERVICE');
  }

  counter(){

  }
  addToCart(id){
    let item = ProxyState.items.find(item => item.id === id)
    ProxyState.items = ProxyState.items
    item.counter -= 1
    let cartItem = ProxyState.cart.find(item => item.id === id)
    // console.log(hi);
    if(cartItem != undefined){
      cartItem.quantity += 1
    } else {
      ProxyState.cart.push(item)

    }

  }
}

export const itemsService = new ItemsService();