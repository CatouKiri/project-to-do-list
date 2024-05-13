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

    toDoListContainer.setAttribute('id', 'toDoListContainer');
    toDoList.setAttribute('id', 'toDoList');

    toDoList.textContent = "TO DOs";

    toDoListContainer.append(toDoList);

    return toDoListContainer;
}

// CREATE MODAL
export function createTaskModal() {
    const div = document.createElement('div');
    const form = document.createElement('form');
    const taskNameInput = document.createElement('input');
    const taskDescriptionInput = document.createElement('input');
    const submitButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    div.setAttribute('id', 'createTask');
    form.setAttribute('id', 'taskForm');
    taskNameInput.setAttribute('id', 'taskNameInput');
    taskNameInput.setAttribute('type', 'text');
    taskNameInput.setAttribute('placeholder', 'Task Name');
    taskDescriptionInput.setAttribute('id', 'taskDescriptionInput');
    taskDescriptionInput.setAttribute('type', 'text');
    taskDescriptionInput.setAttribute('placeholder', 'Description');
    submitButton.setAttribute('id', 'taskSubmit');
    submitButton.setAttribute('type', 'submit');
    cancelButton.setAttribute('id', 'cancelToDo');
    cancelButton.setAttribute('type', 'button');

    submitButton.textContent = 'Submit';
    cancelButton.textContent = 'Cancel';

    div.append(form, taskNameInput, taskDescriptionInput, submitButton, cancelButton);

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

// UPDATE DISPLAY TODO LIST
function updateDisplayToDoList(toDo) {
    const body = document.querySelector("body");
    const divContainer = document.querySelector("")
}

// DISPLAY DEFAULT TODO LIST
export function displayToDoList() {
    for(const toDo of toDoList) {
        updateDisplayToDoList(toDo);
    }
}

// DISPLAY TODO PROJECTS


// RENDER ELEMENTS
export default function render() {
    const body = document.querySelector('body');
    const sidebarElement = sidebar();
    const modalElement = createTaskModal();
    const toDoContainerElement = toDoContainer();

    body.append(sidebarElement, modalElement, toDoContainerElement);

    return body;
}