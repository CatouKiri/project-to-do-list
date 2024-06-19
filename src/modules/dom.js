import "../css/style.css";
import { toDoList, projectToDoList, toDo, projectToDo, checkIfToDoOrProject } from "./logic.js";
import deleteIcon from '../imgs/bin.png';
import editIcon from '../imgs/editing.png';
import { format } from "date-fns";
import { el } from "date-fns/locale";

// let a = 10;
// todoList storage
let a = localStorage.getItem('a') || '';

// if there is no local storage, populate todoList with example items
if (!localStorage.getItem('a')) {
    a = 10;
    localStorage.setItem('a', a);
}

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

        const toDoNameAndDescription = document.createElement("td");
        toDoNameAndDescription.setAttribute("id", "tdNameAndDescription");

        const toDoName = document.createElement("div");
        toDoName.setAttribute("id", "divTitle");

        const toDoDescription = document.createElement("div");
        toDoDescription.setAttribute("id", "divDescription");

        const toDoDueDate = document.createElement("td");
        toDoDueDate.setAttribute("id", "tdDate");

        const toDoEdit = document.createElement("td");
        toDoEdit.setAttribute("id", "tdEdit");
        toDoEdit.onclick = function (e) {
            editTodo(e);
        };

        const toDoDelete = document.createElement("td");
        toDoDelete.setAttribute("id", "tdDelete");
        toDoDelete.onclick = function (e) {
            const b = e.target;
            deleteToDo(b);
        };

        toDoContainer.appendChild(newRow).className = "table-row";

        newRow.appendChild(checkBoxColumn);
        checkBoxColumn.appendChild(checkBox);
        newRow.appendChild(toDoNameAndDescription);
        toDoNameAndDescription.appendChild(toDoName).textContent = `${toDo.title}`;
        toDoNameAndDescription.appendChild(toDoDescription).textContent = `${toDo.description}`;

        if(!toDo.dueDate){
            newRow.appendChild(toDoDueDate).textContent = "No Due Date";
        }
        else {
            newRow.appendChild(toDoDueDate).textContent = `${formatDate(toDo.dueDate)}`;
        }

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

        const toDoProjectName = document.createElement("div");
        toDoProjectName.setAttribute("id", "divProjectName");
        toDoProjectName.textContent = `${project.name}`;

        const toDoProjectDescription = document.createElement("div");
        toDoProjectDescription.setAttribute("id", "divProjectDescription");
        toDoProjectDescription.textContent = `${project.projectDescription}`;


        let { toDoProjectButton, deleteProjectButton, editProjectButton, deleteI, editI} = addButtonsInProjectName();

        const projectTable = document.createElement("table");

        toDoProjectContainer.appendChild(toDoProject);
        toDoProject.appendChild(toDoProjectName);
        toDoProjectName.appendChild(toDoProjectButton);
        toDoProjectName.appendChild(deleteProjectButton);
        toDoProjectName.appendChild(editProjectButton);
        toDoProject.appendChild(toDoProjectDescription);
        toDoProject.appendChild(projectTable);

        for (const toDo of project.toDos) {
            projectToDoContainer(toDo, a);
        }
    }

    // ADD BUTTONS INSIDE PROJECT NAME
    function addButtonsInProjectName() {

        const deleteI = new Image();
        deleteI.src = deleteIcon;
        deleteI.setAttribute("width", "10px");

        const editI = new Image();
        editI.src = editIcon;
        editI.setAttribute("width", "10px");

        const toDoProjectButton = document.createElement("button");
        toDoProjectButton.setAttribute("id", "addIndividualToDoToProject");
        toDoProjectButton.textContent = "+";
        toDoProjectButton.onclick = function (e) {
            const b = e.target.parentNode;
            addToDoInsideProjectButtonOnclick(b);
        };

        const deleteProjectButton = document.createElement("button");
        deleteProjectButton.setAttribute("id", "deleteToDoToProject");
        deleteProjectButton.onclick = function (e) {
            const b = e.target.parentNode;
            deleteToDo(b);
        };

        const editProjectButton = document.createElement("button");
        editProjectButton.setAttribute("id", "editToDoToProject");
        editProjectButton.onclick = function (e) {
            editProject(e);
        };

        deleteProjectButton.appendChild(deleteI);
        editProjectButton.appendChild(editI);

        return {
            toDoProjectButton,
            deleteProjectButton,
            editProjectButton,
        };
    }


    // SELECT THE PROJECT TODO TABLE CONTAINER
    function projectToDoContainer(toDo, a) {
        const toDoContainer = document.getElementById(a);
        updateDisplayToDoList(toDo, toDoContainer.lastElementChild);
    }

// BUTTONS
    // DELETE SINGLE TODO BUTTON
    function deleteToDo(e) {
        let toDoDelete = e.parentNode.getAttribute("id");
        let { parentObject, targetObject } = checkIfToDoOrProject(toDoDelete);
        parentObject.splice(parentObject.indexOf(targetObject), 1);
        if (parentObject == toDoList) {
            localStorage.setItem("toDoList", JSON.stringify(toDoList));
        }
        else {
            localStorage.setItem("projectToDoList", JSON.stringify(projectToDoList));
        }
        let parent = e.parentNode;
        parent.remove();
    }

    // CANCEL BUTTON
    function handleCancelToDoButtonClick() {
        const toDoModal = document.getElementById("createModal");
        clearModal();
        hideModal(toDoModal);
    }

    // DISABLE SUBMIT BUTTON
    function disableButton() {
        const submitButton = document.getElementById("taskSubmit");
        submitButton.setAttribute("disabled", "");
    }

    // ENABLE SUBMIT BUTTON
    function enableSubmitButton() {
        const submitButton = document.getElementById("taskSubmit");
        submitButton.removeAttribute("disabled");
        if (taskNameInput.value.trim() !== "") {
            submitButton.removeAttribute("disabled");
        } else {
            submitButton.setAttribute("disabled", "");
        }
    }

    // ADD SINGLE TODO BUTTON
    export function addToDoButtonOnclick() {
        const addToDoButton = document.getElementById("addTaskBtn");
        addToDoButton.onclick = handleAddToDoButtonOnClick;
    }

    // ADD SINGLE TODO BUTTON HANDLER
    function handleAddToDoButtonOnClick() {
        const toDoModal = document.getElementById("createModal");
        disableButton();
        showModal(toDoModal);

        const cancelToDoButton = document.getElementById("cancelToDo");
        cancelToDoButton.onclick = handleCancelToDoButtonClick;

        const submitToDoButton = document.getElementById("taskSubmit");
        submitToDoButton.onclick = handleSubmitToDoButtonClick;
    }

    // SUBMIT SINGLE TODO BUTTON
    function handleSubmitToDoButtonClick() {
        const taskName = document.querySelector("#taskNameInput").value;
        const taskDesciption = document.querySelector("#taskDescriptionInput").value;

        const taskDueDate = document.querySelector("#taskDueDateInput").value;

        const newToDo = new toDo(a, taskName, taskDesciption, taskDueDate);
        a++;
        localStorage.setItem('a', a);

        toDoList.push(newToDo);

        const toDoModal = document.getElementById("createModal");
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
        hideModal(toDoModal);
        clearModal();
        individualToDoContainer(newToDo);
    }

    // FORMAT DATE
    function formatDate(date) {
        const newDate = date.split("-");
        const taskDueDate = format(new Date(newDate[0], `${newDate[1] - 1}`, newDate[2]), 'MMM. dd, yyyy');

        return taskDueDate;
    }

    // ADD SINGLE PROJECT BUTTON
    export function addProjectButtonOnclick() {
        const addProjectButton = document.getElementById("addProjectBtn");
        addProjectButton.onclick = handleAddProjectButtonOnClick;
    }

    // ADD SINGLE PROJECT BUTTON HANDLER
    function handleAddProjectButtonOnClick() {
        const toDoModal = document.getElementById("createModal");
        disableButton();
        showProjectModal(toDoModal);

        const cancelToDoButton = document.getElementById("cancelToDo");
        cancelToDoButton.onclick = handleCancelToDoButtonClick;

        const submitToDoButton = document.getElementById("taskSubmit");
        submitToDoButton.onclick = handleSubmitProjectButtonClick;
    }

    // SUBMIT SINGLE PROJECT BUTTON
    function handleSubmitProjectButtonClick() {
        let taskName = document.querySelector("#taskNameInput").value;
        let taskDesciption = document.querySelector("#taskDescriptionInput").value;

        let newToDo = new projectToDo(a, taskName, taskDesciption);
        a++;
        localStorage.setItem('a', a);

        projectToDoList.push(newToDo);
        localStorage.setItem("projectToDoList", JSON.stringify(projectToDoList));

        const toDoModal = document.getElementById("createModal");
        hideModal(toDoModal);
        clearModal();

        updateProjectDisplay(newToDo, newToDo.id);
    }

    // ADD SINGLE TODO INSIDE PROJEC BUTTON
    export function addToDoInsideProjectButtonOnclick(e) {
        const projectId = e.parentNode.getAttribute("id");
        const addToDoInsideProjectButton = e;
        addToDoInsideProjectButton.onclick = function() {
            handleAddToDoInsideProjectOnclick(projectId);
        }
    }

    // ADD SINGLE TODO INSIDE PROJEC BUTTON HANDLER
    function handleAddToDoInsideProjectOnclick(projectId) {
        const toDoModal = document.getElementById("createModal");
        disableButton();
        showModal(toDoModal);

        const cancelToDoButton = document.getElementById("cancelToDo");
        cancelToDoButton.onclick = handleCancelToDoButtonClick;

        const submitToDoButton = document.getElementById("taskSubmit");
        submitToDoButton.onclick = function() {
            handleSubmitToDoInsideProjectButtonClick(projectId);
        }
    }

    // ADD SINGLE TODO INSIDE PROJEC BUTTON
    function handleSubmitToDoInsideProjectButtonClick(projectId) {
        let taskName = document.querySelector("#taskNameInput").value;
        let taskDesciption = document.querySelector("#taskDescriptionInput").value;
        let taskDueDate = document.querySelector("#taskDueDateInput").value;

        let newToDo = new toDo(a, taskName, taskDesciption, taskDueDate);
        a++;
        localStorage.setItem('a', a);

        const project = projectToDoList.find(project => project.id == projectId);
        project.toDos.push(newToDo);
        localStorage.setItem("projectToDoList", JSON.stringify(projectToDoList));

        const toDoModal = document.getElementById("createModal");
        hideModal(toDoModal);
        clearModal();
        projectToDoContainer(newToDo, projectId);
    }

    // EDIT TODO BUTTON
    function editTodo(e) {
        let toDoEdit = e.target.parentNode.getAttribute("id");
        let { parentObject, targetObject } = checkIfToDoOrProject(toDoEdit);

        const taskName = document.getElementById("taskNameInput");
        taskName.value = `${targetObject.title}`;
        const taskDesciption = document.getElementById("taskDescriptionInput");
        taskDesciption.value = `${targetObject.description}`;
        const taskDueDate = document.getElementById("taskDueDateInput");
        taskDueDate.value = `${targetObject.dueDate}`;

        const toDoModal = document.getElementById("createModal");
        showModal(toDoModal);

        const cancelToDoButton = document.getElementById("cancelToDo");
        cancelToDoButton.onclick = handleCancelToDoButtonClick;

        const submitToDoButton = document.getElementById("taskSubmit");
        submitToDoButton.onclick = function () {
            submitEditedToDoButtonClick(targetObject);
        }
    }

    // EDIT TODO BUTTON HANDLER
    function submitEditedToDoButtonClick(targetObject) {
        const taskName = document.querySelector("#taskNameInput").value;
        const taskDesciption = document.querySelector("#taskDescriptionInput").value;
        const taskDueDate = document.querySelector("#taskDueDateInput").value;

        targetObject.title = taskName;
        targetObject.description = taskDesciption;
        targetObject.dueDate = taskDueDate;

        const toDoModal = document.getElementById("createModal");
        hideModal(toDoModal);
        clearModal();
        updateSingleToDoContainer(targetObject.id, taskName, taskDesciption, taskDueDate);
    }

    // UPDATE TODO CONTAINER
    function updateSingleToDoContainer(id, name, description, dueDate) {
        const parentRow = document.getElementById(id);

        const taskName = parentRow.querySelector("#divTitle");
        taskName.textContent = `${name}`;

        const taskDesciption = parentRow.querySelector("#divDescription");
        taskDesciption.textContent = `${description}`;

        const taskDueDate = parentRow.querySelector("#tdDate");

        if(!dueDate){
            taskDueDate.textContent = "No Due Date";
        }
        else {
            taskDueDate.textContent = `${formatDate(dueDate)}`;
        }

        let { parentObject, targetObject } = checkIfToDoOrProject(id);
        if (parentObject == toDoList) {
            localStorage.setItem("toDoList", JSON.stringify(toDoList));
        }
        else {
            localStorage.setItem("projectToDoList", JSON.stringify(projectToDoList));
        }
    }

    // EDIT TODO BUTTON
    function editProject(e) {
        let projectEdit = e.target.parentNode.parentNode.getAttribute("id");
        let { parentObject, targetObject } = checkIfToDoOrProject(projectEdit);

        const taskName = document.getElementById("taskNameInput");
        taskName.value = `${targetObject.name}`;
        const taskDesciption = document.getElementById("taskDescriptionInput");
        taskDesciption.value = `${targetObject.projectDescription}`;

        const toDoModal = document.getElementById("createModal");
        showProjectModal(toDoModal);

        const cancelToDoButton = document.getElementById("cancelToDo");
        cancelToDoButton.onclick = handleCancelToDoButtonClick;

        const submitToDoButton = document.getElementById("taskSubmit");
        submitToDoButton.onclick = function () {
            submitEditedProjectButtonClick(targetObject);
        }
    }

    // EDIT TODO BUTTON HANDLER
    function submitEditedProjectButtonClick(targetObject) {
        const taskName = document.querySelector("#taskNameInput").value;
        const taskDesciption = document.querySelector("#taskDescriptionInput").value;

        targetObject.name = taskName;
        targetObject.projectDescription = taskDesciption;

        const toDoModal = document.getElementById("createModal");
        hideModal(toDoModal);
        clearModal();
        updateProjectContainer(targetObject.id, taskName, taskDesciption);
    }

    // UPDATE TODO CONTAINER
    function updateProjectContainer(id, name, description) {
        const parentRow = document.getElementById(id);

        const taskName = parentRow.querySelector("#divProjectName");
        taskName.textContent = `${name}`;

        const taskDesciption = parentRow.querySelector("#divProjectDescription");
        taskDesciption.textContent = `${description}`;

        let { toDoProjectButton, deleteProjectButton, editProjectButton } = addButtonsInProjectName();

        taskName.appendChild(toDoProjectButton);
        taskName.appendChild(deleteProjectButton);
        taskName.appendChild(editProjectButton);

        localStorage.setItem("projectToDoList", JSON.stringify(projectToDoList));
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
        taskDueDateInput.setAttribute("type", "date");

        const submitButton = document.createElement("button");
        submitButton.setAttribute("id", "taskSubmit");
        submitButton.setAttribute("type", "submit");

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
        const taskDueDateInput = document.getElementById("taskDueDateInput");
        taskDueDateInput.style.display = "inline-block";
        modal.style.display = "flex";
    }

    // SHOW PROJECT MODAL
    function showProjectModal(modal) {
        const taskDueDateInput = document.getElementById("taskDueDateInput");
        taskDueDateInput.style.display = "none";
        modal.style.display = "flex";
    }

    // HIDE MODAL
    function hideModal(modal) {
        modal.style.display = "none";
        const submitButton = document.getElementById("taskSubmit");
        submitButton.removeAttribute("disabled");
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
