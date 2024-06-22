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

// date formater
function formatDate(date) {
    const newDate = date.split("-");
    const taskDueDate = format(new Date(newDate[0], `${newDate[1] - 1}`, newDate[2]), 'MMM. dd, yyyy');

    return taskDueDate;
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

    div.append(addTaskBtn, addProjectBtn);

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

// updating of display

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
        checkBox.onclick = function (e) {
            checkBoxClick(e);
        };

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
                const projectId = e.target.parentNode.getAttribute("id");
                handleAddToDoButtonOnClick("editToDo", projectId);
        };

        const toDoDelete = document.createElement("td");
        toDoDelete.setAttribute("id", "tdDelete");
        toDoDelete.onclick = function (e) {
            const b = e.target;
            deleteToDo(b);
        };

        toDoContainer.appendChild(newRow).className = "table-row";

        if(toDo.completed) {
            checkBox.setAttribute("checked", "");
            toDoName.setAttribute("style", "text-decoration: line-through;");
            toDoDescription.setAttribute("style", "text-decoration: line-through;");
            toDoDueDate.setAttribute("style", "text-decoration: line-through;");
        }

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
        toDoProjectName.textContent = `${project.title}`;

        const toDoProjectDescription = document.createElement("div");
        toDoProjectDescription.setAttribute("id", "divProjectDescription");
        toDoProjectDescription.textContent = `${project.description}`;


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
            const projectId = e.target.parentNode.parentNode.getAttribute("id");
            handleAddToDoButtonOnClick("singleInsideProjectToDo", projectId);
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
            let projectId = e.target.parentNode.parentNode.getAttribute("id");
            handleAddToDoButtonOnClick("editProject", projectId);
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

    // add single button onclick
    export function addToDoButtonOnclick() {
        const addToDoButton = document.getElementById("addTaskBtn");
        // addToDoButton.onclick = handleAddToDoButtonOnClick;
        addToDoButton.onclick = function() {
            handleAddToDoButtonOnClick("singleToDo");
        }
    }

    // add single project onclick
    export function addProjectButtonOnclick() {
        const addProjectButton = document.getElementById("addProjectBtn");
        addProjectButton.onclick = function() {
            handleAddToDoButtonOnClick("projectToDo");
        }
    }

    // button handlers : takes add todo button, add todo project, edit todo button, edit todo project
    function handleAddToDoButtonOnClick(type, projectId) {
        disableButton();

        if(type == "editToDo" || type == "editProject") {
            enableSubmitButton();
            let { parentObject, targetObject } = checkIfToDoOrProject(projectId);
            console.log(targetObject);
            const taskName = document.getElementById("taskNameInput");
            taskName.value = `${targetObject.title}`;
            const taskDesciption = document.getElementById("taskDescriptionInput");
            taskDesciption.value = `${targetObject.description}`;
            if(type == "editToDo") {
                const taskDueDate = document.getElementById("taskDueDateInput");
                taskDueDate.value = `${targetObject.dueDate}`;
            }
        }

        const toDoModal = document.getElementById("createModal");
        const header = toDoModal.querySelector("h3");

        if(type == "editProject" || type == "projectToDo") {
            if(type == "editProject") {
                header.textContent = `EDIT TO DO PROJECT`;
            }
            else {
                header.textContent = `ADD TO DO PROJECT`;
            }
            showModal(toDoModal, "project");
        }
        else {
            header.textContent = `ADD TO DO`;
            showModal(toDoModal);
        }

        const cancelToDoButton = document.getElementById("cancelToDo");
        cancelToDoButton.onclick = handleCancelToDoButtonClick;

        const submitToDoButton = document.getElementById("taskSubmit");
        if(type == "singleToDo" || type == "projectToDo") {
            submitToDoButton.onclick = function() {
                handleSubmitToDoButtonClick(type);
            }
        }
        else if(type == "editToDo" || type == "editProject") {
            submitToDoButton.onclick = function () {
                let { parentObject, targetObject } = checkIfToDoOrProject(projectId);
                handleSubmitToDoButtonClick(type, projectId, targetObject, parentObject);
            }
        }
        else {
            submitToDoButton.onclick = function() {
                handleSubmitToDoButtonClick(type, projectId);
            }
        }

        enableSubmitButton();
    }

    // submit button handler
    function handleSubmitToDoButtonClick(type, projectId, targetObject, parentObject) {
        const taskName = document.querySelector("#taskNameInput").value;
        const taskDesciption = document.querySelector("#taskDescriptionInput").value;
        const taskDueDate = document.querySelector("#taskDueDateInput").value;

        if(type == "singleToDo" || type == "singleInsideProjectToDo") {
            const newToDo = new toDo(a, taskName, taskDesciption, taskDueDate);
            if(type == "singleToDo") {
                toDoList.push(newToDo);
                localStorage.setItem("toDoList", JSON.stringify(toDoList));
                individualToDoContainer(newToDo);
            }
            else {
                const project = projectToDoList.find(project => project.id == projectId);
                project.toDos.push(newToDo);
                localStorage.setItem("projectToDoList", JSON.stringify(projectToDoList));
                projectToDoContainer(newToDo, projectId);
            }
            a++;
        }
        else if(type == "editToDo" || type == "editProject") {
            targetObject.title = taskName;
            targetObject.description = taskDesciption;
            if(type == "editToDo") {
                targetObject.dueDate = taskDueDate;
            }

            if (parentObject == toDoList) {
                localStorage.setItem("toDoList", JSON.stringify(toDoList));
            }
            else {
                localStorage.setItem("projectToDoList", JSON.stringify(projectToDoList));
            }

            if(type == "editToDo") {
                updateSingleToDoContainer(targetObject.id, taskName, taskDesciption, taskDueDate);
            }
            else {
                updateProjectContainer(targetObject.id, taskName, taskDesciption);
            }
        }
        else {
            const newToDo = new projectToDo(a, taskName, taskDesciption);
            projectToDoList.push(newToDo);
            localStorage.setItem("projectToDoList", JSON.stringify(projectToDoList));
            updateProjectDisplay(newToDo, newToDo.id);
            a++;
        }

        localStorage.setItem('a', a);

        console.log(toDoList);
        console.log(projectToDoList);
        const toDoModal = document.getElementById("createModal");
        hideModal(toDoModal);
        clearModal();
    }

    // cancel button handler
    function handleCancelToDoButtonClick() {
        const toDoModal = document.getElementById("createModal");
        clearModal();
        hideModal(toDoModal);
    }

    // delete button handler
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

    // checkbox button handler
    function checkBoxClick(e) {
        const parentRow = e.target.parentNode.parentNode;
        const toDoName = parentRow.querySelector("#divTitle");
        const toDoDescription = parentRow.querySelector("#divDescription");
        const toDoDueDate = parentRow.querySelector("#tdDate");

        const itemId = e.target.parentNode.parentNode.getAttribute("id");
        const { parentObject, targetObject } = checkIfToDoOrProject(itemId);

        // update the front end
        if(e.target.checked) {
            toDoName.setAttribute("style", "text-decoration: line-through;");
            toDoDescription.setAttribute("style", "text-decoration: line-through;");
            toDoDueDate.setAttribute("style", "text-decoration: line-through;");
            targetObject.completed = true;
        }
        else {
            toDoName.removeAttribute("style", "text-decoration: line-through;");
            toDoDescription.removeAttribute("style", "text-decoration: line-through;");
            toDoDueDate.removeAttribute("style", "text-decoration: line-through;");
            targetObject.completed = false;
        }

        // update the local storage
        if (parentObject == toDoList) {
            localStorage.setItem("toDoList", JSON.stringify(toDoList));
        }
        else {
            localStorage.setItem("projectToDoList", JSON.stringify(projectToDoList));
        }
    }

    // button disabled
    function disableButton() {
        const submitButton = document.getElementById("taskSubmit");
        submitButton.setAttribute("disabled", "");
    }

    // button enabler
    function enableSubmitButton() {
        const submitButton = document.getElementById("taskSubmit");
        submitButton.removeAttribute("disabled");
        if (taskNameInput.value.trim() !== "") {
            submitButton.removeAttribute("disabled");
        } else {
            submitButton.setAttribute("disabled", "");
        }
    }

    // update a todo inside a project
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
    }

    // update the header of a todo project
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
    function showModal(modal, type) {
        const taskDueDateInput = document.getElementById("taskDueDateInput");
        taskDueDateInput.style.display = "inline-block";
        if(type == "project"){
            taskDueDateInput.style.display = "none";
        }
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
