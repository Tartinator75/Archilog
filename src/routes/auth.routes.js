const express = require('express')
const app = express()
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport');
const cookieSession = require('cookie-session')
require('passport');

app.use(cors())

// parse application
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Pour une application réelle, il faut configurer cela avec un temps d'expérience, un proxy et une sécurité
app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
  }))

// Auth middleware qui vérifie si l'utilisateur est connecté
const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

// Initialise les sessions de passeport et de passeport
app.use(passport.initialize());
app.use(passport.session());

// Exemples de routes auth et non auth
app.get('/', (req, res) => res.send('Home page!'))
app.get('/failed', (req, res) => res.send('Connexion echoue!'))

// Dans cet route, von peut voir que si l'utilisateur est connecté, on peut accéder à ses informations dans: req.user
app.get('/connecte', isLoggedIn, (req, res) => res.send(`Welcome mr ${req.user.displayName}!`))

// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // authentication réussie, redirection page principale.
    res.redirect('/connecte');
  }
);

app.get('/deconnecte', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

module.exports = router;

// app.listen(4000, () => console.log(`Exemple app sur le port ${4000}!`))