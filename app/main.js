import ItemsController from './Controllers/ItemsController.js';

class App {


  itemsController = new ItemsController();
}

window["app"] = new App();
