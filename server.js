const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const slug = require('slug');
//setting up & configure the .env module and file
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8080;
// required MongoDB | made object of the const so can use 'new' |
const { MongoClient } = require('mongodb');

//testing connection to the .env file
console.log(process.env.TEST);

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
        //custom helper to capitalize the first letter of the word
        //sources: https://www.samanthaming.com/pictorials/how-to-capitalize-a-string/ & https://youtu.be/2BoSBaWvFhM
        capitalize: function capitalize(str) {
            const lower = str.toLowerCase()
            return str.charAt(0).toUpperCase() + lower.slice(1);
        }
    }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// makes sure you can use req.body for adding to database.
// when removing the urlencoded part, sometime is added to the database, but the data is undefined.
app.use(express.json());
app.use(express.urlencoded());
// sets public map to use your static files (css for example)
app.use(express.static('public/'));





// routing
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        style: 'zero.css'
    });
});

app.get('/home',  (req, res) => {     
    res.render('home', {
        title: 'Home',
        user: "user",
        style: 'home.css'
    });
})

app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Log In',
        style: 'login.css'
    });
});

app.get('/signup', (req, res) => {
    res.render('signup', {
        title: 'Sign Up',
        style: 'signup.css'
    });
});

app.post('/signup', async (req, res) => {
    try {
        let addUser = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            latitudeCoordinates: req.body.latitude,
            longitudeCoordinates: req.body.longitude
        }
        await database.collection('users').insertOne(addUser);

        res.render('signup-succesful', {
            title: 'Sign Up Succesful',
            style: 'succes.css'
        })
        console.log('signup succesful')
        console.log("email:" + " " + req.body.email)
        console.log("username:" + " " + req.body.username)
        console.log("password:" + " " + req.body.password)
        console.log("latitude coordinates:" + " " + req.body.latitude)
        console.log("latitude coordinates:" + " " + req.body.longitude)


    } catch {
        res.redirect('/')
        console.log('signup not succesful')
        console.log(req.body.username)
        console.log(req.body.password)
    }
});

app.post('/login', async (req, res) => {

    // partially made by me, partially from https://youtu.be/V8dYGNfHjfk
    
    try {
        const check = await database.collection('users').findOne({username:req.body.username});       

            if(check.password===req.body.password) {
                    res.render('home', {
                        title: 'Home',
                        user: req.body.username,
                        style: 'home.css'
                    });
                console.log('login succesful')
                
            }
            else {
                res.send('wrong password')
            }
        
    } catch {
        res.send('wrong username and/or password')
    }
});

app.get('/list', (req, res) => {
    res.render('list', {
        title: 'Liked Songs',
        style: 'list.css',
        song: [
            {
                "name": "Paint It Black",
                "album": "Aftermath",
                "year": "1966", 
                "artist": "AC/DC"
            },
            {
                "name": "Bohemian Rhapsody",
                "album": "A Night at the Opera",
                "year": "1975", 
                "artist": "Queen"
            }
        ]
    })
})

app.get('/settings', (req, res) => {
    res.render('settings', {
        title: 'Settings',
        style: 'settings.css',
        
    })
})










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
