import express from 'express';
import passport from 'passport';
import { OAuth2Strategy } from 'passport-google-oauth';
import Config from '../config';
import { loginSuccessTemplate } from '../templates/success';
import { UserSession } from '../types';

export function configure(app: express.Express) {
  // Use the GoogleStrategy within Passport.
  //   Strategies in Passport require a `verify` function, which accept
  //   credentials (in this case, an accessToken, refreshToken, and Google
  //   profile), and invoke a callback with a user object.
  passport.use(new OAuth2Strategy({
    clientID: Config.GOOGLE_CLIENT_ID,
    clientSecret: Config.GOOGLE_CLIENT_SECRET,
    callbackURL: `${Config.Origin}/auth/google/callback`,
  },
    (accessToken, refreshToken, profile, done) => {
      // console.log('accessToken', accessToken);
      // console.log('refreshToken', refreshToken);
      // console.log('profile', profile);

      const { displayName } = profile;

      const user: UserSession = {
        name: displayName,
        token: accessToken,
      };

      return done(null, user);
    },
  ));

  // GET /auth/google
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  The first step in Google authentication will involve
  //   redirecting the user to google.com.  After authorization, Google
  //   will redirect the user back to this application at /auth/google/callback
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }),
  );

  // GET /auth/google/callback
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  If authentication fails, the user will be redirected back to the
  //   login page.  Otherwise, the primary route function function will be called,
  //   which, in this example, will redirect the user to the home page.
  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      if (!req.user) {
        return res.redirect('/auth');
      }

      return res.send(loginSuccessTemplate(req.user));
    },
  );
}
