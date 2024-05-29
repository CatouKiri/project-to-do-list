import "../css/style.css";
import { toDoList, projectToDoList, toDo } from "./logic.js";

let a = 8;

// SIDEBAR
function sidebar() {
    const div = document.createElement("div");
    div.setAttribute("id", "sidebar");

    const addTaskBtn = document.createElement("button");
    addTaskBtn.setAttribute("id", "addTaskBtn");
    addTaskBtn.textContent = "+Add  Task";

    const addProjectBtn = document.createElement("button");
    addProjectBtn.setAttribute("id", "addProjectBtn");
    addProjectBtn.textContent = "+Add  Project";

    // const showAllBtn = document.createElement('button');
    // showAllBtn.setAttribute('id', 'showAllBtn');
    // showAllBtn.textContent = "Show All";

    // const showTodayBtn = document.createElement('button');
    // showTodayBtn.setAttribute('id', 'showTodayBtn');
    // showTodayBtn.textContent = "Today";

    // const showUpcomingBtn = document.createElement('button');
    // showUpcomingBtn.setAttribute('id', 'showUpcomingBtn');
    // showUpcomingBtn.textContent = "Upcoming";

    // const showCategoryBtn = document.createElement('button');
    // showCategoryBtn.setAttribute('id', 'showCategoryBtn');
    // showCategoryBtn.textContent = "Category";

    div.append(addTaskBtn, addProjectBtn);
    // , showAllBtn, showTodayBtn, showUpcomingBtn, showCategoryBtn);

    return div;
}

// CREATE MODAL
export function createTaskModal() {
    const div = document.createElement("div");
    div.setAttribute("id", "createModal");

    const modalDiv = document.createElement("div");

    const form = document.createElement("form");
    form.setAttribute("id", "taskForm");

    const addTaskHeader = document.createElement("h3");
    addTaskHeader.textContent = "Add To Do";

    const taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("id", "taskNameInput");
    taskNameInput.setAttribute("type", "text");
    taskNameInput.setAttribute("placeholder", "Task Name");
    taskNameInput.setAttribute("onkeyup", "enableSubmitButton()");

    const taskDescriptionInput = document.createElement("input");
    taskDescriptionInput.setAttribute("id", "taskDescriptionInput");
    taskDescriptionInput.setAttribute("type", "text");
    taskDescriptionInput.setAttribute("placeholder", "Description");

    const taskDueDateInput = document.createElement("input");
    taskDueDateInput.setAttribute("id", "taskDueDateInput");
    taskDueDateInput.setAttribute("type", "text");
    taskDueDateInput.setAttribute("placeholder", "Due Date");

    const submitButton = document.createElement("button");
    submitButton.setAttribute("id", "taskSubmit");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("disabled", "");

    const cancelButton = document.createElement("button");
    cancelButton.setAttribute("id", "cancelToDo");
    cancelButton.setAttribute("type", "button");

    submitButton.textContent = "Submit";
    cancelButton.textContent = "Cancel";

    div.append(modalDiv);
    modalDiv.append(
        form,
        addTaskHeader,
        taskNameInput,
        taskDescriptionInput,
        taskDueDateInput,
        submitButton,
        cancelButton
    );

    taskNameInput.addEventListener("keyup", enableSubmitButton);

    return div;
}

// CLEAR MODAL
function clearModal() {
    let taskName = document.getElementById("taskNameInput");
    let taskDesciption = document.getElementById("taskDescriptionInput");
    let taskDueDate = document.getElementById("taskDueDateInput");

    taskName.value = "";
    taskDesciption.value = "";
    taskDueDate.value = "";
}

// TO DO CONTAINER
function toDoContainer() {
    const toDoListContainer = document.createElement("div");
    toDoListContainer.setAttribute("id", "toDoListContainer");

    const toDoList = document.createElement("div");
    toDoList.setAttribute("id", "toDoList");

    const tableBody = document.createElement("table");
    tableBody.setAttribute("id", "toDoTable");

    const toDoProject = document.createElement("div");
    toDoProject.setAttribute("id", "toDoProject");

    const toDoListHeader = document.createElement("h2");
    toDoListHeader.textContent = "TO DOs";

    const toDoProjectHeader = document.createElement("h2");
    toDoProjectHeader.textContent = "PROJECTS";

    toDoListContainer.append(toDoList, toDoProject);
    toDoList.append(toDoListHeader);
    toDoProject.append(toDoProjectHeader);
    toDoList.append(tableBody);

    return toDoListContainer;
}

// SUBMIT BUTTON
function enableSubmitButton() {
    const submitButton = document.getElementById("taskSubmit");
    submitButton.removeAttribute("disabled");
    if (taskNameInput.value.trim() !== "") {
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled", "");
    }
}

// ADD BUTTON FUNCTION
export function addToDoButtonOnclick() {
    const addToDoButton = document.getElementById("addTaskBtn");
    const toDoModal = document.getElementById("createModal");

    addToDoButton.onclick = function () {
        toDoModal.style.display = "flex";

        const cancelToDoButton = document.getElementById("cancelToDo");
        cancelToDoButton.onclick = function () {
            toDoModal.style.display = "none";
        };

        const submitToDoButton = document.getElementById("taskSubmit");

        submitToDoButton.onclick = function () {
            let taskName = document.querySelector("#taskNameInput").value;
            let taskDesciption = document.querySelector(
                "#taskDescriptionInput"
            ).value;
            let taskDueDate = document.querySelector("#taskDueDateInput").value;

            // let newToDo = new toDo(a, taskName, taskDesciption, taskDueDate);
            let newToDo = new toDo(a, taskName, taskDesciption, taskDueDate);
            a++;
            toDoList.push(newToDo);
            toDoModal.style.display = "none";
            individualToDoContainer(newToDo);
        };
    };
}

// DISPLAY OF TODOS AND PROJECTS FUNCTIONS

// DISPLAY DEFAULT TODO LIST
export function displayToDoList() {
    for (const toDo of toDoList) {
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
    newRow.setAttribute("id", `${toDo.id}`);

    const checkBoxColumn = document.createElement("td");
    checkBoxColumn.setAttribute("id", "tdCheckbox");

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    const toDoName = document.createElement("td");

    const toDoDueDate = document.createElement("td");
    toDoDueDate.setAttribute("id", "tdDate");

    const toDoEdit = document.createElement("td");
    toDoEdit.setAttribute("id", "tdEdit");

    const toDoDelete = document.createElement("td");
    toDoDelete.setAttribute("id", "tdDelete");
    toDoDelete.onclick = function (e) {
        deleteToDo(e);
    };

    toDoContainer.appendChild(newRow).className = "table-row";

    newRow.appendChild(checkBoxColumn);
    checkBoxColumn.appendChild(checkBox);
    newRow.appendChild(toDoName).textContent = `${toDo.title}`;
    newRow.appendChild(toDoDueDate).textContent = `${toDo.dueDate}`;
    newRow.appendChild(toDoEdit).textContent = `Edit`;
    newRow.appendChild(toDoDelete).textContent = `Delete`;

    clearModal();
}

// ---------- DELETE TODO ----------
function deleteToDo(e) {
    let toDoDelete = e.target.parentNode.getAttribute("id");
    let { parentObject, targetObject } = checkIfToDoOrProject(toDoDelete);
    parentObject.splice(parentObject.indexOf(targetObject), 1);
    console.log(toDoList);
    let parent = e.target.parentNode;
    parent.remove();
}

// CHECK IF TO BE DELETED IS IN TODOLIST OR TODOPROJECT
function checkIfToDoOrProject(id) {
    // Check in toDoList
    for (const toDo of toDoList) {
        if (toDo.id == id) {
            let parentObject = toDoList;
            let targetObject = toDo;
            return {
                parentObject,
                targetObject,
            };
        }
    }

    // Check in projectToDoList for project IDs
    for (const project of projectToDoList) {
        if (project.id == id) {
            let parentObject = projectToDoList;
            let targetObject = project;
            return {
                parentObject,
                targetObject,
            };
        }
        // Check in each project's toDos
        for (const toDo of project.toDos) {
            if (toDo.id == id) {
                let parentObject = project.toDos;
                let targetObject = toDo;
                return {
                    parentObject,
                    targetObject,
                };
            }
        }
    }
}

// DISPLAY TODO PROJECTS
export function displayToDoProjects() {
    for (const project of projectToDoList) {
        updateProjectDisplay(project, a);
        a++;
    }
}
// UPDATE DISPLAY TODO PROJECTS
function updateProjectDisplay(project, a) {
    const toDoProjectContainer = document.querySelector("#toDoProject");
    const toDoProject = document.createElement("div");
    const projectTable = document.createElement("table");

    projectTable.setAttribute("id", a);

    toDoProject.textContent = `${project.name}`;

    toDoProjectContainer.appendChild(toDoProject);
    toDoProject.appendChild(projectTable);

    for (const toDo of project.toDos) {
        projectToDoContainer(toDo, a);
    }
}

// SELECT THE PROJECT TODO TABLE CONTAINER
function projectToDoContainer(toDo, a) {
    const toDoContainer = document.getElementById(a);
    updateDisplayToDoList(toDo, toDoContainer);
}

// RENDER ELEMENTS
export default function render() {
    const body = document.querySelector("body");
    const sidebarElement = sidebar();
    const modalElement = createTaskModal();
    const toDoContainerElement = toDoContainer();

    body.append(sidebarElement, modalElement, toDoContainerElement);

    return body;
}
