const myToDoList = [];

// TODO CONSTRUCTOR
function ToDo(title, description) {
    this.title = title;
    this.description = description;
    this.completed = false;
}

// PROJECT CONSTRUCTOR
function Project(name) {
    this.name = name;
    this.toDos = [];
}

Project.prototype.addToDo = function(toDo) {
    this.toDos.push(toDo);
};

// TODOLIST OBJECT
const ToDoList = {
    projects: [],
    addProject: function(project) {
        this.projects.push(project);
    },
    addToDoToProject: function(projectIndex, toDo) {
        if (projectIndex >= 0 && projectIndex < this.projects.length) {
            this.projects[projectIndex].addToDo(toDo);
        } else {
            console.error('Invalid project index');
        }
    },
    addIndividualToDo: function(toDo) {
        this.projects.push(new Project('Individual'));
        this.addToDoToProject(this.projects.length - 1, toDo);
    }
};



