import express from 'express';
import { port } from './config/index.js';
import { server } from './config/server.js';

const app = express();

server(app);

app.listen(port, err => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server started at port: ${port}`);
});

export default app