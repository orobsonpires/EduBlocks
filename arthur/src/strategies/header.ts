import express from 'express';
import passport from 'passport';
import { Strategy as CustomStrategy } from 'passport-custom';
import { getUserSession } from '../session';
import { AuthError } from '../types';

export function configure(app: express.Express) {
  passport.use('header', new CustomStrategy(
    async (req, done) => {
      try {
        let token = req.header('x-edublocks-token');

        // If no token in the header, check the querystring.
        if (!token) {
          token = req.query.token;
        }

        if (!token) throw new AuthError(`Invalid token "${token}"`);

        const user = getUserSession(token);

        if (!user) throw new AuthError(`User not found with token "${token}"`);

        done(null, user);
      } catch (err) {
        done(err);
      }
    }),
  );
}
