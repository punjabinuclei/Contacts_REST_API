Contact Management App with Express.js and MongoDB
Welcome to the Contact Management App project, built with Express.js and MongoDB. This RESTful API application is designed to manage contacts and users, providing full CRUD (Create, Read, Update, Delete) functionality for contacts, user registration, user login with JWT authentication, and more.

Project Overview
In this project, you'll find a comprehensive implementation of a Contact Management API, which includes:

Express Server Setup: Learn how to set up an Express.js server to handle HTTP requests.
Thunder Client Integration: Set up Thunder Client, an extension for Visual Studio Code, for testing API endpoints.
REST API Convention: Follow best practices for designing RESTful API routes and endpoints.
Contacts CRUD Operations: Implement complete CRUD operations (Create, Read, Update, Delete) for managing contacts.
Error Handling Middleware: Create error handling middleware to provide meaningful responses and improve error handling.
Express Async Handler: Utilize the express-async-handler package to handle asynchronous operations more effectively.
MongoDB Setup: Set up and connect your Express app to a MongoDB database.
Mongoose Schema Design: Design Mongoose schemas for both contacts and users.
User Registration & Authentication: Learn how to register users securely and handle user authentication with JWT tokens.
Route Protection: Protect routes using middleware to ensure only authenticated users can access certain endpoints.
User-Contact Relationship: Understand how to establish relationships between user and contact schemas.
Getting Started
To get started with the Contact Management App, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/contact-management-app.git
cd contact-management-app
Install dependencies:

Copy code
npm install
Set up environment variables:
Create a .env file and add necessary environment variables (if any).

Start the server:

sql
Copy code
npm start
API Endpoints
GET /api/contacts: Get all contacts.
POST /api/contacts: Create a new contact.
GET /api/contacts/:id: Get a specific contact.
PUT /api/contacts/:id: Update a contact.
DELETE /api/contacts/:id: Delete a contact.
POST /api/users/register: Register a new user.
POST /api/users/login: Authenticate user login and return an access token.
GET /api/users/current: Get current user details (protected route
