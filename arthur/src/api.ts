import express from 'express';
import passport from 'passport';

export function getApi() {
  const api = express();

  api.use(passport.authenticate('header'));

  api.get('/files', (req, res) => {
    return res.json([{ path: '/foo' }]);
  });

  return api;
}
