# tech-her

## Prerequirements

When using this application you should have basic knowledge of `NodeJS` and `MongoDB`. You need to have a code editor (I'm currently using VS Code). With NodeJS you will need to use npm commands to install the dependencies for the package and to run the application. You will also need to have your own [MongoDB account](https://www.mongodb.com/), and your own database called "users" and a collection inside the database also called "users". 

## running the application

1. download a zip of the code or fork the repository
2. Open the folder in your preferred code editor and open your terminal. 
3. In your terminal, run the command `npm install` to install all missing packages and modules needed in this application.
4. When the installation of the dependencies have finished, you should make a connection to your database (see [`Setting Up Database and Needed Files`](https://github.com/YaraPrins/tech-her/blob/main/README.md#setting-up-database-and-needed-files)). 
5. After making and connecting your database, run the command `npm start` to run the script `start` from the `package.json` file. This will start up the server.
6. Go in your web browser to the given localhost and port (in the terminal in will be stated where to go).
7. Enjoy the application 

## Setting Up Database and Needed Files.

To be able to use this application, you will need to have your own MongoDB database and a collection in the database. These both will need to be called `users`, for it to work with the written code. For the database you will need to add an 'user' and need to generate a password in the tab `Security` -> `Database Access` (`note!` this is NOT your username and password for your general MongoDB account, but a sepperate account specifically for this database).

To connect your database with the application, you will need to download or fork the code folder, and make an `.env` file. This `.env` will need to be on the same level as the `server.js` and `package.json`. I have given an example `.env` file called `EXAMPLE.env`, where I have stated what to put in your own `.env` file (your mongodb database username and password you just made). When you have made your own `.env` file and put the correct data in them, save the project and you can run your application correctly.

