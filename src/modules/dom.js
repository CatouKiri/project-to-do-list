import '../css/style.css';

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

// MODAL

function createTaskModal() {
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
    cancelButton.setAttribute('id', 'cancel');
    cancelButton.setAttribute('type', 'button');

    submitButton.textContent = 'Submit';
    cancelButton.textContent = 'Cancel';

    div.append(form, taskNameInput, taskDescriptionInput, submitButton, cancelButton);

    return div;
}

export default function render() {
    const body = document.querySelector('body');
    const sidebarElement = sidebar();
    const modalElement = createTaskModal();

    body.append(sidebarElement, modalElement);

    return body;
}

export function addToDoButtonOnclick() {
    const addToDoButton = document.getElementById('addTaskBtn');
    addToDoButton.onclick = function() {
        console.log('i am clicking');
    }
}