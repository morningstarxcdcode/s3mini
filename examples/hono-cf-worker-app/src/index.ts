import { Hono } from 'hono';
import { s3mini } from '../../../dist/s3mini.js';

const app = new Hono();

app.get('/', c => {
  const s3 = new s3mini({});
  return c.text('Hello Hono!');
});

export default app;
