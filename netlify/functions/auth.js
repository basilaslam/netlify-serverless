import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors'
const app = express();

const corsOptions = {
  origin: 'https://visaa.vercel.app',
  optionsSuccessStatus: 200
}

app.use(cors())

app.get('/.netlify/functions/auth/logout', (_, res) => {
  return res
    .cookie('token', "").cookie('role', '')
    .redirect('/');
});

export const handler = serverless(app);