# API ROUTERS

This project is a API to **_Note List_**  Web App

> This project use <a href="https://expressjs.com/" >__Express.js__</a>, <a href="https://github.com/axios/axios">__Axios__</a>, <a href="https://github.com/expressjs/cors">__Cors__</a>, <a href="https://firebase.google.com/?hl=pt-br" >__Firebase__</a> to __Database__ and <a href="https://www.heroku.com/" >__Heroku__</a> to VPS.

___

## LOGIN
This router is responsible for `login to user`, and `init a session`.
> https://api-carrot.herokuapp.com/login

        Post variables:
            {
                "user_email": "value",
                "user_password" : "value"
            }

## LOGOUT
This router make a `logout to user`, and `session expires`.
> https://api-carrot.herokuapp.com/logout

        Post variables:
            {
                "user_token": "value"
            }

## NEW USER
this router register `new user`
> https://api-carrot.herokuapp.com/new_user

        Post variables:
            {
                "name_user": "value",
                "email_user": "value",
                "password_user": "value"
            }

        Response variables:
            {
                "user_token": "value"
            }