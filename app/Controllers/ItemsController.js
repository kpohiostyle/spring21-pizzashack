import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";
import {itemsService} from '../Services/ItemsServices.js'


function _draw(){
  let items = ProxyState.items;
  let template = ''
     items.forEach(i => template += i.Template)
     document.getElementById("items").innerHTML = template
}

export default class ItemsController {
  constructor() {
  //  TODO 
  console.log('fROM cONTROLLER');
  ProxyState.on('items', _draw)
  _draw()
  }

  addToCart(id){
    itemsService.addToCart(id)
    _draw()
    let cart = ProxyState.cart;
    let template2 = ''
    console.log(ProxyState.cart);
       cart.forEach(i => template2 += i.Template2)
       document.getElementById("cart").innerHTML = template2
    
  }
}