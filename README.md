# API ROUTERS

This project is a API to **_Note List_**  Web App

> This project use <a href="https://expressjs.com/" >__Express.js__</a>, <a href="https://github.com/axios/axios">__Axios__</a>, <a href="https://github.com/expressjs/cors">__Cors__</a>, <a href="https://firebase.google.com/?hl=pt-br" >__Firebase__</a> to __Database__ and <a href="https://www.heroku.com/" >__Heroku__</a> to VPS.

---
## Start this aplication
**Open your bash and write**
````bash
$ git clone https://github.com/samuelguedesalves/api_web_service.git

$ cd api_web_service

$ npm install

$ npm start
````
___

## LOGIN
This router is responsible for `login to user`, and `init a session`.
> https://api-carrot.herokuapp.com/auth/authenticate

````bash
Method: POST

Request Body: {
    email : "<e-mail>",
    password : "<password>",
}

response:{
    user: { "name", "email"},
    token: "token"
}
````
> **obs: save this response token in _LocalStorege_, and use in request router to app**

## REGISTER
this router register `new user`
> https://api-carrot.herokuapp.com/auth/register

````bash
Method: POST

Request Body: {
    name: "<name>",
    email: "<e-mail>",
    password: "<password>"
}

Response:{
    user: { "name", "email" },
    token: "token"
}
````
> **obs: save this response token in _LocalStorege_, and use in request router to app**

## LIST
this router return a note list to user, using user token
> https://api-carrot.herokuapp.com/app/list

````bash
Method: GET

Request Header:{
    Authorization: "<token>"
}

Response:{
    notes: {
        "<Note list>"
    }
}
````

## CREATE
this Router is used for create a task
> https://api-carrot.herokuapp.com/app/create

````bash
Method: POST

Request:{
    Body:{
        text: "<text note>"
    },
    Header: {
        Authorization: "<token>"
    }
}

Response:{
    _id: "note id",
    text: "text note"
}
````

## UPDATE
this router realize a task update
> https://api-carrot.herokuapp.com/app/update

````bash
Method: PUT

Request: {
    Body: {
        noteId: "<note id>",
        text: "<new note text>"
    },
    Header: {
        Authorization: "<token>"
    }
}
````

## DESTROY
this router destroy a note
> https://api-carrot.herokuapp.com/app/destroy

````bash
Method: DELETE

Request: {
    Header: {
        Authorization: "<token>",
    },
    Query: {
        noteId: "<note id>"
    }
}

Response: {
    Status: true
}
````
