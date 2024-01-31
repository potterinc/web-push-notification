import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import baseRouter from "./routes/index.routes";

// Loading environmental variables on production
if (process.env.NODE_ENV !== 'production')
  configDotenv();

const app: Application = express();
const port = process.env.PORT || 5200;

// Initializing Application services
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({ 'origin': '*' }));
app.use(helmet());

// Routes
app.use(`${process.env.BASE_URL}`, baseRouter);
app.get('/', (req: Request, res: Response) => {
  res.redirect(`${process.env.BASE_URL}`)
});


app.listen(port, ()=> console.warn(`Server Running \nPORT: ${port}`));