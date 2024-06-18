const toDoList = [
    {
        id: "1",
        title: "Bench Press",
        description: "Do 10 bench press with 40lbs dumbells",
        dueDate: "2024-07-14",
        completed: false
    },
    {
        id: "2",
        title: "Sweep floor",
        description: "",
        dueDate: "2024-12-06",
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
                dueDate: "2024-06-01",
                completed: false
            },
            {
                id: "4",
                title: "Lesson 2",
                description: "What is CSS?",
                dueDate: "2024-07-01",
                completed: false
            },
            {
                id: "5",
                title: "Lesson 3",
                description: "What is Javascript?",
                dueDate: "2024-08-01",
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
                dueDate: "2024-06-01",
                completed: false
            },
            {
                id: "7",
                title: "Day 2",
                description: "Lower Exercise",
                dueDate: "2024-07-01",
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

// LOCAL STORAGE
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

// LOCAL STORAGE
  if (storageAvailable("localStorage")) {
    console.log("avail");
  } else {
    console.log("not avail");
  }

export { toDoList, projectToDoList };
