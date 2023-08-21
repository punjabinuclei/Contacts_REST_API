
# Contact Management App with Express.js and MongoDB
Welcome to the Contact Management App project, built with Express.js and MongoDB. This RESTful API application is designed to manage contacts and users, providing full CRUD (Create, Read, Update, Delete) functionality for contacts, user registration, user login with JWT authentication, and more.

## API Endpoints
* GET /api/contacts: Get all contacts.
* POST /api/contacts: Create a new contact.
* GET /api/contacts/:id: Get a specific contact. 
* PUT /api/contacts/:id: Update a contact.
* DELETE /api/contacts/:id: Delete a contact.
* POST /api/users/register: Register a new user.
* POST /api/users/login: Authenticate user login  and return an access token.
* GET /api/users/current: Get current user details (protected route).
