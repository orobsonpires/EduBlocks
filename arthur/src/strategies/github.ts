import express from 'express';
import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github';
import Config from '../config';
import { loginSuccessTemplate } from '../templates/success';
import { UserSession } from '../types';

export function configure(app: express.Express) {
  passport.use(new GitHubStrategy({
    clientID: Config.GITHUB_CLIENT_ID,
    clientSecret: Config.GITHUB_CLIENT_SECRET,
    callbackURL: `${Config.Origin}/auth/github/callback`,
  },
    (accessToken, refreshToken, profile, done) => {
      const { displayName } = profile;

      const user: UserSession = {
        name: displayName,
        token: accessToken,
      };

      return done(null, user);
    },
  ));

  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => {
      if (!req.user) {
        return res.redirect('/auth');
      }

      return res.send(loginSuccessTemplate(req.user));
    });
}

