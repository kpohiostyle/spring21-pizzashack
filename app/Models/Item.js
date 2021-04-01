import {ProxyState} from '../AppState.js'

export default class Item {
  constructor(name, price, description, imgUrl, counter, id) {
    this.id = id
    this.name = name
    this.price  = price 
    this.description = description
    this.imgUrl = imgUrl
    this.counter = counter
    this.quantity = 0
  }

  get Template(){
    return `
    <div class="col">
    <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text">$${this.price.toFixed(2)}</p>
            <p class="card-text">${this.description}</p>
            <div class=" d-flex">
            <p class="card-text">In Stock <span>${this.counter}</span></p>
            <button type="button" class="btn btn-primary ml-3" onclick="app.itemsController.addToCart(${this.id})">Add To Cart</button>
        </div>
        </div>
    </div>
</div>
    `
  }

  get Template2(){
    return `
    <div class="col">
    <div>
    <p>${this.name}</p>
    <p>${this.price}</p>
    <p>${this.quantity}</p>
    </div>
    </div>
    `
  }
}