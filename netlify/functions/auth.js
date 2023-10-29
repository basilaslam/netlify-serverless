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

  res.clearCookie('role')
  res.clearCookie('token');
  return res.json({message: "successfully logged out"},{status: 200})
});

export const handler = serverless(app);