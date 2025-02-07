# Library Checkout App, API, and Authentication 
Build the front end of the online public library service with the API provided documentation. Allow user to view catalogue, register/login and check out books (viz-a-viz CRUD interface, user authentication, via JSON Web Tokens).

(React, API, authentication, JSON web tokens)

## Initialize project
Create a new React App from scratch
Review the linked API which is hosted on the BookBuddy API.  Note: This API is different in that it allows us to do more than request data. It also allows us to log in, and even check out books. To do this, recall CRUD and user authentication via JSON Web Tokens (JWT).
Review the overall flow of the applications you have created so far: 
Fetch the initial data and build the application state
Plan out event listeners for the interface.
User interaction triggers event listeners, which in turn update data in multiple places:
Pass update requests to API.
API returns success or failure for an update.
On success, update state to reflect the change.
On failure, render a useful error message to user.
React re-renders components based on updated state.

## Requirements
I - Build a basic Frontend Application
All users should be able to:
See all books in the library’s catalog
View details of an individual book
Log in to an existing account
Register a new account

II - Logged in Functionality
Logged in users should be able to:
Checkout an available book
View their account details
Name
Email
Books currently checked out
Users should be able to return books that they previously checked out