import express from 'express';
import { getPublicReviews } from '../controllers/reviewController';

const router = express.Router();

router.get('/public', getPublicReviews);

export default router;
