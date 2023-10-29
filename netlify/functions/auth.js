import express from 'express';
import serverless from 'serverless-http';

const app = express();


app.get('/.netlify/functions/auth/logout', (_, res) => {
  return res
    .cookie('token', "").cookie('role', '')
    .redirect('/');
});

export const handler = serverless(app);