# Todo List App

## Overview

This project is a dynamic Todo List application where users can create and manage their todo items and projects. The application allows users to organize their tasks into different projects, set priorities, add descriptions, and manage due dates. It also includes functionality for saving and retrieving data using the Web Storage API, ensuring persistence across sessions.

## Features

### Todo Items
- **Properties**:
  - `title`: The title of the todo item.
  - `description`: A brief description of the task.
  - `dueDate`: The due date for the task.
  - `priority`: The priority level of the task (e.g., low, medium, high).

### Projects
- Users can create multiple projects to organize their todo items.
- A default project is available when the user first opens the app.
- Users can add a todo item to the default project or to a project that the user created.

### Application Logic
- Separate modules handle the application logic and DOM manipulation.
- Core functionalities include:
  - Creating new todos.
  - Marking todos as complete.
  - Editing todo.
  - Deleting todos.

### User Interface
- View all todos and projects.
- View all todos only.
- View all projects only.
- Color-coded priorities for easy identification.
- Expand a todo item to edit its details.
- Delete a todo item.

### Libraries and Tools
- **Webpack**: Used for module bundling.
- **date-fns**: A handy library for formatting and manipulating dates and times.

### Data Persistence
- Utilizes the Web Storage API to save data on the user's computer.
- **localStorage**:
  - Saves projects and todos to localStorage on creation.
  - Retrieves data from localStorage when the app is loaded.
  - Ensures data is only accessible on the computer it was created on.
