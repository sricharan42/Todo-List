# Todo List Application

## Overview
This is a simple Todo List application built using React. It allows users to manage their tasks by adding, editing, marking them as completed, and searching for tasks. The application displays tasks in an expandable list format, showing a description and a timestamp of the last update when expanded.

## System Design

### Component Structure
- **App**: The main component that handles the overall state and layout.
- **TaskForm**: A form component for adding and editing tasks.
- **TaskItem**: A component that displays individual tasks with options to mark as done and edit.
- **TaskList**: A component that renders a list of `TaskItem` components and handles filtering based on the search input.

### State Management
State is managed at the `App` component level using the `useState` hook. The main state variables include:
- `tasks`: An array of task objects.
- `searchQuery`: A string for filtering tasks based on their titles.

### Data Storage
For simplicity, the application uses a static JSON file (`tasks.json`) placed in the `public` directory to simulate a data repository. In a real-world application, this data would typically come from a backend API.

## Implementation

### Adding and Updating Tasks
- The `TaskForm` component handles both adding new tasks and updating existing ones. It receives props to determine whether it is in add or edit mode.
- Tasks are managed in the `App` component's state and passed down to `TaskForm` as needed.

### Marking Tasks as Completed
- The `TaskItem` component includes a checkbox to mark tasks as completed. This updates the task's state and re-renders the list.

### Search Functionality
- The `App` component includes an input field for searching tasks. The search query is used to filter the tasks displayed in `TaskList`.

### Expandable List
- Each `TaskItem` can be expanded to show more details, such as the task description and the last updated timestamp.

## Setup and Run

### Prerequisites
- React.js (v14 or later)
- npm (v6 or later)

### Installation
1. **Clone the repository**:
   ```bash
   git clone "https://github.com/sricharan42/Todo-List.git"
   cd todo-list
   npm install
   npm start
