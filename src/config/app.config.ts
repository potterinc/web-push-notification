import { configDotenv } from "dotenv";

if (process.env.NODE_ENV !== 'production')
  configDotenv();

const AppConfig: any = {
  db: {
    url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSKEY}@ewriter.y9z37mo.mongodb.net/HealthChecker`,
  },
  server: {
    url: process.env.BASE_URL,
    port: process.env.PORT || 5200
  }
};

export default AppConfig;