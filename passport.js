const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    /*
    De l'utilisateur, on prend juste l'identifiant (pour minimiser la taille du cookie) 
    et passer simplement l'identifiant de l'utilisateur au callback terminé
    */
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    /*
    Cette fonction reçoit l'identifiant, 
    puis on utilise l'identifiant pour sélectionner l'utilisateur dans la base de donnée 
    et passer l'objet utilisateur au callback terminé
    */
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "545615007763-beu7vnbcs3rrmi9ge0todlul6g0fpf6o.apps.googleusercontent.com",
    clientSecret: "VIRwCcDNJc3QNJSWSM8zZjxo",
    callbackURL: "http://localhost:4000/api/v1/google/callback",
    scope: ['profile', 'email']
},
function(accessToken, refreshToken, profile, done) {
  /*
   On utilise les informations de profil pour vérifier si l'utilisateur est enregistré dans la db 
   Si oui sélectionnez l'utilisateur et passez-le au callback terminé 
   Sinon créez l'utilisateur puis sélectionnez-le et passez au callback
  */
  return done(null, profile);
}
));