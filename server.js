const express = require('express');
const app = express();
const expbs = require('express-handlebars');
//setting up & configure the .env module and file
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8080;
// required MongoDB | made object of the const so can use 'new' |
const { MongoClient } = require('mongodb');

//testing connection to the .env file
// console.log(process.env.TEST);

//Database Setup
let database = null;

// function connectDB
// source: https://youtu.be/FNJkd2aDOy0 | MongoDB Connection - be() | Blok Tech | 10/03/2023
// its a async function because we have to wait for the connection to be completed with the database
async function connectDB() {
    //get the URI from the .env file
    const uri = process.env.DB_URI;
    //make a connection to the database
    const options = { useUnifiedTopology: true };
    const client = new MongoClient(uri, options);
    await client.connect();
    database = await client.db(process.env.DB_NAME);
}
connectDB()
    // if the connection to the database is succesful
    .then(() => {
    // show this message
        console.log('Connection to Mongo is succesful')
    })
    // if the connection to the database is not succesful
    .catch( error => {
        // show this message
        console.log(error)
    });


//default settings | setting up handlebars
const hbs = expbs.create({
    defaultLayout: 'main',
    extname: 'hbs',

    // create custom helpers
    helpers: {
        capitalize: function capitalize(str) {
            const lower = str.toLowerCase()
            return str.charAt(0).toUpperCase() + lower.slice(1);
        }
    }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// sets public map to use your static files (css for example)
app.use(express.static('public'));





// routing
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        style: 'zero.css'
    });
});

app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Log In',
        style: 'login.css'
    });
});

app.get('/user/:user', (req, res) => {
    res.render('home', {
        title: `${req.params.user}`,
        style: 'home.css'
    });
});


// app.get('/signup', (req, res) => {
//     res.render('sign-up', { title: 'Sign Up', layout: 'log-in'});
//   });
  
//   app.post('/signup', async (req, res) => {
//       try {
//         let addUser = {
//             name: req.body.username,
//             password: req.body.password,
//             email: req.body.email
//           }
//         await db.collection('users').insertOne(addUser)
//       } catch {
//         res.redirect('/signup')
//       }
//     res.render('log-in', { title: 'Sign Up', layout: 'log-in'});
//   });





// ERROR 404
app.use(function (req, res, next) {
    res.status(404).render('error', {
        title: '404 Not Found',
        style: 'error.css',
        text: 'This isn\'t the page you\'re looking for',
        subText: 'This page does not exist or has been moved'
    });
});
  
// STATUS 500
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).render('error', {
        title: '500 Server Error',
        style: 'error.css',
        text: 'Help me Server-Wan, you\'re our only hope',
        subText: 'There is something wrong with the server. Try again later.'
    });
});
  
  
  
//start app
app.listen(8080, () => {
    console.log(`Server is starting at port ${port}`);
});
