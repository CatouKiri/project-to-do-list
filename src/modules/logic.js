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

// TODO CONSTRUCTOR
function toDo(title, description) {
    this.title = title;
    this.description = description;
}

export { toDoList, projectToDoList };