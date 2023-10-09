# Multi-Tab SQL Query Editor with Query Visualization

## Overview

This project is a versatile SQL query editor designed to help users work on multiple SQL queries concurrently, visualize their data, and save/query their work efficiently. It serves as a valuable tool for database professionals, analysts, and developers.

## Key Features

### Tabbed Interface

- The application offers a tabbed user interface, enabling users to work on multiple SQL queries simultaneously.
- Users can easily switch between open tabs using the tab bar.

### Tab Management

- Users can add new tabs to start working on a new SQL query.
- Tabs can be closed. If a non-active tab is deleted, users can continue working on the current tab.
- In the event of deleting the active tab, the application smartly switches to the previous tab, ensuring a smooth workflow.

### SQL Query Editor

- Each tab contains a SQL query editor where users can conveniently write and edit SQL queries.

### Query Execution

- Users can run SQL queries within each tab, and the results are displayed within the application.
- Currently, the application uses dummy data for query results.

### Tab Saving

- Users can save a tab with a custom name, preserving the SQL query.
- Saved tabs are listed in the left panel under the "Saved Queries" heading.

### Table Visualization

- The application allows users to visualize the tables. Dummy Tables are provided in the left panel under the heading "All Tables".

## Technology Stack

- **Frontend:** Developed using React.js and the Monaco React Editor library for the code editor component.
- State management: Utilizes `useContext` and `useReducer` for centralized state management, avoiding prop drilling.
- Other libraries and tools as needed.

## Getting Started

1. Clone this repository to your local machine.
2. Install the necessary dependencies using your package manager of choice (`npm install` or `yarn install`).
3. Run the development server (`npm start` or `yarn start`).
4. Access the application in your web browser at `http://localhost:3000`.

