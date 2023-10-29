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

  res.clearCookie('role').
  clearCookie('token').status(200).json({message: "Successfully Logged Out"})
});

export const handler = serverless(app);