export { default as swaggerConfig } from './swagger.config.js'
import { config } from 'dotenv';
config();


export const nodeEnv = process.env.NODE_ENV;
export const crosOrigin = process.env.CROS_ORIGIN;

export const port = process.env.PORT;
export const jwtSecretKey = process.env.JWT_SECRET_KEY;
export const refreshTokenSecretKey = process.env.REFRESH_TOKEN_SECRET_KEY;
export const dbUri = process.env.DB_URI;
// export const awsAccessKey = process.env.AWS_ACCESS_KEY_ID;
// export const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
// export const awsRegion = process.env.AWS_REGION;
// export const bucketName = process.env.BUCKET_NAME;
export const api = '/api/v1';
export const apiDocs = "/docs";