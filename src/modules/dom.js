import "../css/style.css";
import { toDoList, projectToDoList, toDo, checkIfToDoOrProject } from "./logic.js";

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

        const toDoDescription = document.createElement("div");
        toDoDescription.setAttribute("id", "divDescription");

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
        toDoName.appendChild(toDoDescription).textContent = `${toDo.description}`;
        newRow.appendChild(toDoDueDate).textContent = `${toDo.dueDate}`;
        newRow.appendChild(toDoEdit).textContent = `Edit`;
        newRow.appendChild(toDoDelete).textContent = `Delete`;

        clearModal();
    }

    // DISPLAY TODO PROJECTS
    export function displayToDoProjects() {
        for (const project of projectToDoList) {
            const a = project.id;
            updateProjectDisplay(project, a);
        }
    }

    // UPDATE DISPLAY TODO PROJECTS
    function updateProjectDisplay(project, a) {
        const toDoProjectContainer = document.querySelector("#toDoProject");

        const toDoProject = document.createElement("div");
        toDoProject.setAttribute("class", "divProjectContainer");
        toDoProject.setAttribute("id", a);

        const toDoProjectButton = document.createElement("button");
        toDoProjectButton.setAttribute("id", "addIndividualToDoToProject");
        toDoProjectButton.textContent = "+";
        toDoProjectButton.onclick = function (e) {
            addToDoInsideProjectButtonOnclick(e);
        };

        const projectTable = document.createElement("table");

        toDoProject.textContent = `${project.name}`;

        toDoProjectContainer.appendChild(toDoProject);
        toDoProject.appendChild(toDoProjectButton);
        toDoProject.appendChild(projectTable);

        for (const toDo of project.toDos) {
            projectToDoContainer(toDo, a);
        }
    }

    // SELECT THE PROJECT TODO TABLE CONTAINER
    function projectToDoContainer(toDo, a) {
        const toDoContainer = document.getElementById(a);
        updateDisplayToDoList(toDo, toDoContainer.lastElementChild);
    }

// BUTTONS
    // DELETE SINGLE TODO BUTTON
    function deleteToDo(e) {
        let toDoDelete = e.target.parentNode.getAttribute("id");
        let { parentObject, targetObject } = checkIfToDoOrProject(toDoDelete);
        parentObject.splice(parentObject.indexOf(targetObject), 1);
        console.log(toDoList);
        let parent = e.target.parentNode;
        parent.remove();
    }

    // CANCEL BUTTON
    function handleCancelToDoButtonClick() {
        const toDoModal = document.getElementById("createModal");
        hideModal(toDoModal);
    }

    // ADD BUTTON FUNCTION
    export function addToDoButtonOnclick() {
        const addToDoButton = document.getElementById("addTaskBtn");
        addToDoButton.onclick = handleAddToDoButtonOnClick;
    }

    export function addToDoInsideProjectButtonOnclick(e) {
        console.log(e.target.parentNode.getAttribute("id"));
    }

    // ADD BUTTON
    function handleAddToDoButtonOnClick() {
        const toDoModal = document.getElementById("createModal");
            showModal(toDoModal);

            const cancelToDoButton = document.getElementById("cancelToDo");
            cancelToDoButton.onclick = handleCancelToDoButtonClick;

            const submitToDoButton = document.getElementById("taskSubmit");
            submitToDoButton.onclick = handleSubmitToDoButtonClick;
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

    // SUBMIT BUTTON
    function handleSubmitToDoButtonClick() {
        let taskName = document.querySelector("#taskNameInput").value;
        let taskDesciption = document.querySelector(
            "#taskDescriptionInput"
        ).value;
        let taskDueDate = document.querySelector("#taskDueDateInput").value;

        let newToDo = new toDo(a, taskName, taskDesciption, taskDueDate);
        a++;
        toDoList.push(newToDo);
        const toDoModal = document.getElementById("createModal");
        hideModal(toDoModal);
        individualToDoContainer(newToDo);
    }

// MODAL
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

    // SHOW MODAL
    function showModal(modal) {
        modal.style.display = "flex";
    }

    // HIDE MODAL
    function hideModal(modal) {
        modal.style.display = "none";
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
