This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code princples and project management recommendations. Feel free to change anything.

`src`-> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of test. (You might want to make separate tests folder)

Lets take a look inside the `src` folder

- `config` -> In this folder anything and everything regarding any configurations or setup of a library or modulle will be doen. For example: setting up `dotenv`so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` -> They are just going to intercept the incomming requests where we can write our validators, authencticators etc.

- `controllers`-> They are kind of the last middlewares as post them you call you business layer to execute the business logic. In controlles we just recieve the incomming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

- `repositories` -> This folder contains all the logic using which we interact the DB by writing queries, all the raw queries, all the raw queries or ORM queries will go here.

- `services` -> Contains the buisiness logic and interact with repositories for data from the database.

- `utils` -> contains helper method, error classes etc. 

### Setup the project 

- Download this template from github and open it in your favourite text editor.
- In the root directory create a `.env`file and add the following env variables 
    ```
    PORT =<port number of your choice>
    ```
    ex:
    ```
    PORT=3000   
    ```
- Go inside the `src/` folder `cd src/` and write following command
```
  npm sequelize cli
```
- You will get modal if you don't have previously and `config.json` inside config forlder.
- If you're setting up your development environment, then write the name of your username or your db, password of your db and in dialect mentino whatever db you are using for ex: mysql, mariadb etc
- if you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

