import * as dotenv from "dotenv";
dotenv.config();
export const config = {
  username: `${process.env.POSTGRES_USER}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  dbPort:Number(process.env.POSTGRES_PORT),
  Port: 8080,
  host: process.env.POSTGRES_HOST,
  dialect:process.env.dialect,
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  JWT_secret:`${process.env.TOKEN_SECRET}` ,
};
