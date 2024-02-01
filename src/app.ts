import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import baseRouter from "./routes/index.routes";
import AppConfig from "./config/app.config";

// Loading environmental variables on production
if (process.env.NODE_ENV !== 'production')
  configDotenv();

const app: Application = express();

// Initializing Application services
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ 'origin': '*' }));
app.use(helmet());

// Routes
app.use(`${AppConfig.server.url}`, baseRouter);
app.get('/', (req: Request, res: Response) => {
  res.redirect(`${AppConfig.server.url}`)
});


app.listen(AppConfig.server.port, () => console.warn(`Server Running \nPORT: ${AppConfig.server.port}`));