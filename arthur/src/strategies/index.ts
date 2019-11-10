import passport from 'passport';
import { addUserSession } from '../session';
import { UserSession } from '../types';
import { configure as configureGitHubStrategy } from './github';
import { configure as configureGoogleStrategy } from './google';
import { configure as configureHeaderStrategy } from './header';
import { configure as configureLocalStrategy } from './local';

export { configureLocalStrategy, configureGoogleStrategy, configureGitHubStrategy, configureHeaderStrategy };

passport.serializeUser((user, done) => {
  addUserSession(user as UserSession);

  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
