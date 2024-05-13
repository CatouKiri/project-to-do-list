import render from "./modules/dom";
import { addToDoButtonOnclick, displayToDoList } from "./modules/dom";
import { toDoList, projectToDoList } from "./modules/logic";

render();
addToDoButtonOnclick();
displayToDoList();
console.log(toDoList);
console.log(projectToDoList);
