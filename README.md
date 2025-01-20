## Objective: 
Create a Book Management CRUD application using NestJS with a class-based approach and any database of your choice (e.g., MongoDB, PostgreSQL, MySQL). Additionally, the application should include data population from another related table, Author.


### Task Description:
Entities:
Book:
id: Unique identifier (auto-generated)
title: string (required)
authored: reference to Author (required)
published date: Date (optional)
summary: string (optional)


Author:
id: Unique identifier (auto-generated)
name: string (required)
bio: string (optional)


Requirements:
Implement a RESTful API to handle CRUD operations for both Book and Author entities.


The application should support the following operations:

Books:
Create a Book: POST /books
Retrieve All Books: GET /books (should populate author details)
Retrieve a Single Book by ID: GET /books/:id (should populate author details)
Update a Book: PUT /books/:id
Delete a Book: DELETE /books/:id

Authors:
Create an Author: POST /authors
Retrieve All Authors: GET /authors
Retrieve a Single Author by ID: GET /authors/:id
Update an Author: PUT /authors/:id
Delete an Author: DELETE /authors/:id


Ensure that when retrieving a book, the author field is populated with the corresponding author details.
Use a class-based approach for defining the Book and Author entities and related services.

Connect to a database (any of your choice) for storing and managing the data.
Ensure the application handles errors gracefully and returns appropriate HTTP status codes.
Include validation for the Book and Author entity fields using NestJS validation pipes.

Deliverables:
A GitHub repository with the complete source code.
A README file with instructions on how to set up and run the application.
(Optional) Basic API documentation describing the endpoints and expected payloads.

Time Allocation:
You have 1 hour and 30 minutes to complete this task.


Evaluation Criteria:
Code Quality: Clean, maintainable, and well-structured code.
Functionality: All CRUD operations should work as expected, including the data population.
Database Integration: Proper use of a database to persist data.
Data Population: Correct population of author details in Book responses.
Error Handling: Appropriate error responses and status codes.
Validation: Correct validation of input data.


Usage of NestJS: Proper use of NestJS features such as modules, controllers, services, and dependency injection.

Tips:
Focus on getting the core CRUD functionality working first.
Ensure the data population works correctly when retrieving books.
Use best practices for API design and coding standards.
Keep the solution simple and functional; no need for advanced features.
Use comments where necessary to explain your logic.
