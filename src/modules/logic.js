const toDoList = [
    {
        title: "Bench Press",
        description: "Do 10 bench press with 40lbs dumbells",
        completed: false
    },
    {
        title: "Sweep floor",
        description: "",
        completed: false
    }
]

const projectToDoList = [
    {
        name: "The Odin Project",
        toDos:[
            {
            title: "Lesson 1",
            description: "What is HTML?",
            completed: false
            },
            {
            title: "Lesson 2",
            description: "What is CSS?",
            completed: false
            },
            {
            title: "Lesson 3",
            description: "What is Javascript?",
            completed: false
            }
        ]
    }
]



export { toDoList, projectToDoList };
// // TODO CONSTRUCTOR
// function ToDo(title, description) {
//     this.title = title;
//     this.description = description;
//     this.completed = false;
// }

// // PROJECT CONSTRUCTOR
// function Project(name) {
//     this.name = name;
//     this.toDos = [];
// }

// Project.prototype.addToDo = function(toDo) {
//     this.toDos.push(toDo);
// };

// // TODOLIST OBJECT
// const ToDoList = {
//     projects: [],
//     addProject: function(project) {
//         this.projects.push(project);
//     },
//     addToDoToProject: function(projectIndex, toDo) {
//         if (projectIndex >= 0 && projectIndex < this.projects.length) {
//             this.projects[projectIndex].addToDo(toDo);
//         } else {
//             console.error('Invalid project index');
//         }
//     },
//     addIndividualToDo: function(toDo) {
//         this.projects.push(new Project('Individual'));
//         this.addToDoToProject(this.projects.length - 1, toDo);
//     }
// };

// // ADD TO DO FUNCTION


// // Create some dummy ToDo instances
// const todo1 = new ToDo('Finish homework', 'Complete math assignment by Friday.');
// const todo2 = new ToDo('Go grocery shopping', 'Buy milk, eggs, and bread.');
// const todo3 = new ToDo('Exercise', 'Go for a run in the evening.');

// // Create a Project and add the ToDo instances to it
// const project1 = new Project('Work');
// project1.addToDo(todo1);
// project1.addToDo(todo2);

// const project2 = new Project('Personal');
// project2.addToDo(todo3);

// // Add the Projects to the ToDoList
// ToDoList.addProject(project1);
// ToDoList.addProject(project2);

// // Add more individual todos
// const todo4 = new ToDo('Read a book', 'Read for at least 30 minutes every day.');
// ToDoList.addIndividualToDo(todo4);

// // Export the ToDoList
// export { myToDoList, ToDoList };
