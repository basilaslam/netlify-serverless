import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors'
const app = express();

const corsOptions = {
  origin: 'https://visaa.vercel.app',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.get('/.netlify/functions/auth/logout', (req, res) => {

  console.log(req.cookies('role'))
  res.clearCookie('role').
  clearCookie('token').status(200).json({message: "Successfully Logged Out"})
});

export const handler = serverless(app);