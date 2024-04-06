import { mongooseLoader } from './mongoose.js';
import express from './express.js';

export const server = async (app) => {
  await mongooseLoader();
  express(app);
}