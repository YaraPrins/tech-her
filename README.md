# Tech-Her

## Welcome to Musicr - The Music Matcher

<img src="https://user-images.githubusercontent.com/27287809/162638935-1ce9cafb-3544-4d41-a136-86e3c6eee140.png" width="300" align="right">

This repository is meant for a course (Blok Tech) of my study, Communication & Multimedia Design on the Amsterdam University of Applied Sciences. <br>
In this repo I'll list and commit my projects and my classes, and will keep them up to date.

I will also put the research and study I did in my wiki, you'll be able to keep track of everything I did and used for this course.

--------------------------------------------

## The Assignment

For this course, we need to design and create a Matching Application and this application can be all sorts of matching.

For instance, matching:
* People with people
* People with things
* People with animals
* People with places
* Animals with animals

Etc.

### The Application (summary)

I have chosen to make an matching application for people, matching them with new music.

Users of this app can, when making their account, select the music that they are already fan off, listening to, or preference to certain genres. <br>
Then, the app will show them recommended music, based on similar artist, songs, or popular tracks that others are fan off. <br>
Users get to like, dislike (not for me), or super like a song, and will be able to immediately add the song to their music library of choice. <br>
Songs that they like will also be saved in a Liked Songs library on the app itself, so the user can keep track of their liked songs and easily find them again if needed.

In the app, you can connect with your friends (whome also use the app), and you can get matched sooner with songs that your friends have also liked (as in, if one or more of your friends like a song, that song will appear quicker on your homescreen to match with, then songs based of the music library from for example Spotify, Apple Music or the In-App Music Library).


--------------------------------------------

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

### What to do in case of errors?

Make sure you have a working internet connection, and if your IP address has been whitelisted for your Database. Also make sure that you've installed all package dependencies in the application by running the command `npm install` in your code terminal.
Check if your `.env` file has been set up correctly and if your database username and password are correct.
Lastly, in case all of the above is not working, you can contact me through the contact details below.

### Contribution

This application has been made by Yara Prins. All of the sources I've have used have been written down either in the wiki for this repository, or in the code itself. If you spot an error or if you have suggestions for this application, feel free to contact me through the details below.

### Contact

You can contact me by mailing me on [yara.prins@hva.nl](mailto:yara.prins@hva.nl) or message me on [LinkedIn](https://www.linkedin.com/in/yara-p-2570248b)

