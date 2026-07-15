import express from 'express';
import dotenv from 'dotenv';
import './config/database';
import apiRoutes from './routes';
import { getApiBaseUrl } from './utils/apiUrl';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend', apiBaseUrl: getApiBaseUrl() });
});

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`OctoFit backend listening on port ${port}`);
  console.log(`API base URL: ${getApiBaseUrl()}`);
});
