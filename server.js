const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const port = process.env.PORT || 8080;


//default settings | setting up handlebars
app.engine('hbs', expbs.engine({
    defeaultLayout: 'main',
    extname: 'hbs' 
    }));
app.set('view engine', 'hbs');

// sets public map to use your static files (css for example)
app.use(express.static('public'));



// routing
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        style: 'home.css'
    });
});

app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Log In',
        style: 'login.css'
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
    console.log('Server is starting at port ', 8080);
});
