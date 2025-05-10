import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import reviewRoutes from "./routes/reviewRoutes.js";
import placesRoutes from './routes/placesRoutes.js';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../dist/client')));

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', contactRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/places', placesRoutes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../dist/client', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
