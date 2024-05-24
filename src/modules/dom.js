import '../css/style.css';
import { toDoList, projectToDoList } from "./logic.js";

// SIDEBAR
function sidebar() {
    const div = document.createElement('div');
    const addTaskBtn = document.createElement('button');
    const addProjectBtn = document.createElement('button');
    const showAllBtn = document.createElement('button');
    const showTodayBtn = document.createElement('button');
    const showUpcomingBtn = document.createElement('button');
    const showCategoryBtn = document.createElement('button');

    div.setAttribute('id', 'sidebar');
    addTaskBtn.setAttribute('id', 'addTaskBtn');
    addProjectBtn.setAttribute('id', 'addProjectBtn');
    showAllBtn.setAttribute('id', 'showAllBtn');
    showTodayBtn.setAttribute('id', 'showTodayBtn');
    showUpcomingBtn.setAttribute('id', 'showUpcomingBtn');
    showCategoryBtn.setAttribute('id', 'showCategoryBtn');

    addTaskBtn.textContent = "+Add  Task";
    addProjectBtn.textContent = "+Add  Project";
    showAllBtn.textContent = "Show All";
    showTodayBtn.textContent = "Today";
    showUpcomingBtn.textContent = "Upcoming";
    showCategoryBtn.textContent = "Category";

    div.append(addTaskBtn, addProjectBtn, showAllBtn, showTodayBtn, showUpcomingBtn, showCategoryBtn);

    return div;
}

// TO DO CONTAINER
function toDoContainer() {
    const toDoListContainer = document.createElement('div');
    const toDoList = document.createElement('div');
    const tableBody = document.createElement("table");
    const toDoProject = document.createElement('div');

    toDoListContainer.setAttribute('id', 'toDoListContainer');
    toDoList.setAttribute('id', 'toDoList');
    tableBody.setAttribute('id', 'toDoTable');
    toDoProject.setAttribute('id', 'toDoProject');

    toDoList.textContent = "TO DOs";
    toDoProject.textContent = "PROJECTS";

    toDoListContainer.append(toDoList, toDoProject);
    toDoList.append(tableBody);

    return toDoListContainer;
}

// CREATE MODAL
export function createTaskModal() {

    const div = document.createElement('div');
    div.setAttribute('id', 'createTask');

    const modalDiv = document.createElement('div');

    const form = document.createElement('form');
    form.setAttribute('id', 'taskForm');

    const addTaskHeader = document.createElement('h3');
    addTaskHeader.textContent = "Add To Do";

    const taskNameInput = document.createElement('input');
    taskNameInput.setAttribute('id', 'taskNameInput');
    taskNameInput.setAttribute('type', 'text');
    taskNameInput.setAttribute('placeholder', 'Task Name');

    const taskDescriptionInput = document.createElement('input');
    taskDescriptionInput.setAttribute('id', 'taskDescriptionInput');
    taskDescriptionInput.setAttribute('type', 'text');
    taskDescriptionInput.setAttribute('placeholder', 'Description');

    const taskDueDate = document.createElement('input');
    taskDueDate.setAttribute('id', 'taskDueDate');
    taskDueDate.setAttribute('type', 'text');
    taskDueDate.setAttribute('placeholder', 'Due Date');

    const submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'taskSubmit');
    submitButton.setAttribute('type', 'submit');

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('id', 'cancelToDo');
    cancelButton.setAttribute('type', 'button');

    submitButton.textContent = 'Submit';
    cancelButton.textContent = 'Cancel';

    div.append(modalDiv);
    modalDiv.append(form, addTaskHeader, taskNameInput, taskDescriptionInput, taskDueDate, submitButton, cancelButton);

    return div;
}

// ADD BUTTON FUNCTION
export function addToDoButtonOnclick() {
    const addToDoButton = document.getElementById('addTaskBtn');
    const toDoModal = document.getElementById('createTask');

    addToDoButton.onclick = function() {
        toDoModal.style.display = "flex";

        const cancelToDoButton = document.getElementById('cancelToDo');
        cancelToDoButton.onclick = function() {
            toDoModal.style.display = "none";
        }

        const submitToDoButton = document.getElementById('taskSubmit');
        const taskDesciption = document.getElementById("taskDescriptionInput");
        const taskName = document.getElementById("taskNameInput");
        submitToDoButton.onclick = function() {
            if(taskName.value === ""){
                alert("input task name");
            }
            else {
                submitToDo(taskDesciption.value, taskName.value);
            }
        }
    }
}

// SUBMIT TO DO
export function submitToDo(toDoTitle, toDoValue) {
}

// DISPLAY OF TODOS AND PROJECTS FUNCTIONS

    // DISPLAY DEFAULT TODO LIST
export function displayToDoList() {
    for(const toDo of toDoList) {
        individualToDoContainer(toDo);
    }
}

    // SELECT THE INDIVIDUAL TODO TABLE CONTAINER
function individualToDoContainer(toDo) {
    const toDoContainer = document.querySelector("#toDoTable");
    updateDisplayToDoList(toDo, toDoContainer);
}

    // UPDATE DISPLAY TODO LIST
function updateDisplayToDoList(toDo, toDoContainer) {
    const newRow = document.createElement("tr");

    const checkBoxColumn = document.createElement("td");
    checkBoxColumn.setAttribute('id','tdCheckbox');

    const checkBox = document.createElement("input");
    checkBox.setAttribute('type','checkbox');

    const toDoName = document.createElement("td");

    const toDoDueDate = document.createElement("td");
    toDoDueDate.setAttribute('id','tdDate');

    const toDoEdit = document.createElement("td");
    toDoEdit.setAttribute('id','tdEdit');

    const toDoDelete = document.createElement("td");
    toDoDelete.setAttribute('id','tdDelete');

    toDoContainer.appendChild(newRow).className = "table-row";
    newRow.appendChild(checkBoxColumn);
    checkBoxColumn.appendChild(checkBox);
    newRow.appendChild(toDoName).textContent = `${toDo.title}`;
    newRow.appendChild(toDoDueDate).textContent = `${toDo.dueDate}`;
    newRow.appendChild(toDoEdit).textContent = `Edit`;
    newRow.appendChild(toDoDelete).textContent = `Delete`;
}

    // DISPLAY TODO PROJECTS
export function displayToDoProjects() {
    let a = 1;
    for(const project of projectToDoList) {
        updateProjectDisplay(project, a);
        a++;
    }
}
    // UPDATE DISPLAY TODO PROJECTS
function updateProjectDisplay(project, a) {
    const toDoProjectContainer = document.querySelector('#toDoProject');
    const toDoProject = document.createElement('div');
    const projectTable = document.createElement('table');

    projectTable.setAttribute('id',`table-` + a);

    toDoProject.textContent = `${project.name}`;

    toDoProjectContainer.appendChild(toDoProject);
    toDoProject.appendChild(projectTable);

    for(const toDo of project.toDos) {
        projectToDoContainer(toDo, a)
    }
}

// SELECT THE PROJECT TODO TABLE CONTAINER
function projectToDoContainer(toDo, a) {
    const toDoContainer = document.querySelector("#table-" + a);
    updateDisplayToDoList(toDo, toDoContainer);
}

// RENDER ELEMENTS
export default function render() {
    const body = document.querySelector('body');
    const sidebarElement = sidebar();
    const modalElement = createTaskModal();
    const toDoContainerElement = toDoContainer();

    body.append(sidebarElement, modalElement, toDoContainerElement);

    return body;
}