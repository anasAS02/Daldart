import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { httpStatusText } from './utils/httpStatusText';
import { postsRoute } from './routes/postsRoute';

const app = express();
app.use(express.json());

dotenv.config();
const port = process.env.PORT || 5000;

app.use(cors());

app.use('/api/posts', postsRoute);

app.all('*', (req, res) => {
  res.status(404).json({ status: 'Error', message: 'This resource is not available' });
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.statusCode || 500).json({ status: err.statusText || httpStatusText.ERROR, message: err.message, code: err.statusCode || 500, data: null });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
