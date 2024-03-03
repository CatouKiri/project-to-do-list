import '../css/style.css';

function sidebar() {
    const div = document.createElement('div');
    const addTaskBtn = document.createElement('button');
    const showAllBtn = document.createElement('button');
    const showTodayBtn = document.createElement('button');
    const showUpcomingBtn = document.createElement('button');
    const showCategoryBtn = document.createElement('button');

    div.setAttribute('id', 'sidebar');
    addTaskBtn.setAttribute('id', 'addTaskBtn');
    showAllBtn.setAttribute('id', 'showAllBtn');
    showTodayBtn.setAttribute('id', 'showTodayBtn');
    showUpcomingBtn.setAttribute('id', 'showUpcomingBtn');
    showCategoryBtn.setAttribute('id', 'showCategoryBtn');

    addTaskBtn.textContent = "+Add  Task";
    showAllBtn.textContent = "Show All";
    showTodayBtn.textContent = "Today";
    showUpcomingBtn.textContent = "Upcoming";
    showCategoryBtn.textContent = "Category";

    div.append(addTaskBtn, showAllBtn, showTodayBtn, showUpcomingBtn, showCategoryBtn);

    return div;
}

export default function render() {
    const body = document.querySelector('body');
    const sidebarElement = sidebar();

    body.appendChild(sidebarElement);

    return body;
}