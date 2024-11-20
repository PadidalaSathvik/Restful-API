# Restful-API

Running the Application:

To start the server, use the following command:

npm start.

This will run the server on http://localhost:3001.

You should see the following output in the terminal:
Server is running on port http://localhost:3001.

Testing the Application:

The application includes unit tests to verify the behavior of the API. The tests are written using Mocha and Chai.

To run the tests, use the following command:

npm test

Testing with Mocha and Chai:

If the /custemers/:id endpoint returns the correct customer data when provided a valid ID.

If the /custemers/:id endpoint returns a 404 error for a non-existent customer ID.

Test cases:

GET /custemers/

: Should return the customer with the correct ID.

GET /custemers/

: Should return a 404 error for a non-existent customer ID.

GET /custemers/:id

  ✓ should return the customer with the correct ID
  
  ✓ should return 404 for a non-existent customer ID
  
API Endpoints:

GET /custemers/:id

This endpoint returns customer data for a given ID.
