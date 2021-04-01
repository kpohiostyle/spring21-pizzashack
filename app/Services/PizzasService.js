import { ProxyState } from "../AppState.js";
import Pizza from "../Models/Pizza.js";
import { saveState } from "../Utils/LocalStorage.js";

class PizzasService {
  deletePizza(id) {
    ProxyState.pizzas = ProxyState.pizzas.filter(p => p.id != id)
    saveState()
  }
  addPizza(newPizza) {
    ProxyState.pizzas = [...ProxyState.pizzas, new Pizza(newPizza.name, newPizza.size)]
    saveState()
  }
}

export const pizzasService = new PizzasService();

