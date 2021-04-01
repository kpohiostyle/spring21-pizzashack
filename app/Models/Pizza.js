// import { ProxyState } from "../AppState.js"
// import { generateId } from "../Utils/GenerateId.js"

// export default class Pizza {
//   constructor(name, size, id = generateId()) {
//     this.id = id
//     this.name = name
//     this.size = size
//   }


//   get Template() {
//     return `
//     <div class="col-md-4">
//       <div class="pizza-card shadow bg-white rounded">
//           <div class="text-center ${this.size} p-2 d-flex justify-content-between">
//               <h3>${this.name}</h3>
//               <i class="fas fa-times ml-2" onclick="app.pizzasController.deletePizza('${this.id}')"></i>
//           </div>
//           <div class="p-3">
//               <ul>
//                   ${this.Ingredients}
//               </ul>
//           </div>
//           <form class="d-flex p-2" onsubmit="app.ingredientsController.addIngredient('${this.id}')">
//               <input type="text" name="name" id="name" class="form-control" placeholder="Ingredient"
//                   aria-describedby="helpId">
//               <button type="submit" class="btn btn-success" title='add ingredient'><i
//                       class="fas fa-plus"></i></button>
//           </form>
//       </div>
//     </div>
//     `
//   }

//   get Ingredients() {
//     let ings = ProxyState.ingredients.filter(i => i.pizzaId === this.id)
//     let template = ''
//     ings.forEach(i => template += i.Template)
//     return template
//   }

// }