// import { ProxyState } from "../AppState.js";
// import { pizzasService } from "../Services/PizzasService.js";
// import { loadState } from "../Utils/LocalStorage.js";


// //Private
// function _draw() {
//   let pizzas = ProxyState.pizzas;
//   let template = ''
//   if (pizzas.length == 0) {
//     template += '<div class="col text-center"><p><em>no orders</em><p></div>'
//   }
//   pizzas.forEach(p => template += p.Template)
//   document.getElementById("pizzas").innerHTML = template
// }

// //Public
// export default class PizzasController {
//   constructor() {
//     ProxyState.on("pizzas", _draw);
//     ProxyState.on("ingredients", _draw);
//     loadState()
//     _draw()
//   }

//   addPizza() {
//     window.event.preventDefault()
//     let form = window.event.target
//     let rawPizza = {
//       name: form['name'].value,
//       size: form['size'].value
//     }
//     pizzasService.addPizza(rawPizza)
//     // @ts-ignore
//     form.reset()
//   }

//   deletePizza(id) {
//     pizzasService.deletePizza(id)
//   }
// }
