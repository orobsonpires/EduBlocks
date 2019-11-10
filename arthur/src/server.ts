import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import passport from 'passport';
import { getApi } from './api';
import { configureGitHubStrategy, configureGoogleStrategy, configureHeaderStrategy, configureLocalStrategy } from './strategies';
import { AuthError } from './types';

const Port = 8111;

export function startServer() {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(passport.initialize());

  configureLocalStrategy(app);
  configureGoogleStrategy(app);
  configureGitHubStrategy(app);
  configureHeaderStrategy(app);

  app.get('/', (req, res) => {
    res.send('Hello from EduBlocks Authentication Server');
  });

  app.get('/auth', (req, res) => {
    res.send(`
    <script>
    // window.addEventListener('beforeunload', function (e) {
    //   window.opener.postMessage({ error: 'closed' }, '*');
    // });
    </script>

    <a href="/auth/google">Google</a><br />
    <a href="/auth/github">GitHub</a>
    `);
  });

  app.use('/api', getApi());

  app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err instanceof AuthError) {
      // The 403 status code will inform EduBlocks to logout
      return res.status(403).json({ success: false, message: err.message });
    }

    return next(err);
  });

  app.listen(Port, () => {
    console.log('EduBlocks Authentication Server now listen on port', Port);
  });
}
