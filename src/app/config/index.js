import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT ,
  database_url: process.env.DATABASE_URL,
jwt_access_secret: process.env.JWT_ACCESS_SECRET,
expiresIn: process.env.EXPIRESIN,
jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
expiresIn_refresh: process.env.EXPIRESIN_REFRESH

};