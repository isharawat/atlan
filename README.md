# Multi-Tab SQL Query Editor with Query Visualization

## Overview

This project is a versatile SQL query editor designed to help users work on multiple SQL queries concurrently, visualize their data, and save/query their work efficiently. It serves as a valuable tool for database professionals, analysts, and developers.

## [Deployment Link](`https://dynamic-tiramisu-a30a0f.netlify.app/`)

## Key Features

#### Tabbed Interface

- The application offers a tabbed user interface, enabling users to work on multiple SQL queries simultaneously.
- Users can easily switch between open tabs using the tab bar.

#### Tab Management

- Users can add new tabs to start working on a new SQL query.
- Tabs can be closed. If a non-active tab is deleted, users can continue working on the current tab.
- In the event of deleting the active tab, the application smartly switches to the previous tab, ensuring a smooth workflow.

#### SQL Query Editor

- Each tab contains a SQL query editor where users can conveniently write and edit SQL queries.

#### Query Execution

- Users can run SQL queries within each tab, and the results are displayed within the application.
- Currently, the application uses dummy data for query results.

#### Tab Saving

- Users can save a tab with a custom name, preserving the SQL query.
- Saved tabs are listed in the left panel under the "Saved Queries" heading.

#### Table Visualization

- The application allows users to visualize the tables. Dummy Tables are provided in the left panel under the heading "All Tables".

- The application provides table pagination to efficiently manage and navigate large datasets.

## Technology Stack

- Frontend: Developed using `React.js` and `Monaco React Editor` library for the code editor component.
- State management: Utilizes `useContext` and `useReducer` for centralized state management, avoiding prop drilling.

## Application Load Time
- First Contentful Paint : 0.3 s
- Largest Contentful Paint : 0.4 s
- Total Blocking Time : 90 ms
- Cumulative Layout Shift : 0.006
- Speed Index : 1.0 s
- Overall Performance : 99/100
- Measured using lighthouse



## Optimization Performed

#### Pagination for Efficient Rendering of Large Row Datasets

To enhance the performance and user experience of our application, we've implemented a robust Pagination system. This feature is designed to handle and display large datasets without overloading the browser or causing performance issues. 

#### Other enhancements

Initially, each tab had its own SQL query editor component, which tightly coupled the code and result states, making it challenging to manage and store each editor component separately. To enhance code organization and maintainability, the following optimizations were implemented:

- State Centralization: The states for code and result were removed from individual editor components and centralized at the parent component level i.e., tab component.
- Reusability: This change allowed us to reuse a single editor component across multiple tabs, reducing complexity and improving efficiency. 


## Getting Started

- Clone this repository to your local machine.
- Install the necessary dependencies using your package manager of choice (`npm install` or `yarn install`).
- Run the development server (`npm start` or `yarn start`).
- Access the application in your web browser at `http://localhost:3000`.