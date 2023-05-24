# Node.js MySQL Simple CRUD

This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js and MySQL. It provides a basic web api to perform CRUD operations on a MySQL database.

## Prerequisites

Before running this project, ensure that you have the following installed on your system:

- Node.js (v12 or higher)
- MySQL Server

## Getting Started

To get started with this project, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/usefsame7/Node.js-MySQL-Simple-CRUD.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Node.js-MySQL-Simple-CRUD
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a MySQL database and configure the connection:

   - Open `config.js` file located in the root directory.
   - Update the `host`, `user`, `password`, and `database` fields according to your MySQL configuration.

5. Initialize the database:

   ```bash
   npm run initdb
   ```

   This will create the necessary table in your MySQL database.

6. Start the application:

   ```bash
   npm start
   ```

7. Open your web browser and visit `http://localhost:3000` to access the application.

## Usage

The application provides a simple web interface to perform CRUD operations on a database table. You can perform the following actions:

- **Create**: Click on the "Add New" button to add a new record to the table.
- **Read**: The table displays the existing records in the database.
- **Update**: Click on the "Edit" button next to a record to modify its values.
- **Delete**: Click on the "Delete" button next to a record to remove it from the database.

