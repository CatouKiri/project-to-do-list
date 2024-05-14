const toDoList = [
    {
        title: "Bench Press",
        description: "Do 10 bench press with 40lbs dumbells",
        dueDate: "12-31-2024",
        completed: false
    },
    {
        title: "Sweep floor",
        description: "",
        dueDate: "07-14-2024",
        completed: false
    }
]

const projectToDoList = [
    {
        name: "The Odin Project",
        projectDescription: "Finish Programming Course",
        toDos:[
            {
            title: "Lesson 1",
            description: "What is HTML?",
            dueDate: "06-01-2024",
            completed: false
            },
            {
            title: "Lesson 2",
            description: "What is CSS?",
            dueDate: "07-01-2024",
            completed: false
            },
            {
            title: "Lesson 3",
            description: "What is Javascript?",
            dueDate: "08-01-2024",
            completed: false
            }
        ]
    },
    {
        name: "5 Day Dumbell Program",
        projectDescription: "Exercise Program",
        toDos:[
            {
            title: "Day 1",
            description: "Upper Body Exercise",
            dueDate: "06-01-2024",
            completed: false
            },
            {
            title: "Day 2",
            description: "Lower Exercise",
            dueDate: "07-01-2024",
            completed: false
            }
        ],
    }
]

// TODO CONSTRUCTOR
function toDo(title, description) {
    this.title = title;
    this.description = description;
}

// PROJECT TODO CONSTRUCTOR
function projectToDo(name, projectDescription) {
    this.name = name;
    this.projectDescription = projectDescription;
}

export { toDoList, projectToDoList };