import render from "./modules/dom";
import { addToDoButtonOnclick, displayToDoList, displayToDoProjects } from "./modules/dom";
import { toDoList, projectToDoList } from "./modules/logic";

render();
addToDoButtonOnclick();
displayToDoList();
displayToDoProjects();
console.log(toDoList);
console.log(projectToDoList);
