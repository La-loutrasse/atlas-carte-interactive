import express from 'express';
import { addReview, getPublicReviews } from '../controllers/reviewController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/public', getPublicReviews);
router.post('/', authenticateToken, addReview);

export default router;
