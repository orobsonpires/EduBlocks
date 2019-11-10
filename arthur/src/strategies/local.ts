import express from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { loginSuccessTemplate } from '../templates/success';
import { UserSession } from '../types';

export function configure(app: express.Express) {
  passport.use(new LocalStrategy((username, password, done) => {
    if (username === 'test') {
      const user: UserSession = {
        name: username,
        token: password,
      };

      return done(null, user);
    }

    return done(null, false, { message: 'Incorrect username.' });
  }));

  app.get('/auth/local', (req, res) => {
    return res.send(`
    <fieldset>
      <legend>Create Super User</legend>
      <form method="POST" action="/auth/local">
        <label for="username">Username</label>
        <input name="username" value="test" /><br />

        <label for="password">Password</label>
        <input name="password" value="password" /><br />

        <button type="submit">Login</button>
      </form>
    </fieldset>
  `);
  });

  app.post('/auth/local', passport.authenticate('local', {
    failureRedirect: '/auth',
  }), (req, res) => {
    if (!req.user) {
      return res.redirect('/auth');
    }

    return res.send(loginSuccessTemplate(req.user));
  });
}
