const toDoList = [
    {
        id: "1",
        title: "Bench Press",
        description: "Do 10 bench press with 40lbs dumbells",
        dueDate: "12-31-2024",
        completed: false
    },
    {
        id: "2",
        title: "Sweep floor",
        description: "",
        dueDate: "07-14-2024",
        completed: false
    }
]

const projectToDoList = [
    {
        id: "8",
        name: "The Odin Project",
        projectDescription: "Finish Programming Course",
        toDos:[
            {
                id: "3",
                title: "Lesson 1",
                description: "What is HTML?",
                dueDate: "06-01-2024",
                completed: false
            },
            {
                id: "4",
                title: "Lesson 2",
                description: "What is CSS?",
                dueDate: "07-01-2024",
                completed: false
            },
            {
                id: "5",
                title: "Lesson 3",
                description: "What is Javascript?",
                dueDate: "08-01-2024",
                completed: false
            }
        ]
    },
    {
        id: "9",
        name: "5 Day Dumbell Program",
        projectDescription: "Exercise Program",
        toDos:[
            {
                id: "6",
                title: "Day 1",
                description: "Upper Body Exercise",
                dueDate: "06-01-2024",
                completed: false
            },
            {
                id: "7",
                title: "Day 2",
                description: "Lower Exercise",
                dueDate: "07-01-2024",
                completed: false
            }
        ],
    }
]

// TODO CONSTRUCTOR
export function toDo(id, title, description, dueDate, completed = false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = completed;
}

// PROJECT TODO CONSTRUCTOR
export function projectToDo(id, name, projectDescription, toDos = []) {
    this.id = id;
    this.name = name;
    this.projectDescription = projectDescription;
    this.toDos = toDos;
}

// CHECK IF TO BE DELETED IS IN TODOLIST OR TODOPROJECT
export function checkIfToDoOrProject(id) {
    // Check in toDoList
    for (const toDo of toDoList) {
        if (toDo.id == id) {
            let parentObject = toDoList;
            let targetObject = toDo;
            return {
                parentObject,
                targetObject,
            };
        }
    }

    // Check in projectToDoList for project IDs
    for (const project of projectToDoList) {
        if (project.id == id) {
            let parentObject = projectToDoList;
            let targetObject = project;
            return {
                parentObject,
                targetObject,
            };
        }

        // Check in each project's toDos
        for (const toDo of project.toDos) {
            if (toDo.id == id) {
                let parentObject = project.toDos;
                let targetObject = toDo;
                return {
                    parentObject,
                    targetObject,
                };
            }
        }
    }
}

export { toDoList, projectToDoList };