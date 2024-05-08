import render from "./modules/dom";
import { addToDoButtonOnclick } from "./modules/dom";
import { toDoList, projectToDoList } from "./modules/logic";

render();
addToDoButtonOnclick();
console.log(toDoList);
console.log(projectToDoList);
