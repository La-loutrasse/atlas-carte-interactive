import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import contactRoutes from './routes/contactRoutes';
import reviewRoutes from "./routes/reviewRoutes";
import placesRoutes from './routes/placesRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', contactRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/places', placesRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
