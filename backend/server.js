import express from 'express';
import postgresClient from './config/db.js';

import userRouter from './routers/userRouter.js';
import categoryRouter from './routers/categoryRouter.js';
import productRouter from './routers/productRouter.js';

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening ${PORT}`);
  postgresClient.connect(err => {
    if (err) {
      console.log(`Connection error`, err.stack);
    } else {
      console.log('db connection successfull');
    }
  });
});
