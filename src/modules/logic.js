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