import mongoose from 'mongoose';
import { RateLimiterMongo } from 'rate-limiter-flexible';
// import { errorHelper } from '../utils/index.js';

import { dbUri } from './index.js';

export const mongooseLoader = async () => {
    mongoose.set("strictQuery", false);
    await mongoose.connect(dbUri, {})
        .then(() => {
            console.log(`Mongodb is connected: ${dbUri}`);
        })
        .catch(err => {
            console.log(err);
        });
};


export const rateLimiter = (req, res, next) => {
    const mongoConn = mongoose.createConnection(dbUri, {});

    const opts = {
        storeClient: mongoConn,
        tableName: 'rateLimits',
        points: 100, // x requests
        duration: 60 // per y second by IP
    };
    const rateLimiterMongo = new RateLimiterMongo(opts);
    rateLimiterMongo.consume(req.ip)
        .then(() => {
            next();
        })
        .catch((err) => {
            // return res.status(429).json(errorHelper('00024', req, err.message));
        });
}