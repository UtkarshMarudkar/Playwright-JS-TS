API - Application Programming Interface

eng speak --->   translator   ---> japan lang

java --->  api ----> c#                --- behave like interface for communication

certain rules

SOAP - more secure - stateful & stateless
REST - 99% is used - stateless

1 - authentication
    - stateless - need proof 
    - stateful - no need of proof

authapi -> credential -> token (valid for certain time period)  -  authtoken

2 - all endpoint information or resources

3 - body/payload

        /users?page=1&pageSize=10&sortBy=createdAt&sortDir=desc&q=&role=&status=

        1 - query parameter (url) &,key and values
        2 - path parameter (url) - {{usersApiBase}}/users/kjhbgkjhb  -         ID
        3 - payload (Json)

4 - Methods

    GET - Read
    POST - Create
    PUT - Update
    PATCH - Partially update
    DELETE - delete

5 - Response

    1 - response code  - 5 types
        1XX - Informational message
        2XX - Success message - 200-OK, 201-CREATED, 204-NO-CONTENT
        3XX - Redirectional - 300-multiple request, 301- moved permanently
        4XX - Client side errors - 
                400-BAD-REQUEST, 401-Unathorized, 403-Forbidden (expired, invalid, no-auth to acceendpoint,404-NoResourse found, 
                405 - method not allowed, 409 - conflict, 415 - unsupported media, 429 - too many request )
        5XX - Server side errors - 500  internal server error, 503-service not available - raise defect ( developer's mistake ) 

    2 - response header - header info
    3 - response body - json file, xml, html


